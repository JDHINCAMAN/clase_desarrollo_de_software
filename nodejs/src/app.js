//Creando un servidor HTTP básico
var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hola desde MinTicUdeA, desarrollo de software: ");
    response.write(process.version);
    response.end();
}).listen(8888);