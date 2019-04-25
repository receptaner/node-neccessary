const http = require("http");

const server = http.createServer((request, response) => {
    console.log("Bir İstekte Bulunuldu");

    response.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
    response.write("Merhaba Dünya");
    response.end();
});

server.listen(3000);