'use strict';

const { createnote } = require('../../logic/index');

module.exports = (req,res) => {

    const id_user = req.body.id_user;
    const title = req.body.title;
    const description = req.body.description;

    createnote(id_user,title,description)
    .then(note => res.json({status:'OK', note:note}));

}