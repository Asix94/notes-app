'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    alias: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});