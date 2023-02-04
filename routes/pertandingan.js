var express = require("express");
var router = express.Router();
const Validator = require("fastest-validator")
const v = new Validator({
    useNewCustomCheckerFunction: true, // using new version
    messages: {
        // Register our new error message text
        unique: "The username is already exist"
    }
});
const { Pertandingan } = require("../models");


router.post("/", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");

    //validation
    const schema = {
        klubA: "string|unique",
        scoreA: "string",
        klubB: "string|unique",
        scoreB: "string"
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res
            .status(400)
            .json(validate);
    }
    //

    // res.send("berhasil cuy");

    const send = await Pertandingan.create(req.body)

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


    const pertandingan = await Pertandingan.findAll();
    res.json(pertandingan);

});

//put
router.put("/:id", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");

    const id = req.params.id;
    let pertandingan = await Pertandingan.findByPk(id)
    if (!pertandingan) {
        return res
            .status(404)
            .json({
                status: 404,
                message: "data tidak ada cuyy"
            });
    }
    //validasi
    const schema = {
        klubA: "string",
        scoreA: "string",
        klubB: "string",
        scoreB: "string"
    }

    const validate = v.validate(req.body, schema)
    if (validate.length) {
        return res
            .status(400)
            .json(validate);
    }
    // proses update
    pertandingan = await pertandingan.update(req.body);
    res.json({
        status: 200,
        messages: "berhasil cuy",
        data: pertandingan,
    });
});

router.delete("/:id", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");

    const id = req.params.id;

    let pertandingan = await Pertandingan.findByPk(id)
    if (!pertandingan) {
        return res
            .status(404)
            .json({
                status: 404,
                message: "data tidak ada cuyy"
            });
    }
    await pertandingan.destroy();
    res.json({
        status: 200,
        messages: "berhasil di hapus",
        data: pertandingan,
    });
});




module.exports = router;
