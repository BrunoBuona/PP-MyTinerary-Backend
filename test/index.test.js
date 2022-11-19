const app = require('../app');
const chai = require('chai');
const assert = chai.assert;
const request = require('supertest');



describe('GET /api/cities', function (done) {

    it('should return an array of objects', function (done) {
        request(app)
            .get('/api/cities/')
            .expect(res => {
                assert.typeOf(res.body.response,'array')
                assert.isObject(res.body.response [0])
            })
            .end(function (err, res) {
                if (err) {
                    return done(err)
                }
                done()
            })
    })
})