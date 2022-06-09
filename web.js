const fs = require('fs');
const http = require('http');
const PORT = process.env.PORT || 5000;
const publicDir = require('path').join(__dirname,'/public');


const requestListener = function (req, res) {
  fs.readFile('index.html', function(err,data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}

const server = http.createServer(requestListener);

server.listen(PORT);
server.use(express.static(publicDir));