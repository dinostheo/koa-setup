'use strict';

let expect = require('chai').expect;
let app = require('../../index.js');
let config = require('../../config/config');
let mongoose = require('mongoose');

let request = require('supertest').agent(app.listen());

describe('status endpoint', () => {
    it ('should respond with status ok and mongodb stats', (done) => {
        request.get('/v1/status')
            .set('content-type', 'application/json')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(200);
                expect(res.type).to.equal('application/json');
                expect(res.body).to.have.property('status');
                expect(res.body.status).to.equal('ok');
                expect(res.body).to.have.property('mongodb');
                expect(res.body.mongodb.db).to.equal('geodata-test');
                expect(res.body.mongodb.ok).to.equal(1);

                done(err);
            });
    });

    after (() => {
        mongoose.connection.db.dropDatabase();
        mongoose.connection.db.close();
    });
});
