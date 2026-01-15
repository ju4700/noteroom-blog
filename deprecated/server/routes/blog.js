const { Router } = require("express")
const { readFile, access, writeFile } = require("fs/promises")

const router = Router()

function blogRouter(blogFileName) {
    router.get("/", async (req, res) => {
        const allBlogFilePath = blogFileName("all")
        try {
            await access(allBlogFilePath)
        } catch (error) {
            await writeFile(allBlogFilePath, JSON.stringify([]))
        } finally {
            const allBlogData = await readFile(allBlogFilePath, "utf8")
            const blogs = JSON.parse(allBlogData)
            res.render("blogs/all", { blogs })
        }
    });

    router.get("/:fileName", async (req, res, next) => {
        try {
            const blogFile = blogFileName(req.params.fileName) 
            const data = await readFile(blogFile, "utf8")
            const blog = JSON.parse(data)
    
            const header = blog.find(obj => obj.type === "header")
            const breadCrumbs = blog.find(obj => obj.data.command === "brd")?.data.brdCrumbs
            const by = blog.find(obj => obj.data.command === "by")?.data.text
            const abt = blog.find(obj => obj.data.command === "abt")?.text
            const indexes = blog.find(obj => obj.data.command === "idx")?.data
            const rdtime = blog.find(obj => obj.data.command === "rdtime")?.data.text
            const date = new Date(blog.find(obj => obj.data.command === "date")?.data.text)?.toLocaleDateString()
            const pfp = blog.find(obj => obj.data.command === "pfp")?.data.text
            const thm = blog.find(obj => obj.data.command === "thm")?.data.text
    
            res.render("blogs/blog", { header, breadCrumbs, by, abt, indexes, rdtime, date, pfp, thm })
        } catch (err) {
            const error = new Error("Maybe the blog doesn't exist or not accessbile!")
            error.title = "Blog Not Found"
            error.status = 404
            next(error)
        }
    });

    return router
}

module.exports = blogRouter