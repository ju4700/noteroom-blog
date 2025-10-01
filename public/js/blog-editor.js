function Filter(blocks) {
    let _foundIndexes = null
    let _indexIdx = null
    let _indexCount = null
    let _mergingIndex = null


    this.commands =  ["tag", "by", "rdtime", "abt", "st", "end","idx", "brd", "pfp", "thm"]
    this.blog = blocks.map((block, i) => {
        let data = block.data

        if (_foundIndexes) {
            blocks[i - 1].data.items = data.items.map(item => ({index: item}))
            _foundIndexes = false
            return null
        }

        if (data.text) {
            if (data.text === "-") {
                data = { ...data, text: "<br>" }
            } else {
                const [p1, text] = data.text.split(":")
                const command = p1.split("-")[1]

                if (this.commands.includes(command)) {
                    if (command === "idx") {
                        _foundIndexes = true
                        _indexIdx = i
                        data.text = text
                        data.command = command
                    } else if (command === "st") {
                        _mergingIndex = _mergingIndex !== null ? _mergingIndex + 1 : 0 
                        const indexes = blocks[_indexIdx].data.items
                        indexes[_mergingIndex].title = text
                        indexes[_mergingIndex].contents = []
                        return null
                    } else if (command === "end") {
                        _mergingIndex = null
                        return null
                    } else if (command === "tag") {
                        const tags = text.split(" ")
                        data = { command, tags }
                    } else if (command === "brd") {
                        const brdCrumbs = text.split(".")
                        const link = brdCrumbs.map(brd => brd.split("@"))
                        data = { command, brdCrumbs: link }
                    } else {
                        data = { command, text }
                    }
                } else {
                    data = p1
                }
            }
        }


        if (_mergingIndex !== null) {
            const indexes = blocks[_indexIdx].data.items
            indexes[_mergingIndex].contents.push(blocks[i].data.text)
            return null
        }

        return { type: block.type, data }
    }).filter(block => block)
}


const editor = new EditorJS({
    holder: 'editorjs',
    autofocus: true,
    placeholder: 'Start writing your blog...',

    tools: {
        header: { class: Header, inlineToolbar: ['bold','italic','underline','link'] },
        list: { class: List, inlineToolbar: ['bold','italic','underline'] },
        linkTool: LinkTool,
        underline: Underline,
    },
    data: {
        blocks: [
            {
                type: "paragraph",
                data: {
                    text:"-by:" + document.querySelector("#author-name").textContent
                }
            },
            {
                type: "paragraph",
                data: {
                    text:"-pfp:" + document.querySelector("#author-pfp").textContent
                }
            }
        ]
    }
});

const outputEl = document.getElementById('output')

document.getElementById('saveBtn').addEventListener('click', async () => {
    try {
        let savedData = await editor.save();
        let filteredBlocks = new Filter(savedData.blocks).blog
        filteredBlocks.push({
            "type": "paragraph",
            "data": {
                "command": "date",
                "text": new Date()
            }
        })
        const header = filteredBlocks.find(obj => obj.type === "header")?.data
        localStorage.setItem(header, JSON.stringify(savedData))
        outputEl.textContent = JSON.stringify(filteredBlocks, null, 2);
        const response = await fetch("/admin/blog", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(filteredBlocks)
        })  
        if (response.ok) {
            const data = await response.json()
            alert(data)
        }
    } catch(err) {
        console.error(err);
        alert('Saving failed: ' + err.message);
    }
});

function loadBlogs() {
    try {
        const savedBlogSection = document.querySelector("#saved-blogs")
        const blogHeaders = Object.keys(localStorage)
        if (blogHeaders.length > 0) {
            for (const header of blogHeaders) {
                const blog = localStorage.getItem(header)
                const element = `<button onclick="insertBlog('${header}')">${header}</button>`
                savedBlogSection.insertAdjacentHTML("afterend", element)
            }
        }
    } catch (e) {
        alert(e)
    }
}

loadBlogs()

function insertBlog(header) {
    try {
        const blog = JSON.parse(localStorage.getItem(header)) 
        editor.render(blog)
    } catch (e) {
        alert(e)   
    }
}
