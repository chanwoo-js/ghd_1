const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    try {
        const data = req.session;
        res.status(200).json(data);
    } catch (error){
        console.log(error)
        res.status(403).json("user Not Found")
    }
});

module.exports = router;