'use strict';

const { retrieveuser } = require('../../logic/index');

module.exports = (req,res) => {

    const id = req.params.id;

    retrieveuser(id)
    .then(user => res.json({status:'OK',user:user}));

}