/**
 * @module routes
 */

'use strict';

let status = require('./controllers/status');

/**
 * Initialize the application routes.
 *
 * @param {Object} router - The koa-router instance
 */
module.exports.init = function (router) {
    router.get('/status', status);
};
