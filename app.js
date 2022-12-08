const express = require("express");
const cors = require("cors");
const { authorize, getScore, getResultWomen, getResultMen } = require("./startSheet");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/score", (request, response) => {
  if (request?.headers?.authorization === `Bearer ${process.env.TOKEN}`) {
    response.header("Access-Control-Allow-Origin", "*");
    authorize()
      .then((res) => {
        getScore(res)
          .then((data) => {
            response.send(data);
          })
          .catch(() => response.status(404).end());
      })
      .catch(() => response.status(404).end());
  } else response.status(401).end();
});

app.get("/resultmen", (request, response) => {
  if (request?.headers?.authorization === `Bearer ${process.env.TOKEN}`) {
    response.header("Access-Control-Allow-Origin", "*");
    authorize()
      .then((res) => {
        getResultMen(res)
          .then((data) => {
            response.send(data);
          })
          .catch(() => response.status(404).end());
      })
      .catch(() => response.status(404).end());
  } else response.status(401).end();
});

app.get("/resultwomen", (request, response) => {
  if (request?.headers?.authorization === `Bearer ${process.env.TOKEN}`) {
    response.header("Access-Control-Allow-Origin", "*");
    authorize()
      .then((res) => {
        getResultWomen(res)
          .then((data) => {
            response.send(data);
          })
          .catch(() => response.status(404).end());
      })
      .catch(() => response.status(404).end());
  } else response.status(401).end();
});

module.exports = app;
