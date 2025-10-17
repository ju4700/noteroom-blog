const { Router } = require("express");
const { readFile, writeFile } = require("fs/promises");
const { join, basename, extname } = require("path");

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
            1. Get the thumbnail and get its metadata
            2. Make a blog-route using the last breadcrumb's route
            3. Check for existing blog in all.blog.json using that route
            4. If no existing blog, save blog as header.blog and write metadata in all.blog
            5. Save the thumbnail to the specified directory
        */

        try {
            if (!req.files) {
                res.json({ ok: false, message: "Add a thumbnail image for the blog" });
            }

            const fileArray = Object.values(req.files).flat()
            const thumbnail = fileArray[0]
            const thumbailFileName = Date.now() + extname(thumbnail.name)

            const blog = JSON.parse(req.body.blog)
    
            const breadCrumbs = blog.find(obj => obj.data.command === "brd")?.data.brdCrumbs
            const route = breadCrumbs[breadCrumbs.length - 1][1]
            const blogroute = basename(route)
    
            const allBlogFile = blogFileName("all");
            const allBlogData = await readFile(allBlogFile, "utf8");
            const allBlogJson = JSON.parse(allBlogData || "[]");
    
            const existingBlog = allBlogJson.find((blog) => blog.route === blogroute);
            if (!existingBlog) {
                blog.push({
                    "type": "paragraph",
                    "data": {
                        "command": "thm",
                        "text": thumbailFileName
                    }
                })
                await writeFile(blogFileName(blogroute), JSON.stringify(blog, null, 2));
    
                const blogMetadata = {
                    route: blogroute,
                    title: blog.find((obj) => obj.type === "header")?.data,
                    tags: blog.find((obj) => obj.data.command === "tag")?.data.tags,
                    thm: thumbailFileName,
                    author: {
                        name: blog.find(obj => obj.data.command === "by")?.data.text,
                        pfp: blog.find(obj => obj.data.command === "pfp")?.data.text,
                    },
                    published_at: blog.find(obj => obj.data.command === "date")?.data.text
                };
                allBlogJson.push(blogMetadata);
                await writeFile(allBlogFile, JSON.stringify(allBlogJson, null, 2));
                thumbnail.mv(join(__dirname, `../../public/images/blog-thumbnails/${thumbailFileName}`))
    
                res.json({ ok: true, message: "Blog has been saved!" });
            } else {
                res.json({ ok: false, message: "A blog already exists with the path you gave. Use another path" });
            }
        } catch (error) {
            console.error(error)
            res.json({ ok: false, message: "Unexpected server error! Check the server console or log file" })
        }
    });

    return router;
}

module.exports = adminRouter;
