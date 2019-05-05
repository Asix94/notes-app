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
            surname : String,
            alias: String,
            password: String
        });

        const NoteSchema = new Schema({
            title: String,
            description: String
        });
        
        const User = mongoose.model('user', UserSchema);
        const Note = mongoose.model('note', NoteSchema);

        app.get('/api/adminUser/list', (req,res) => {

            User.find()
            .then(users => res.json({status:'OK',list:users}));

        });

        app.get('/api/adminUser/retrieve/:id', (req,res) => {

            const id = req.params.id;

            User.findById(id)
            .then(user => res.json({status:'OK',user:user}));

        });

        app.post('/api/adminUser/create', jsonBodyParser, (req,res) => {
            
            const name = req.body.name;
            const surname = req.body.surname;

            User.create({name,surname})
            .then(user => res.json({status:'OK',user:user}));

        });

        app.put('/api/adminUser/update/:id', jsonBodyParser, (req,res) => {
            
            const id = req.params.id;
            const name = req.body.name;
            const surname = req.body.surname;

            User.findByIdAndUpdate({_id:id},{$set:{name,surname}})
            .then(user => res.json({status:'OK',user:user}));

        });

        app.delete('/api/adminUser/delete/:id', (req,res) => {
            
            const id = req.params.id;

            User.findByIdAndRemove({_id:id})
            .then(user => res.json({status:'OK',user:user}));

        });

        app.get('/api/adminNote/list', (req,res) => {
            
            Note.find()
            .then(notes => res.json({status:'OK', notes:notes}));

        });

        app.get('/api/adminNote/retrieve/:id', (req,res) => {

            const id = req.params.id;

            Note.findById(id)
            .then(note => res.json({status:'OK', note:note}));

        });

        app.post('/api/adminNote/create', jsonBodyParser, (req,res) => {

            const title = req.body.title;
            const description = req.body.description;

            Note.create({title,description})
            .then(note => res.json({status:'OK', note:note}));

        });

        app.put('/api/adminNote/update/:id', jsonBodyParser, (req,res) => {

            const id = req.params.id;
            const title = req.body.title;
            const description = req.body.description;

            Note.findByIdAndUpdate({_id:id},{$set:{title,description}})
            .then(note => res.json({status:'OK', note:note}));
            
        });

        app.delete('/api/adminNote/delete/:id', (req,res) => {

            const id = req.params.id;

            Note.findByIdAndRemove({_id:id})
            .then(note => res.json({status:'OK', note:note}));

        });

        app.listen(3000, () => console.log('server open in port 3000'));

    })
    .catch(err => {
        console.error('App started error');
        process.exit();

    })