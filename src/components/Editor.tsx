import React, { useState } from 'react';

import Toolbar from './Toolbar';
import Preview from './Preview';

import { ToolbarConfig } from '../shared/ToolbarConfig';

export type PreviewState = {
    raw: string
}

const defaultMd: string = `# My heading
## My subheading
### My sub-subheading
[Link name](https://link-url)

\`<code>\`

    <html>
        <head>
        </head>
    </html>

- This is my first list item!
- This is my second list item!

> This is a blockquote!

This is normal text!

![Your image caption here](https://upload.wikimedia.org/wikipedia/commons/2/2b/La_catena_Appennica.jpg)

**I love bold text!**

Italicized text is the *cat's meow*.
`

const Editor = () => {
    const [textinput, setTextInput] = useState({
        raw: defaultMd 
    });

    const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setTextInput({
            raw: event.target.value
        });
    }

    // const handleButtonInsertion = (newInputString: string): void => {
    //     // setTextInput({
    //     //     raw: document.getElementById("editor")!.textContent!
    //     // });
    // }

    // const toolbarButtons: JSX.Element[] = ToolbarConfig.map((button, index) => {
    //     return (<Toolbar 
    //                 name={button.name} 
    //                 icon={button.icon} 
    //                 insert={button.insert} 
    //                 key={index}
    //             />);
    // });

    // const insertEditor = (insertedText: string): string => {
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
    //         return insertedText;
    //     }
    //     // Update the value of the textbox with the button insertion text
    //     editor.value = editor.value.slice(0, start) + insertedText + editor.value.slice(end);
    //     // Update cursor to be at the end of the insertion
    //     editor.selectionStart = editor.selectionEnd = start + insertedText.length;
    //     // Focus on the textarea after insertion
    //     editor.focus();

    //     return editor.value;
    // }

    return (
        <div id="editor-preview" className="">
            {/* <div id="toolbar" className="border rounded border-white my-4">
                <ul className="flex flex-row flex-wrap">
                    {toolbarButtons}
                </ul>

            </div> */}

            <textarea 
                id="editor"
                className="text-black resize rounded-md w-screen h-52" 
                autoFocus={true} 
                placeholder={defaultMd} 
                onChange={(e) => handleTextAreaChange(e)}
            />

            <div id="preview-header" className="text-white text-center">
                PREVIEW
            </div>
            <Preview 
                raw={textinput.raw}
            />
        </div>
        
    )
}

export default Editor;