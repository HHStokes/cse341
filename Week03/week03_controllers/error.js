exports.get404 = (request,response,get) => {
    response.status(404).render('404.ejs', {docTitle: '404'});
};