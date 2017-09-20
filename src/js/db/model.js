'use strict';

let Promise = require('bluebird'),
    schema = require('./schema');

let ContentModel = {
    getAll: () => {
        return new Promise(schema.find());
    }
};

module.exports = ContentModel;