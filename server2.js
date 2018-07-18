const express = require('express');
const hbs = require('hbs');
const fs = require('fs');


var app = express();
app.set('View Engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');


// middle express under const

app.use((req, res, next) => {
    res.render('main.hbs')
})

// Middle Express

app.use((req, res, next) => {
    var date = new Date().toString();
    var log = `${date}: ${req.url}: ${req.method}`
    console.log(log)
    fs.appendFile('server.log', log + '\n', (err) => {
        console.log('Unable to Save')
    })
    next();
})

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})

hbs.registerHelper('myYear', () => {
    return new Date().getFullYear();
})

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'This is home page'
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'This is About Us Page',
    });
})

app.get('/product', (req, res) => {
    res.render('product.hbs', {
        pageTitle: 'This is product Scetion'
    })
})

app.listen(3000, () => {
    console.log('Sever is started')
});