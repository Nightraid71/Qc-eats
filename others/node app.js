const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
  let filePath = './index.html';
  if (req.url === '/bakery') {
    filePath = './bakery.html';
  } else if (req.url === '/restaurant') {
    filePath = './restaurant.html';
  } else if (req.url === '/premium') {
    filePath = './premium.html';
  } else if (req.url === '/sign in') {
    filePath = './sign in.html';
  }
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Internal Server Error');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(content, 'utf-8');
    }
  });
});
server.listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');