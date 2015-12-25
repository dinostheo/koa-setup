/**
 * @module index
 *
 * The application entrypoint
 */

'use strict';

let koa = require('koa');
let middleware = require('./middleware');

let app = module.exports = koa();

middleware.init(app);
