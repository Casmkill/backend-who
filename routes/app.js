var express = require('express');

var app = express();

var WGirls = require('../models/wgirl');
var WBodys = require('../models/wboy');


// Rutas
app.post('/consulta', (req, res, next) => {

    var body = req.body;

    var YM = body.YM;
    var genero = body.genero

    console.log(genero);

    if (genero === 'Masculino') {


        console.log(genero);
        // Si es hombre
        WBodys.find({ YM: YM }).exec((err, wboy) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar ',
                    errors: err
                });
            }




            return res.status(200).json({
                ok: true,
                pesos: wboy[0]
            });

        });


    } else {

        // Si es mujer
        WGirls.find({ YM: YM }).exec((err, wgirl) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar ',
                    errors: err
                });
            }

            return res.status(200).json({
                ok: true,
                pesos: wgirl[0]
            });

        });

    }




});

module.exports = app;