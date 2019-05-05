'use strict';

const express = require('express');
const bodyparser = require('body-parser');
const jsonBodyParser = bodyparser.json();
const { listuser, retrieveuser, createuser, updateuser, deleteuser, 
listnote, retrievenote, createnote, updatenote, deletenote} = require('./handlers/index');

const router = express.Router();

router.get('/adminUser/list', listuser);
router.get('/adminUser/retrieve/:id', retrieveuser);
router.post('/adminUser/create', jsonBodyParser, createuser);
router.put('/adminUser/update/:id', jsonBodyParser, updateuser);
router.delete('/adminUser/delete/:id', deleteuser);
router.get('/adminNote/list', listnote);
router.get('/adminNote/retrieve/:id', retrievenote);
router.post('/adminNote/create', jsonBodyParser, createnote);
router.put('/adminNote/update/:id', jsonBodyParser, updatenote);
router.delete('/adminNote/delete/:id', deletenote);

module.exports = router;