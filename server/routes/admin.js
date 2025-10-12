const { Router } = require("express");
const { readFile, writeFile } = require("fs/promises");
const { join, basename } = require("path");
const slugify = require("slugify");

const router = Router();

function adminRouter(blogFileName) {
    router.get("/blog", async (req, res) => {
        try {
            const email = req.query?.email;
            const authorFile = await readFile(join(__dirname, `../../blogs/authors.json`), "utf8");
            const authors = JSON.parse(authorFile || "[]");
            const author = authors.find((author) => author.email === email);
            if (author) {
                res.render("blog-editor", { author });
            } else {
                res.send("Not allowed");
            }
        } catch (error) {
            console.error(error)
            res.send("Not allowed");
        }
    });

    router.post("/blog", async (req, res) => {
        /* 
            1. Make a blog-route using the header
            2. Check for existing blog in all.blog.json using that route
            3. If no existing blog, save blog as header.blog and write metadata in all.blog
        */
        try {
            const blog = req.body;
    
            const header = blog.find((obj) => obj.type === "header")?.data;
            // const blogroute = slugify(header, { lower: true, strict: true });

            const breadCrumbs = blog.find(obj => obj.data.command === "brd")?.data.brdCrumbs
            const route = breadCrumbs[breadCrumbs.length - 1][1]
            const blogroute = basename(route)
    
            const allBlogFile = blogFileName("all");
            const allBlogData = await readFile(allBlogFile, "utf8");
            const allBlogJson = JSON.parse(allBlogData || "[]");
    
            const existingBlog = allBlogJson.find((blog) => blog.route === blogroute);
            if (!existingBlog) {
                await writeFile(blogFileName(blogroute), JSON.stringify(blog, null, 2));
    
                const blogMetadata = {
                    route: blogroute,
                    title: header,
                    tags: blog.find((obj) => obj.data.command === "tag")?.data.tags,
                    thm: blog.find((obj) => obj.data.command === "thm")?.data.text,
                    author: {
                        name: blog.find(obj => obj.data.command === "by")?.data.text,
                        name: blog.find(obj => obj.data.command === "pfp")?.data.text,
                    },
                    published_at: blog.find(obj => obj.data.command === "date")?.data.text
                };
                allBlogJson.push(blogMetadata);
                await writeFile(allBlogFile, JSON.stringify(allBlogJson, null, 2));
    
                res.json({ ok: true });
            } else {
                res.json({ ok: false, code: "EXIST" });
            }
        } catch (error) {
            console.error(error)
            res.json({ ok: false })
        }
    });

    return router;
}

module.exports = adminRouter;
