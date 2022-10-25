import React, { useState } from 'react';
import Preview from './Preview';

export type PreviewState = {
    raw: string
}

const defaultMd: string = `# My heading
## My subheading
### My sub-subheading
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

    return (
        <div id="editor-preview">
            <div id="toolbar"> {/* Should this be its own component? */}
                Toolbar
            </div>
            <textarea 
                id="editor" 
                autoFocus={true} 
                placeholder={defaultMd} 
                onChange={(e) => handleTextAreaChange(e)}
            />

            <Preview raw={textinput.raw}/>
        </div>
        
    )
}

export default Editor;