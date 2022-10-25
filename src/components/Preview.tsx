import { PreviewState } from "./Editor";

import { marked } from "marked";
import DOMPurify from "dompurify";

const Preview = (props:PreviewState) => {
    // Convert markdown to HTML
    const rawHtml = marked.parse(props.raw);

    // Sanitize HTML prior to rendering to DOM
    const sanitizedHtml = DOMPurify.sanitize(rawHtml);
    return (
        <div id="preview" dangerouslySetInnerHTML={{ __html: sanitizedHtml }}>
            
        </div>
    )
};

export default Preview;