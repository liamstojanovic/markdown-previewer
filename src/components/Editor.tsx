import React, { useState } from 'react';

export type PreviewState = {
    raw: string
}

const Editor = () => {

    const [textinput, setTextInput] = useState({
        raw: "Hello world!"
    })

    return (
        <div id="editor-wrapper">
            <div id="toolbar">
                Toolbar
            </div>
            <textarea id="editor">
            
            </textarea>
        </div>
        
    )
}

export default Editor;