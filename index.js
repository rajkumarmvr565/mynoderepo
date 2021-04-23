var http = require("http");
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write('Hello my world...');
    response.end('Thanks for scripting....')
}).listen(3000);
console.log('Server is running...');