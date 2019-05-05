'use strict';

const moongose = require('mongoose');

const { UserSchema, NoteSchema} = require('./schema/index');

module.exports = {
    User: moongose.model('user',UserSchema),
    Note: moongose.model('note',NoteSchema)
}