// configurar o express
const express = require ('express');
const app = express();
app.set('view engine', 'ejs');

app.listen(3001);

// acessar a rota
app.get('/', (req, res) => {
    //res.sendFile('./views/index.html', {root:__dirname}); - sem ejs
    res.render('index'); //com ejs
});

// novas rotas
app.get('/sobre', (req, res) => {
    //res.sendFile('./views/sobre.html', {root:__dirname}); - sem ejs
    res.render('sobre');
});

app.use((req, res) => {
    //res.status(400).sendFile('./views/404.html', {root:__dirname}); - sem ejs
    res.status(404).render('404');
});

//redirecionamento de rotas

app.use('/sobrenos', (req, res) => {
    res.redirect('/sobre');
});