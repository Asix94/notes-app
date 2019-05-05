'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = new Schema({
    id_user: String,
    title: String,
    description: String
});