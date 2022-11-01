# About this app

This Markdown Previewer was creaed as part of [Freecodecamp's front end development libraries project series](https://www.freecodecamp.org/learn/front-end-development-libraries/#front-end-development-libraries-projects).

In this project, I leveraged:
- TypeScript/React,
- [Sindre Sorhus's Github Markdown CSS](https://github.com/sindresorhus/github-markdown-css) for the preview pane,
- [Marked](https://www.npmjs.com/package/marked) to parse the markdown input,
- [DOMPurify](https://github.com/cure53/DOMPurify) as an XSS sanitizer,
- [TailwindCSS](https://tailwindcss.com/) for component styling.

### Running locally

To run this project locally, use `npm install` followed by `npm start`.

Note that the icons used for the buttons are whitelisted for certain domains only; you'll have to substitute the Fontawesome CDN in `public/index.html` with your own.

You can add or remove buttons that appear above the editor by changing the values in `shared/ButtonConfig.tsx`.