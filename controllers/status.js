/**
 * @module controllers/status
 */

'use strict';

let mongoose = require('mongoose');

/**
 * Responds with the status of the application.
 *
 * @param {Function} next - The koa next middleware
 */
module.exports = function *(next) {
    this.type = 'json';
    this.status = 200;
    this.body = {
        status: 'ok',
        mongodb: yield mongoose.connection.db.stats()
    };
};
