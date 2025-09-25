import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import EditorjsList from "@editorjs/list";
import LinkTool from "@editorjs/link";
import Underline from "@editorjs/underline";

const editor = new EditorJS({
    holder: "editorjs",
    autofocus: true,
    placeholder: "Start writing your blog...",

    tools: {
        header: {
            class: Header,
            inlineToolbar: ["bold", "italic", "underline", "link"]
        },
        list: {
            class: EditorjsList,
            inlineToolbar: ["bold", "italic", "underline"]
        },
        linkTool: LinkTool,
        underline: Underline
    }
});

class Filter {
    constructor(blocks) {
        let _foundIndexes = null;
        let _indexIdx = null;
        let _mergingIndex = null;

        this.commands = ["tag", "by", "rdtime", "abt", "st", "end", "idx", "brd"];
        this.blog = blocks
            .map((block, i) => {
                let data = block.data;

                if (_foundIndexes) {
                    blocks[i - 1].data.items = data.items.map((item) => ({ index: item }));
                    _foundIndexes = false;
                    return null;
                }

                if (data.text) {
                    if (data.text === "-") {
                        data = { ...data, text: "<br>" };
                    } else {
                        const [p1, text] = data.text.split(":");
                        const command = p1.split("-")[1];

                        if (this.commands.includes(command)) {
                            if (command === "idx") {
                                _foundIndexes = true;
                                _indexIdx = i;
                                data.text = text;
                                data.command = command;
                            } else if (command === "st") {
                                _mergingIndex = _mergingIndex !== null ? _mergingIndex + 1 : 0;
                                const indexes = blocks[_indexIdx].data.items;
                                indexes[_mergingIndex].title = text;
                                indexes[_mergingIndex].contents = [];
                                return null;
                            } else if (command === "end") {
                                _mergingIndex = null;
                                return null;
                            } else if (command === "tag") {
                                const tags = text.split(" ");
                                data = { command, tags };
                            } else if (command === "brd") {
                                const brdCrumbs = text.split(".");
                                data = { command, brdCrumbs };
                            } else {
                                data = { command, text };
                            }
                        } else {
                            data = p1;
                        }
                    }
                }

                if (_mergingIndex !== null) {
                    const indexes = blocks[_indexIdx].data.items;
                    indexes[_mergingIndex].contents.push(blocks[i].data.text);
                    return null;
                }

                return { type: block.type, data };
            })
            .filter((block) => block);
    }
}

const outputEl = document.getElementById("output");

document.getElementById("saveBtn").addEventListener("click", async () => {
    try {
        let savedData = await editor.save();
        savedData = new Filter(savedData.blocks).blog;
        outputEl.textContent = JSON.stringify(savedData, null, 2);
    } catch (err) {
        console.error(err);
        alert("Saving failed: " + err.message);
    }
});
