import http from "http";
import fs from "fs";

const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    let path = "./views/";
    
    switch(req.url){
        case "/":
            path += "home.html";
            res.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        case "/about-us":
            res.statusCode = 301;
            res.setHeader("Location", "/about");
            res.end();
            break;
        default:
            path += "404.html";
            res.statusCode = 404;
    }
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
        } else {
            res.end(data);
        }
    })
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})