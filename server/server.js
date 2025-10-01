import express, { static as staticFiles } from "express";
import path, { join } from "path";
import { fileURLToPath } from "url";
import { asset_path, image_path } from "../public/js/ejsHelper.js";
import nunjucks from "nunjucks";
import { readFile, writeFile } from "fs/promises"
import slugify from "slugify"
import blogRouter from "./routes/blog.js"
import adminRouter from "./routes/admin.js"

const app = express();
app.use(express.json())

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const blogFileName = (filename) => join(__dirname, `../blogs/${filename}.blog.json`)

app.locals.asset_path = asset_path
app.locals.image_path = image_path
app.locals.slugify = text => slugify(text, { lower: true, strict: false })

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
app.use("/admin", adminRouter(__dirname, blogFileName))

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
