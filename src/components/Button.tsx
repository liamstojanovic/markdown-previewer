import React from "react";

export type MarkdownButton = {
    name: string,
    icon: () => JSX.Element,
    insert: string,
    handleClick?: (newText: string) => void
}

const Button = ({name, icon, insert, handleClick}: MarkdownButton): JSX.Element => {
    return (
        <button id={name}
        onClick={() => handleClick!(insert)}
        className="border border-white rounded py-2 px-4 bg-white"
        >
            {icon()}
        </button>
    )
}

export default Button;