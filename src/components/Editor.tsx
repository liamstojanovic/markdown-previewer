import React, { useState } from 'react';
import Preview from './Preview';

export type PreviewState = {
    raw: string
}

const Editor = () => {

    const [textinput, setTextInput] = useState({
        raw: "Hello world!"
    })

    return (
        <div id="editor-preview">
            <div id="toolbar">
                Toolbar
            </div>
            <textarea id="editor">
            
            </textarea>

            <Preview raw="My static string."/>
        </div>
        
    )
}

export default Editor;