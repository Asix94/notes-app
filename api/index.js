'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/notes-app',{ useNewUrlParser: true })
    .then(() => {

        const app = express();

        app.get('/api/index', (req,res) => {
            res.json({status:'OK', message:'method get'});
        });

        app.post('/api/index', (req,res) => {
            res.json({status:'OK', message:'method post'});
        });

        app.put('/api/index', (req,res) => {
            res.json({status:'OK', message:'method put'});
        });

        app.delete('/api/index', (req,res) => {
            res.json({status:'OK', message:'method delete'});
        });

        app.listen(3000, () => console.log('server open in port 3000'));

    })
    .catch(err => {
        console.error('App started error');
        process.exit();
        
    })