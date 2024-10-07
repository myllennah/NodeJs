const http = require('http');
const fs = require('fs'); //biblioteca

const server = http.createServer((req, res) => {
    console.log('Solicitação realizada')
    console.log(req.url, req.method);
    
    res.setHeader('Content-Type', 'text/html');
    
    let caminho = './views/';
    switch(req.url){
        case '/':
            caminho += 'index.html';
            res.statusCode = 200;
            break;
        case '/sobre':
            caminho += 'sobre.html';
            break;
            res.statusCode = 200;
        case '/nossahistoria':
            res.statusCode = 301;
            res.setHeader('Location', '/sobre')
            break;
        default:
            caminho += '404.html';
            res.statusCode = 404;
            break;
    }

fs.readFile(caminho, (err, data) =>{
    if(err){
            console.log(err);
            res.end();
    } else{
            res.end(data);
    }
    });

// definir o tipo de conteudo do cabeçalho
/*res.setHeader('Tipo-conteudo', 'texto-simples');

//escrever resposta
res,write('<head><link real="StyleSheet" href="#"></head>');
res.write('Ola, pessoal!');
res.end();*/
});

server.listen(3000, 'localhost', () =>{
    console.log('Ouvindo requisição na porta 3000')
});