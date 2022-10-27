/**
 * Configuration for Toolbar Button.
 * @type {name} The element ID to assign to the toolbar button
 * Example: h1-button
 * @type {icon} specifies the fontawesome icon to use (formatted as JSX)
 * Example: <i className="fa-solid fa-h1"></i>
 * @type {insert} specifies the string to insert upon clicking the button
 * Example: #
 */
export type ToolbarButton = {
    name: string,
    icon: () => JSX.Element,
    insert: string
}

const Toolbar = ({name, icon, insert}: ToolbarButton) => {
    // https://kubyshkin.name/posts/insert-text-into-textarea-at-cursor-position/
    const insertEditor = (insertedText: string) => {
        // Get the editor element, which will always be of type HTMLTextrAreaElement
        const editor = document.getElementById("editor") as HTMLTextAreaElement;
        // Check for existing text
        const existingText = editor.value;
        // If existingText is null, the user hasn't entered anything into the editor
        // Overwrite the value with insertedText
        if (!existingText) {
            editor.value = insertedText
        }
        // Not yet complete.
    }
    
    return (
        <div className="toolbar">
            <ul className="flex">
                <button id={name} className="inline-block border border-white rounded py-2 px-4 bg-white">
                    {icon()}
                </button>
            </ul>
        </div>
    )
}

export default Toolbar;