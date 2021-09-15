var http = require('http');
var url = require('url');
const fs = require('fs');

http.createServer(onRequest).listen(80);
console.log("Server has started");

function onRequest(request, response) {
    var pathName = url.parse(request.url).pathname;
    console.log('Accessed: ' + pathName);
    showPage(response, pathName);
}

function showPage(response, pathName) {
    if (pathName === '/') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(contentMap['/'])
        response.end();
    }
    if (pathName === '/discord') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(contentMap['/discord'])
        response.end();
    }
    if (pathName === '/about') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(contentMap['/about'])
        response.end();
    }

}

var contentMap = {
    '/': fs.readFileSync('pages/home.html').toString(),
    '/discord': fs.readFileSync('pages/discord.html').toString(),
    '/about': fs.readFileSync('pages/about.html').toString(),
    '/login': fs.readFileSync('pages/login.html').toString()
}
