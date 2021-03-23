let http = require("http");
function handleServer(req, res) {
  let url = req.url;
  if (url === "/welcome") {
    res.setHeader("Content-Type", "text/plain");
    res.writeHead(200);
    res.end("Welcome to Dominos!");
  } else if (url === "/contact") {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(
      JSON.stringify({
        phone: "18602100000",
        email: "guestcaredominos@jublfood.com",
      })
    );
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
}
const httpServer = http.createServer(handleServer);
httpServer.listen(8081);
module.exports = httpServer;
