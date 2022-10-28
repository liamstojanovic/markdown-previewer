import { ToolbarButton } from "../components/Toolbar"

export const ToolbarConfig: ToolbarButton[] = [
    {
        name: `h1`,
        icon: () => {
            return (
                <i className="fa-solid fa-h1"></i>
            );
        },
        insert: `#`
    },
    {
        name: `h2`,
        icon: () => {
            return (
                <i className="fa-solid fa-h2"></i>
            )
        },
        insert: `##`
    },
    {
        name: `h3`,
        icon: () => {
            return (
                <i className="fa-solid fa-h3"></i>
            )
        },
        insert: `###`
    },
    {
        name: `link`,
        icon: () => {
            return (
                <i className="fa-solid fa-link"></i>
            )
        },
        insert: `[Link name](https://link-url)`
    },
    {
        name: `code`,
        icon: () => {
            return (
                <i className="fa-solid fa-code"></i>
            )
        },
        insert: `\`<code>\``
    },
    {
        name: `code-block`,
        icon: () => {
            return (
                <i className="fa-regular fa-square-code"></i>
            )
        },
        insert: `    <html>
        <head>
        </head>
      </html>`
    },
    {
        name: `list-item`,
        icon: () => {
            return (
                <i className="fa-solid fa-list"></i>
            )
        },
        insert: `- 1968\. A great year!
        - I think 1969 was second best.`
    },
    {
        name: `blockquote`,
        icon: () => {
            return (
                <i className="fa-solid fa-block-quote"></i>
            )
        },
        insert: `> This is a blockquote!`
    },
    {
        name: `image`,
        icon: () => {
            return (
                <i className="fa-solid fa-block-quote"></i>
            )
        },
        insert: `![Your image caption here](https://upload.wikimedia.org/wikipedia/commons/2/2b/La_catena_Appennica.jpg)`
    },
    {
        name: `bold`,
        icon: () => {
            return (
                <i className="fa-solid fa-bold"></i>
            )
        },
        insert: `**I love bold text!**`
    },
    {
        name: `italic`,
        icon: () => {
            return (
                <i className="fa-solid fa-italic"></i>
            )
        },
        insert: `Italicized text is the *cat's meow*.`
    }
]