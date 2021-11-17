export const indexTemplate = (content,token) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>My Site</title>
        <script src="/static/client.js" type="application/javascript"></script>
        <script>window.__token__ = '${token}' </script>
    </head>
    <body>
    <div id="App">${content}</div>
    <div id="modal_root"></div>
    </body>
    </html>
`;