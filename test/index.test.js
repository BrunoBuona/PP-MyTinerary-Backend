
const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");

describe("GET /api/hotels/?name=&order=", () => {
  it("Deberia traerme un error 404",
    function (done) {
        let intentionalError = 'Error 404';
        let intentionalNotError = 'Ba'
      request(app).get(`/api/hotels/?name=${intentionalError}&order=`).expect(404, done);

    })});


    
