'use strict';

const listuser = require('./listuser');
const retrieveuser = require('./retrieveuser');
const createuser = require('./createuser');
const updateuser = require('./updateuser');
const deleteuser = require('./deleteuser');
const listnote = require('./listnote');
const retrievenote = require('./retrievenote');
const createnote = require('./createnote');
const updatenote = require('./updatenote');
const deletenote = require('./deletenote');

module.exports = {
    listuser,
    retrieveuser,
    createuser,
    updateuser,
    deleteuser,
    listnote,
    retrievenote,
    createnote,
    updatenote,
    deletenote
}