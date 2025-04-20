import express from "express";
import path from "path";
import url from "url";

const port = 3000;
const app = express();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
    res.sendFile("./views/home.html", {root: __dirname});
})
app.get("/about", (req, res) => {
    res.sendFile("./views/about.html", {root: __dirname});
})
app.get("/about-us", (req, res) => {
    res.redirect("/about");
})

// app.use((req, res) => {
//     res.status(404).sendFile("./views/404.html", {root: __dirname});
// })

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})