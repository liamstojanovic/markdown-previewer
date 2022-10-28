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
- 1968\. A great year!
- I think 1969 was second best.
> This is a blockquote!
![Your image caption here](https://upload.wikimedia.org/wikipedia/commons/2/2b/La_catena_Appennica.jpg)
**I love bold text!**
`

const Editor = () => {
    const [textinput, setTextInput] = useState({
        raw: defaultMd 
    });

    const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextInput({
            raw: event.target.value
        });
    }

    const toolbarButtons: JSX.Element[] = ToolbarConfig.map((button, index) => {
        return (<Toolbar name={button.name} icon={button.icon} insert={button.insert} key={index}/>);
    })

    return (
        <div id="editor-preview">
            <div id="toolbar" className="">
                <ul className="flex flex-row flex-wrap">
                    {toolbarButtons}
                </ul>

            </div>

            <textarea 
                id="editor"
                className="text-black resize rounded-md" 
                autoFocus={true} 
                placeholder={defaultMd} 
                onChange={(e) => handleTextAreaChange(e)}
            />

            <Preview 
                raw={textinput.raw}
            />
        </div>
        
    )
}

export default Editor;