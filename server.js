const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('View Engine', 'hbs');
app.use(express.static(__dirname + '/public'));

//Express middlewire
app.use((req, res, next) => {
    var date = new Date().toString();
    var log = `${date}: ${req.method}: ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if(err) {
            console.log('Unable to save')
        }
    })
    next();
})

app.use((req, res, next) => {
    res.render('main.hbs');
});

hbs.registerHelper('myYear', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})


app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'This is About us Page',
        myYear: new Date().getFullYear()
    })
})

app.get('/product', (req, res) => {
    res.render('product.hbs', {
        pageTitle: 'THis is product page',
        myYear: new Date().getFullYear(),
    })
})


app.get('/', (req, res) => {
    res.render('home.hbs',{
        pageTitle: 'This is home page',
        myYear: new Date().getFullYear(),
    })
});



app.get('/bad', (req, res) => {
    res.send({
        errorMsg: 'Its a bad request',
    })
})

app.listen(port, () => {
    console.log('Server 3000 is up You are Ready to go');
});


