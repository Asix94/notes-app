'use strict';

const { retrievenote } = require('../../logic/index');

module.exports = (req,res) => {

    const id = req.params.id;

    retrievenote(id)
    .then(note => res.json({status:'OK', note:note}));

}