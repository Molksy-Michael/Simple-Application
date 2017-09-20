'use strict';

let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    contentSchema = new Schema({
        create_at: Date,
        author: String,
        tags: [],
        text: String
    });

module.exports = mongoose.model('Content', contentSchema);