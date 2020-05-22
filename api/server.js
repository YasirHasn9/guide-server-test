const express = require("express");

const Hobbits = require("../hobbits/hobbitsModel.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/hobbits", async (req, res, next) => {
  // Hobbits.getAll()
  //   .then(hobbits => {
  //     res.status(200).json(hobbits);
  //   })
  //   .catch(error => {
  //     res.status(500).json(error);
  //   });
  try {
    const hs = await Hobbits.getAll();
    res.json(hs);
  } catch (error) {
    console.log(Error);
    next(error);
  }
});

module.exports = server;
