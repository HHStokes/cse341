const Product = require('../week03_models/product.js');

exports.getAddProduct = (request, response, next) => {
    //this is where middleware lives
    response.render('admin/add-product.ejs', { docTitle: 'Add Product', path: '/admin/add-product'});
};

exports.postAddProduct = (request, response, next) => {
    //this is where middleware lives
    const product = new Product(request.body.title, request.body.imageUrl, request.body.price, request.body.description);
    product.save();
    response.redirect("/");
};

exports.getProducts = (request, response, next) => {
    Product.fetchAll((product) =>{
        response.render('admin/products.ejs',{ proList: product, 
            docTitle: 'Admin: Products', 
            path: '/admin/products',
        });
    });
};