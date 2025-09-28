import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// ====== PLAIN NODE APPROACH =======
// const server = createServer((req, res) => {
// res.writeHead(200, { "content-type": "text/html" });
// 
// if (req.method === 'GET') {
// if (req.url === '/') {
// res.end(homepage);
// } else if (req.url === '/about') {
// res.end(aboutPage);
// } else if (req.url === '/contact-me') {
// res.end(contactMePage);
// } else {
// res.statusCode = 404;
// res.end(notFoundPage);
// }
// }
// });
// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const app = express();

app.use((req, res, next) => {
    res.contentType('text/html');
    next();
})

app.get('/', (req, res) => {
    res.status(200).sendFile(`${__dirname}/views/index.html`);
});
app.get('/about', (req, res) => {
    res.status(200).sendFile(`${__dirname}/views/about.html`)
});

app.get('/contact-me', (req, res) => {
    res.status(200).sendFile(`${__dirname}/views/contact-me.html`)
});
app.use((req, res) => {
    res.status(404).sendFile(`${__dirname}/views/404.html`)
});

app.listen(PORT, (err) => {
    if (err) throw err;

    console.log(__dirname);
    console.log(`Server is running on port ${PORT}, No errors detected 😍`);
})