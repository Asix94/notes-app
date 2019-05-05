'use strict';

const { deletenote } = require('../../logic/index');

module.exports = (req,res) => {

    const id = req.params.id;

    deletenote(id)
    .then(note => res.json({status:'OK', note:note}));

}