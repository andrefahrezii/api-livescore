var express = require("express");
var router = express.Router();
const Validator = require("fastest-validator")
const v = new Validator()
const { Livescore } = require("../models");


router.post("/", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
    //validation
    const schema = {
        klub: "string|optional",
        ma: "number|optional",
        me: "number|optional",
        s: "number|optional",
        k: "number|optional",
        gm: "number|optional",
        gk: "number|optional",
        point: "number|optional"
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res
            .status(400)
            .json(validate);
    }
    //

    // res.send("berhasil cuy");

    const send = await Livescore.create(req.body)

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


    const livescore = await Livescore.findAll();
    res.json(livescore);

});

//put
router.put("/:id", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");

    const id = req.params.id;
    let livescore = await Livescore.findByPk(id)
    if (!livescore) {
        return res
            .status(404)
            .json({
                status: 404,
                message: "data tidak ada cuyy"
            });
    }
    //validasi
    const schema = {
        klub: "string|optional",
        ma: "number|optional",
        me: "number|optional",
        s: "number|optional",
        k: "number|optional",
        gm: "number|optional",
        gk: "number|optional",
        point: "number|optional"
    }

    const validate = v.validate(req.body, schema)
    if (validate.length) {
        return res
            .status(400)
            .json(validate);
    }
    // proses update
    livescore = await livescore.update(req.body);
    res.json({
        status: 200,
        messages: "berhasil cuy",
        data: livescore,
    });
});

router.delete("/:id", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");

    const id = req.params.id;

    let livescore = await Livescore.findByPk(id)
    if (!livescore) {
        return res
            .status(404)
            .json({
                status: 404,
                message: "data tidak ada cuyy"
            });
    }
    await livescore.destroy();
    res.json({
        status: 200,
        messages: "berhasil di hapus",
        data: livescore,
    });
});




module.exports = router;
