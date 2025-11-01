const express = require("express");
const staticFiles = express.static;
const path = require("path");
const join = path.join;
const nunjucks = require("nunjucks");
const adminRouter = require("./routes/admin.js");
const blogRouter = require("./routes/blog.js");
const waitlistRouter = require("./routes/waitlist.js");
const slugify = require("slugify");
const fileUpload = require("express-fileupload");
const { sequelize } = require("./db.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    fileUpload({
        createParentPath: true,
        limits: {
            fileSize: 50 * 1024 * 1024
        },
        abortOnLimit: true
    })
);

const blogFileName = (filename) => join(__dirname, `../blogs/${filename}.blog.json`);

app.locals.asset_path = function asset_path(file) {
    return `/assets/${file}`;
};
app.locals.image_path = function image_path(file) {
    return `/images/${file}`;
};
app.locals.slugify = (text) => slugify(text, { lower: true, strict: false });
app.locals.date = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
};

nunjucks
    .configure("views", {
        autoescape: true,
        express: app,
        watch: true
    })
    .addFilter("rangeSlice", function (arr, start, end) {
        if (!arr) return;
        if (end) return arr.slice(start, end);
        else return arr.slice(start);
    });

app.set("view engine", "njk");
app.set("views", join(__dirname, "../views"));

app.use(staticFiles(join(__dirname, "../public")));
app.use("/blogs", blogRouter(blogFileName));
app.use("/admin", adminRouter(blogFileName));
app.use("/waitlist", waitlistRouter());

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

app.use((err, req, res, next) => {
    const errorTitle = err.title;
    const errorMessage = err.message;
    res.status(err.status).render(`errors/${err.status}`, { title: errorTitle, message: errorMessage });
});

app.use((req, res, next) => {
    res.status(404).render(`errors/404`, { title: "Not Found", message: "Seems like the page doesn't exist" })
})

app.listen(3000, "0.0.0.0", async () => {
    console.log("Static server is running on port 3000");
    try {
        await sequelize.authenticate();
        await sequelize.sync();
    } catch (error) {
        console.error(error);
    }
});
