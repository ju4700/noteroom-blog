import { Router } from "express"
import { readFile, writeFile } from "fs/promises"

const router = Router()

export default function blogRouter(blogFileName) {
    router.get("/", async (req, res) => {
        const allBlogData = await readFile(blogFileName("all"), "utf8")
        const blogs = JSON.parse(allBlogData)
        res.render("blogs/all", { blogs, noHeader: true, noFooter: true })
    });

    router.get("/:fileName", async (req, res) => {
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
    });

    return router
}

