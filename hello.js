var http = require('http');
http.createServer(function(request, resp) {
    resp.writeHead(200, {'Content-Type': 'text/plain'});
    resp.end('\'Ello world\n');
}).listen(8000);

console.log("server running at https://127.0.0.1.8000/");
