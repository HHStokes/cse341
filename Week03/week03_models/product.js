const fileSystem = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 
    "week03_data", 
    "products.json"
);


const getProductsFromFile = callBack => {
    fileSystem.readFile(p, (err,fileContent) =>{
        if (err) {
            callBack([]);
        }
        else{
            callBack(JSON.parse(fileContent));
        }
    });  
};

module.exports = class Product {

    constructor(ttl,url, pr, des){
        this.title = ttl;
        this.imageUrl = url
        this.price = pr;
        this.description = des;
    }

    save() {
        this.productId = Math.random().toString();
        getProductsFromFile(products => {
            products.push(this);
            fileSystem.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            });
        });
    }
    static findById(id, callBack) {
        getProductsFromFile(products => {
            const product = products.find(p => { 
                return p.id === id;
            });
            
            callBack(product);
        });
    }

    static fetchAll(cb){
        getProductsFromFile(cb);
    }

};