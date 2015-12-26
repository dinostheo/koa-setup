/**
 * @module middleware;
 */

'use strict';

let KoaRouter = require('koa-router');
let mount = require('koa-mount');
var mongoose = require('mongoose');
let router = new KoaRouter();
let routes = require('./routes');
let config = require('./config/config');

/**
 * Initializes the application middleware.
 *
 * @param  {Object} app - The koa application instance
 */
module.exports.init = function (app) {
    app.listen(config[process.env.ENV_VAR].port);

    app.db = mongoose.connect(config[process.env.ENV_VAR].dbUri);

    routes.init(router);

    // Error handling
    app.use(function *(next) {
        try {
            yield next;

            if (this.status >= 400) {
                this.throw(this.status);
            }
        } catch (err) {
            this.status = err.status || 500;
            this.type = 'json';
            this.body = {
                code: err.status || 500,
                message: err.message || 'There was an error'
            };

            this.app.emit('error', err, this);
        }
    });

    // Generic error listener
    app.on('error', function (err) {
        console.log('>>> ERROR: ', err);
    });

    app.use(mount('/v1', router.middleware()));
};
