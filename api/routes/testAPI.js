var express = require("express");
var router = express.Router();
const axios = require('axios');


axios.get('https://content.guardianapis.com/search?q=debates&api-key=test')
    .then(response => {
        console.log(response.data.response.results);
        const data = response.data.response.results;
        router.get("/", function (req, res, next) {
            res.json(data);
        });
    })
    .catch(error => {
        console.log(error);
    });

module.exports = router;