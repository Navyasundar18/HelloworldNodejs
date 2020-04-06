var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World THBS!");

});

var port =8080;
//server.listen(port);
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
console.log("=============================");
console.log("*******************");
console.log("******************* server is up & running");
// console.log("Server running at http://localhost:%d", port);
console.log("---------------------------");
