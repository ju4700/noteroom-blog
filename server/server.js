const express = require("express");
const blogRouter = require("./blogRouter");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use(express.static(path.join(__dirname, "../public")));
app.use("/blog", blogRouter());

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about-us", (req, res) => {
    res.render("about-us");
});

app.get("/join-us", (req, res) => {
    res.render("join-us");
});

app.get("/support", (req, res) => {
    res.render("support");
});

app.get("/admin/blog", (req, res) => {
    res.render("blog-editor")
});

app.listen(3000, () => {
    console.log("Static server is running on port 3000");
});
