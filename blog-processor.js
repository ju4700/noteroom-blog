const fs = require("fs")
const file = fs.readFileSync("./blog.json", "utf8")
const blocks = JSON.parse(file).blocks

function Filter(blocks) {
    let _foundIndexes = null
    let _indexIdx = null
    let _indexCount = null
    let _mergingIndex = null

    
    this.commands =  ["tag", "by", "rdtime", "abt", "st", "end","idx"]
    this.blog = blocks.map((block, i) => {
        let data = block.data

        if (_foundIndexes) {
            blocks[_indexIdx].data.items = data.items.map(item => ({index: item}))
            _foundIndexes = false
            return null
        }

        if (data.text) {
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
                } else if (command === "br") {
                    data = { command, text: "<br>"}
                } else {
                    data = { command, text }
                }
            } else {
                data = p1
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


const blog = new Filter(blocks)
console.log(blog.blog[5].data.items)
