'use strict';

const { deleteuser } = require('../../logic/index');

module.exports = (req,res) => {
    
    const id = req.params.id;

    deleteuser(id)
    .then(user => res.json({status:'OK',user:user}));

}