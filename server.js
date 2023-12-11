const app = require('./src/config/custom-express')

//Criar o servidor express
app.listen(3000, function(){
    console.log('Servidor Rodando na porta 3000');
});



/* 
const http = require('http');
const servidor = http.createServer(function(req, resp){
    let html = '';
    if (req.url == '/') {
        html = `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> FaturaExpress </h1>
            </body> 
        </html>
    `;
    }else if(req.url == '/fatura'){
        html = `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> FaturaExpress - Fatura </h1>
            </body> 
        </html>
    `;
    }
    resp.end(html);
});
servidor.listen(3000); 
*/