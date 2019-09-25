var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

var port = 80;
server.listen(port);
console.log("=============================");
console.log("new changes");
console.log("------latest changes");
console.log("----------------------------******************");
console.log("i---------------------testing auto build........");
console.log("*******************");
console.log("Server running at http://localhost:%d", port);

