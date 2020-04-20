const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.get('/', (req, res, next) => {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/index.html');
    const contentFromHTMLFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHTMLFile);
})

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.listen(3000, () => {
    console.log('Listening to port 3000')
});