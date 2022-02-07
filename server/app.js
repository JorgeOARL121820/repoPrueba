const http = require('http');
var bodyParser = require('body-parser')
var express = require('express');
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.get('/getDestinos', function (req, res) {
    const fs = require('fs');

    const rawData = fs.readFileSync( './data/destinos.json' );

    const destinos = JSON.parse( rawData );

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.send( JSON.stringify( destinos ) );
});

app.post('/getVuelos', function (req, res) {

    const fs = require('fs');

    const rawData = fs.readFileSync( './data/vuelos.json' );

    const destinos = JSON.parse( rawData );

    let params = req.body;

    console.log(params);

    let vuelos = destinos.filter( vuelo => {

        return vuelo.destino == params?.destino && vuelo.origen == params?.origen;
    })

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.send( JSON.stringify( vuelos ) );

});

const hostname = '0.0.0.0';
const port = process.env.PORT || 8000;

app.listen( port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});