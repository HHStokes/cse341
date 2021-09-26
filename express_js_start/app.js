const express = require('express');
const bodyParser =require('body-parser'); //using a third party if express removes it
const path = require('path');



const app = express();
const adminData = require("./expressjs_start_routes/admin.js");
const shopRoutes = require("./expressjs_start_routes/shop.js");

app.set('view engine', 'pug');
app.set('views', 'expressjs_start_views');
app.use(express.static(__dirname));//enables css files to be read

app.use(bodyParser.urlencoded({extended: false}));

app.use("/admin",adminData.routes);
app.use(shopRoutes);

app.use((request,response,get)=>{
    response.status(404).render('404.pug', {docTitle: '404'});
})

app.listen(3000);