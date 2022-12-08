const express = require("express");
const cors = require("cors");
const { authorize, getData } = require("./startSheet");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  console.log(request.headers.authorization);
  console.log(`Bearer ${process.env.TOKEN}`);

  if (request?.headers?.authorization === `Bearer ${process.env.TOKEN}`) {
    authorize()
      .then((res) => {
        getData(res)
          .then((data) => {
            response.send(data);
          })
          .catch(() => response.status(404).end());
      })
      .catch(() => response.status(404).end());
  } else response.status(401).end();
});

module.exports = app;
