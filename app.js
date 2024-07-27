const fs = require("fs");

const express = require("express");
const app = express();
app.use(express.static("./source"));
const port_number = process.env.PORT || 3001;


app.get("*", (req, res) => {
    
    fs.readFile(
        "./source/index.html",
        { encoding: "utf-8" },
        (err, data) => {

            if (!data) {
                
                res.send("Error occurred in /pool/se.html");
            }
            else {

                res.send(data);
            }
        });
});
  
const http = require('http');
const server = http.createServer(app);
//const { Server } = require("socket.io");
//const io = new Server(server);

server.listen(port_number, () => console.log(`Unity Portfolio Server Started! port number --> ${port_number}!`));
