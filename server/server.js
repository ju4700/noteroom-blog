const express = require("express")
const staticFiles = express.static
const path = require("path")
const join = path.join
const nunjucks = require("nunjucks");
const adminRouter = require("./routes/admin.js")
const blogRouter = require("./routes/blog.js");
const slugify = require("slugify")

const app = express();
app.use(express.json())

const blogFileName = (filename) => join(__dirname, `../blogs/${filename}.blog.json`)

app.locals.asset_path = function asset_path(file) {
    return `/assets/${file}`
}
app.locals.image_path = function image_path(file) {
    return `/images/${file}`
}
app.locals.slugify = text => slugify(text, { lower: true, strict: false })
app.locals.date = dateString => {
    const date = new Date(dateString)
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}

nunjucks.configure("views", {
    autoescape: true,
    express: app,
    watch: true, 
}).addFilter("rangeSlice", function(arr, start, end) {
    if (!arr) return
    if (end) return arr.slice(start, end)
    else return arr.slice(start)
})


app.set("view engine", "njk");
app.set("views", join(__dirname, "../views"));

app.use(staticFiles(join(__dirname, "../public")));
app.use("/blogs", blogRouter(blogFileName))
app.use("/admin", adminRouter(blogFileName))

app.get("/", (req, res) => {
    res.render("home", { noFooter: true });
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

app.listen(3000, '0.0.0.0' ,() => {
    console.log("Static server is running on port 3000");
});
