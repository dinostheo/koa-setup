'use strict';

let expect = require('chai').expect;
let app = require('../../index.js');
let config = require('../../config/config');
let mongoose = require('mongoose');

let request = require('supertest').agent(app.listen());

describe('not found endpoint', () => {
    it ('should respond with status ok and mongodb stats', (done) => {
        request.get('/blabla/notfound')
            .set('content-type', 'application/json')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(404);
                expect(res.body.code).to.equal(404);
                expect(res.body.message).to.equal('Not Found');

                done(err);
            });
    });

    after (() => {
        mongoose.connection.db.dropDatabase();
        mongoose.connection.db.close();
    });
});
