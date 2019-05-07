'use strict';

const mongoose = require('mongoose');
const { Schema, Schema : { ObjectId } } = mongoose;

module.exports = new Schema({
    id_user: {
        type: ObjectId,
        ref: 'user',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});