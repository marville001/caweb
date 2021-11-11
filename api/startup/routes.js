const express = require("express");
const cors = require("cors");
const users = require("../routes/users");

module.exports = function (app) {
  app.use(cors());
  app.use(express.json());
  app.use("/static", express.static("public"));
  app.use("/api/users", users);

  app.get("/", (req, res) => {
    res.send("Welcome to caweb api.....");
  });

  app.get("*", (req, res) => {
    res.status(404).send({ message: "url not found" });
  });
};
