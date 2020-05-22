const server = require("./server");
const supertest = require("supertest");

describe("test the server", () => {
  it("GET / ", async () => {
    const responseStatusCode = 201;
    const res = await supertest(server).get("/");
    expect(res.status).toBe(responseStatusCode);
    expect(res.body.api).toBe("up");
  });
});
