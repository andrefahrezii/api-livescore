var express = require("express");
var router = express.Router();
const Validator = require("fastest-validator")
const v = new Validator()
const { Klubs } = require("../models");


router.post("/", async (req, res) => {
    //validation
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");

    const schema = {
        name: "string",
        kota: "string"
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res
            .status(400)
            .json(validate);
    }
    //

    // res.send("berhasil cuy");

    const send = await Klubs.create(req.body)

    res.json({
        status: 200,
        messages: "berhasil cuy",
        data: send,
    });

});


router.get("/", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");

    const klub = await Klubs.findAll();
    res.json(klub);

});

// get by id
router.get("/:id", async (req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");

    const id = req.params.id;

    let klub = await Klubs.findByPk(id)
    if (!klub) {
        return res
            .status(404)
            .json({
                status: 404,
                message: "data tidak ada cuyy"
            });
    } else {
        res.json({
            status: 200,
            messages: "berhasil cok",
            data: klub,
        });
    }
});
// delet bby id
router.delete("/:id", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");

    const id = req.params.id;

    let klub = await Klubs.findByPk(id)
    if (!klub) {
        return res
            .status(404)
            .json({
                status: 404,
                message: "data tidak ada cuyy"
            });
    }
    await klub.destroy();
    res.json({
        status: 200,
        messages: "berhasil di hapus",
        data: klub,
    });
});

//put
router.put("/:id", async (req, res) => {
    const id = req.params.id;
    let klub = await Klubs.findByPk(id)
    if (!klub) {
        return res
            .status(404)
            .json({
                status: 404,
                message: "data tidak ada cuyy"
            });
    }
    //validasi
    const schema = {
        name: "string",
        kota: "string"
    }

    const validate = v.validate(req.body, schema)
    if (validate.length) {
        return res
            .status(400)
            .json(validate);
    }
    // proses update
    klub = await klub.update(req.body);
    res.json({
        status: 200,
        messages: "berhasil cuy",
        data: klub,
    });
});



module.exports = router;
