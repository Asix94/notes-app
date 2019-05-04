'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const jsonBodyParser = bodyparser.json();
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/notesapp', {useNewUrlParser: true})
    .then(() => {

        const app = express();

        const UserSchema = new Schema({
            name : String,
            surname : String
        });
        
        const User = mongoose.model('user',UserSchema);

        app.get('/api/list', (req,res) => {

            User.find()
            .then(users => res.json({status:'OK',list:users}));

        });

        app.get('/api/retrieve/:id', (req,res) => {

            const id = req.params.id;

            User.findById(id)
            .then(user => res.json({status:'OK',user:user}));

        });

        app.post('/api/create', jsonBodyParser, (req,res) => {
            
            const name = req.body.name;
            const surname = req.body.surname;

            User.create({name,surname})
            .then(user => res.json({status:'OK',user:user}));

        });

        app.put('/api/update/:id', jsonBodyParser, (req,res) => {
            
            const id = req.params.id;
            const name = req.body.name;
            const surname = req.body.surname;

            User.findByIdAndUpdate({_id:id},{$set:{name,surname}})
            .then(user => res.json({status:'OK',user:user}));

        });

        app.delete('/api/delete/:id', (req,res) => {
            
            const id = req.params.id;

            User.findByIdAndRemove({_id:id})
            .then(user => res.json({status:'OK',user:user}));
            
        });

        app.listen(3000, () => console.log('server open in port 3000'));

    })
    .catch(err => {
        console.error('App started error');
        process.exit();

    })