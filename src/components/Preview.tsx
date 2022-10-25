import { PreviewState } from "./Editor";

const Preview = (props:PreviewState) => {
    return (
        <div id="preview">
            Your text: {props.raw}
        </div>
    )
};

export default Preview;