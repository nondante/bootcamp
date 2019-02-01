const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.setHeader("Content-Type","text/plain");
      res.end("Hello World");
      break;
    case "/about":
      res.statusCode = 200;
      res.setHeader("Content-Type","text/plain");
      res.end("My first app");
      break;
    case "/contact":
        res.statusCode = 200;
        res.setHeader("Content-Type","text/plain");
        res.end("Please contact me");
        break;
    default:
      res.statusCode = 404;
      res.end("Error: Page not found");

  }


});

server.listen(port, hostname,()=>{
  console.log("Listening at port 3000");
});
