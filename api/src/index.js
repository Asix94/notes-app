'use strict';

const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');

mongoose.connect('mongodb://localhost:27017/notesapp', {useNewUrlParser: true})
    .then(() => {

        const app = express();
        app.use('/api', router);
        app.listen(3000, () => console.log('server open in port 3000'));

    })
    .catch(err => {
        console.error('App started error');
        process.exit();

    })