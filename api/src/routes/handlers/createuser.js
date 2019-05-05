'use strict';

const { createuser } = require('../../logic/index');

module.exports = (req,res) => {
    
    const name = req.body.name;
    const surname = req.body.surname;
    const alias = req.body.alias;
    const password = req.body.password;

    createuser(name,surname,alias,password)
    .then(user => res.json({status:'OK',user:user}));

}