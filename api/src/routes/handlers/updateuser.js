'use strict';

const { updateuser } = require('../../logic/index');

module.exports = (req,res) => {
    
    const id = req.params.id;
    const name = req.body.name;
    const surname = req.body.surname;
    const alias = req.body.alias;
    const password = req.body.password;

    updateuser(id,name,surname,alias,password)
    .then(user => res.json({status:'OK',user:user}));

}