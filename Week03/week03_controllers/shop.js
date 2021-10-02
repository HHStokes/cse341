const Product = require('../week03_models/product.js');

exports.getProducts = (request, response, next) => {
    Product.fetchAll((product) =>{
        response.render('shop/shop.ejs',{ proList: product, 
            docTitle: 'Shop', 
            path: '/',
        });
    });
};

exports.getIndex = (request, response, next) => {
    Product.fetchAll((product) =>{
        response.render('shop/product-list.ejs',{ proList: product, 
            docTitle: 'All Products', 
            path: '/products',
        });
    });
};

exports.getCart = (request, response, next) => {
    Product.fetchAll((product) =>{
        response.render('shop/cart.ejs',{ proList: product, 
            docTitle: 'Cart', 
            path: '/cart',
        });
    });
};

exports.getCheckout = (request, response, next) => {
    Product.fetchAll((product) =>{
        response.render('shop/checkout.ejs',{ proList: product, 
            docTitle: 'Checkout', 
            path: '/checkout',
        });
    });
};

exports.getProduct = (request, response, next) => {

    const proId = request.params.productId;
    Product.findById(proId, product => {
        response.render('shop/product-detail.ejs',{ proList: product, 
            docTitle: 'Product Details', 
            path: '/product-detail',
        });
    });
};

exports.getOrders = (request, response, next) => {
    Product.fetchAll((product) =>{
        response.render('shop/orders.ejs',{ proList: product, 
            docTitle: 'Orders', 
            path: '/orders',
        });
    });
};
