import express, { static as staticFiles } from "express";
import blogRouter from "./blogRouter.js";
import path, { join } from "path";
import { fileURLToPath } from "url";
import { asset_path, image_path } from "../public/js/ejsHelper.js";
import nunjucks from "nunjucks";

const app = express();

app.locals.asset_path = asset_path
app.locals.image_path = image_path

nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true, 
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "njk");
app.set("views", join(__dirname, "../views"));

app.use(staticFiles(join(__dirname, "../public")));
app.use("/blog", blogRouter());

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
