'use strict';

const { listnote } = require('../../logic/index');

module.exports = (req,res) => {

    listnote()
    .then(notes => res.json({status:'OK',notes:notes}));

}