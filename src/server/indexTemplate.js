export const indexTemplate = (content) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>My Site</title>
        <script src="/static/client.js" type="application/javascript"></script>
    </head>
    <body>
    <div id="App">${content}</div>
    <div id="modal_root"></div>
    </body>
    </html>
`;
