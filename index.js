const http = require("http");

const PORT = 3003;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text-plain");
    res.end("Success");
  } else if (req.url == "/About") {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text-plain");
    res.end("Done");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end("<h2>Page Not Found</h2>");
  }
});

server.listen(PORT, () => {
  console.log(`Server Loading on http://localhost:${PORT}`);
});
