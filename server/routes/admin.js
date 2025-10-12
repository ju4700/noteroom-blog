import { Router } from "express"
import { readFile, writeFile } from "fs/promises"
import { join } from "path"
import slugify from "slugify"

const router = Router()

export default function adminRouter(__dirname, blogFileName) {
    router.get("/blog", async (req, res) => {
        const email = req.query?.email
        const authorFile = await readFile(join(__dirname, `../blogs/authors.json`), "utf8")
        const authors = JSON.parse(authorFile)
        const author = authors.find(author => author.email === email)
        if (author) {
            res.render("blog-editor", {  author })
        } else {
            res.send("Not allowed")
        }
    })

    router.post("/blog", async (req, res) => {
        const blog = req.body
        const blogJsonWritable = JSON.stringify(blog, 2, null)
        const header = blog.find(obj => obj.type === "header")?.data
        const blogroute = slugify(header, {
            lower: true,
            strict: true
        })
        const allBlogFile = blogFileName("all")
        const allBlogData = await readFile(allBlogFile, "utf8")
        const allBlogJson = JSON.parse(allBlogData || "[]")
        const existingBlog = allBlogJson.find(blog => blog.route === blogroute)
        if (!existingBlog) {
            const blogfile = blogFileName(blogroute)
            await writeFile(blogfile, blogJsonWritable)
            const blog_ = {
                route: blogroute,
                title: req.body.find(obj => obj.type === "header")?.data,
                tags: req.body.find(obj => obj.data.command === "tag")?.data.tags,
                thm: req.body.find(obj => obj.data.command === "thm")?.data.text
            }

            allBlogJson.push(blog_)
            await writeFile(allBlogFile, JSON.stringify(allBlogJson))
            res.json({ok: true})
        } else {
            res.json({ok: false, code: "EXIST"})
        }
    })

    
    return router
}

