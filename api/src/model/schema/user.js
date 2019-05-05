'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = new Schema({
    name: String,
    surname: String,
    alias: String,
    password: String
});