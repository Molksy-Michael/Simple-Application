'use strict'

let mongoose = require('mongoose'),
    _ = require('lodash'),
    model = require('./model');

let ContentService = {
    getAll: async() => {
        try {
            return await model.getAll();
        } catch (err) {
            return err;
        }
    },

    getOne: async(query) => {
        if(_.isEmpty(query)) {
            return 'Empty parameters';
        }

        try{
            return
        }
    }
};

module.exports = ContentService;