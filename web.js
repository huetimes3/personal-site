const http = require('http');
const PORT = process.env.PORT || 5000;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("it's ya boy hue <3 \n awa awa");
}

const server = http.createServer(requestListener);
server.listen(PORT);