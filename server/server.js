import express, { static as staticFiles } from "express";
import blogRouter from "./blogRouter.js";
import path, { join } from "path";
import { fileURLToPath } from "url";
import { asset_path, images_path, viteScript } from "../public/js/ejsHelper.js";
import engine from "ejs-mate";

const app = express();

app.locals.viteScript = viteScript
app.locals.asset_path = asset_path
app.locals.images_path = images_path

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app.engine("ejs", engine)
app.set("view engine", "pug");
app.set("views", join(__dirname, "../views"));

app.use(staticFiles(join(__dirname, "../public")));
// app.use("/blog", blogRouter());

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
app.get("/layout", (req, res) => {
    res.render("blogs/article-layout-template")
})

app.listen(3000, () => {
    console.log("Static server is running on port 3000");
});
