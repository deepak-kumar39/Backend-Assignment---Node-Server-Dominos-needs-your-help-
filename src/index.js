// var http = require("http");

// const httpServer = http.createServer(handleServer);

// httpServer.listen(8081)
// function handleServer(req, res) {
  
// }

// module.exports = httpServer;
const express = require("express");
const app = express();
app.get("/welcome",function(request,response){
    response.status(200).send("Welcome to Dominos!");
})

app.get("/",function(req,res){
    res.sendStatus(404);
})
app.get("/contact",function(request,response){
   response.status(200).json({phone: '18602100000',
   email: 'guestcaredominos@jublfood.com'})
});
app.listen(8081,function(){
console.log("server started on port 8081");
});

