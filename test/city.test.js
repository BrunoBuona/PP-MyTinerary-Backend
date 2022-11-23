const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");
const { expect } = require("chai");


describe('cities', function () {
    it('should return an array of objects', function (done) {
        request(app)
            .get('/api/cities/')
            .expect(res => {
                assert.typeOf(res.body.response, 'array')
                res.body.response.forEach(e => {
                    assert.typeOf(e, 'object')
                })
            })
            .end(function (err, res) {
                if (err) {
                    return done(err)
                }
                done()
            })
    })

    it('a string was sent in the name field', function (done) {
        request(app)
            .post(`/api/cities/`)
        let user = {
            name: 'Toronto',
            continent: 'America',
            photo: 'https://cms.finnair.com/resource/blob/752416/b5c6b95656c13bf393e5b2c5c87a7cd0/toronto-main-data.jpg?impolicy=crop&width=2943&height=2943&x=529&y=0&imwidth=768',
            population: 2700000,
            userId: '636e884578fa70e8f8c471f7'
        }
        expect(user.name).to.be.a('string')
        done()
    })

    it("404 error when badly creating a city", function (done) {
        request(app)
            .post("/api/cities/")
            .expect(404)
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                done()
            })
    })
})

