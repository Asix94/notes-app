'use strict';

const { listuser } = require('../../logic/index');

module.exports = (req,res) => {
    
    listuser()
    .then(users => res.json({status:'OK',list:users}));
}