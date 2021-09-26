const express = require('express');
const router = express.Router();
const path = require('path');
const products  = [];


router.get("/add-product", (request, response, next) => {
    //this is where middleware lives
    //response.sendFile(path.join(__dirname, '../','expressjs_start_views','add-product.html'));
    response.render('add-product.pug', { docTitle: 'Add Product', path: '/admin/add-product'});
});

router.post("/product", (request, response, next) => {
    //this is where middleware lives
    products.push({title: request.body.title, price: request.body.price, description: request.body.description});
    response.redirect("/");
    
});

exports.routes = router;
exports.products = products;