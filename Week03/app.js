const express = require('express');
const bodyParser =require('body-parser'); //using a third party if express removes it
const path = require('path');
const errorController = require('./week03_controllers/error')



const app = express();
const adminRoutes = require("./week03_routes/admin.js");
const shopRoutes = require("./week03_routes/shop.js");

app.set('view engine', 'ejs'); //if we want pug, we put pug
app.set('views', 'week03_views');
app.use(express.static(__dirname));//enables css files to be read

app.use(bodyParser.urlencoded({extended: false}));

app.use("/admin",adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);