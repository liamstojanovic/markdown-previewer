import React from "react";

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
    insert: string,
}

const Toolbar = ({name, icon, insert}: ToolbarButton) => {
    // https://kubyshkin.name/posts/insert-text-into-textarea-at-cursor-position/
    // const insertEditor = (event: React.MouseEvent<HTMLButtonElement>, insertedText: string): void => {
    //     // Get the editor element, which will always be of type HTMLTextrAreaElement
    //     const editor = document.getElementById("editor") as HTMLTextAreaElement;
    //     // Check for existing text
    //     const existingText = editor.value;
    //     // Check for existing selection
    //     const start = editor.selectionStart;
    //     const end = editor.selectionEnd;
    //     // If existingText is null, the user hasn't entered anything into the editor
    //     // Overwrite the value with insertedText
    //     if (!existingText) {
    //         editor.value = insertedText;
    //         return;
    //     }
    //     // Update the value of the textbox with the button insertion text
    //     editor.value = editor.value.slice(0, start) + insertedText + editor.value.slice(end);
    //     // Update cursor to be at the end of the insertion
    //     editor.selectionStart = editor.selectionEnd = start + insertedText.length;
    //     // Focus on the textarea after insertion
    //     editor.focus();
    // }
    
    return (
    <li className="">
        <button id={name} 
        className="border border-white rounded py-2 px-4 bg-white" 
        >
            {icon()}
        </button>
    </li>
    )
}

export default Toolbar;