const db = require('../../config/database');

module.exports = (app) => {
    //rotas de get
    app.get('/', function(req, resp){
        resp.send(
            `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> FaturaExpress </h1>
                </body> 
            </html>
            `
        );
    });

    //lista
    app.get('/lista', function(req, resp){
        db.all('SELECT * FROM livros',function(erro, resultados){
            resp.marko(
                require('../views/livros/lista/lista.marko'),
                {
                    livros: resultados
                }
            );
        });
        
    }); 
}