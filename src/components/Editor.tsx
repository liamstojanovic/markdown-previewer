import React, { useState } from 'react';

import Button from './Button';
import Preview from './Preview';

import { ButtonConfig } from '../shared/ButtonConfig';

export type PreviewState = {
    raw: string
}

const defaultMd: string = `# Markdown Previewer, created by [Liam Stojanovic](https://www.freecodecamp.org/liamstojanovic)
## This is project two of five for Freecodecamp's Front End Development Libraries.
### You can find [my Github here](https://github.com/liamstojanovic)
As an addition to the [user stories](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer) for this project, I also added buttons that insert markdown when clicked!

# About this project

- I made use of [Sindre Sorhus's Github Markdown CSS repo](https://github.com/sindresorhus/github-markdown-css) to style the preview correctly.
- I leveraged [Tailwindcss](https://tailwindcss.com/) to style my components.
- This application was built using TypeScript and React.

# Other fun markdown elements:
### Inline code
\`<code>\`

### Code block
    <html>
        <head>
        </head>
    </html>

### Blockquote
> Hello! I am a blockquote!

### Image

![La Catenba Appennica](https://upload.wikimedia.org/wikipedia/commons/2/2b/La_catena_Appennica.jpg)

### Bold text
**I am bold text!**
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
        <div id="editor-preview" className="bg-inherit">
            <div id="buttons" className="py-4">
                <ul className="flex flex-row flex-wrap justify-center">
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