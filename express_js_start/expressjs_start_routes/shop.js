const express = require('express');
const router = express.Router();
const path = require('path');
const adminData = require("./admin");

router.get("/", (request, response, next) => {
    //this is where middleware lives
    console.log(adminData.products);
    const product = adminData.products;
    //response.sendFile(path.join(__dirname, "../", 'expressjs_start_views','shop.html'));
    response.render('shop.pug', { proList: product, docTitle: 'Shop', path: '/'});
});

module.exports = router;