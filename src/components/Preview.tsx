import { PreviewState } from "./Editor";

import { marked } from "marked";
import DOMPurify from "dompurify";

// Leveraged https://github.com/sindresorhus/github-markdown-css for Markdown styles.
import './Preview.css';
import './Preview_Dark.css'

const Preview = (props:PreviewState) => {
    // Convert markdown to HTML
    const rawHtml = marked.parse(props.raw, {breaks: true});

    // Sanitize HTML prior to rendering to DOM
    const sanitizedHtml = DOMPurify.sanitize(rawHtml);
    
    return (
        <div 
            id="preview" 
            className="markdown-body text-white border border-white m-2" 
            dangerouslySetInnerHTML={{ __html: sanitizedHtml }}>
        </div>
    )
};

export default Preview;