import React, { useState } from 'react';

import Button from './Button';
import Preview from './Preview';

import { ButtonConfig } from '../shared/ButtonConfig';

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

    const handleButtonClick = (newTextInput: string): void => {
        console.log('You clicked a button!');
        console.log('Your new text is:' + newTextInput);
        // Case 1: Text area input is empty. Replace empty content with inserted string.
        if (textinput.raw === '') {
            setTextInput({
                raw: newTextInput
            });
            // Terminate the function if there is no text present.
            return;
        };
        // Case 2: Text area input is not empty. Insert based on start and end of cursor.
        // Retrieve selection start and end points to concatenate new string
        const editor = document.getElementById("editor") as HTMLTextAreaElement;
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        // Create new string
        const updatedText = editor.value.slice(0, start) + newTextInput + editor.value.slice(end);
        // Update state with new text
        setTextInput({
            raw: updatedText
        })

        editor.focus();

    }

    const markdownButtons: JSX.Element[] = ButtonConfig.map((button, index) => {
        return (
            <Button
                name={button.name}
                icon={button.icon}
                insert={button.insert}
                key={index}
                handleClick={handleButtonClick}
            />
        )
    });

    return (
        <div id="editor-preview" className="">
            <div id="toolbar" className="border rounded border-white my-4">
                <ul className="flex flex-row flex-wrap">
                    {markdownButtons}
                </ul>

            </div>

            <textarea 
                id="editor"
                className="text-black resize rounded-md w-screen h-52" 
                autoFocus={true} 
                placeholder={defaultMd} 
                onChange={(e) => handleTextAreaChange(e)}
                value={textinput.raw}
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