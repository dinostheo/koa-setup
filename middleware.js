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

    app.use(mount('/v1', router.middleware()));
};
