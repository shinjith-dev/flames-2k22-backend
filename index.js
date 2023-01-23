const http = require("http");
const app = require("./app");
const { PORT } = require("./config");
const { authorize } = require("./startSheet");

// authorize()

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
