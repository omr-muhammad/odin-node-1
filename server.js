import fs from 'fs';
import express from 'express';

const PORT = process.env.PORT || 3000;
const __dirname = process.cwd();

const homepage = fs.readFileSync('./views/index.html', 'utf-8');
const aboutPage = fs.readFileSync('./views/about.html', 'utf-8');
const contactMePage = fs.readFileSync('./views/contact-me.html', 'utf-8');
const notFoundPage = fs.readFileSync('./views/404.html', 'utf-8');

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
    res.status(200).send(homepage);
});
app.get('/about', (req, res) => {
    res.status(200).send(aboutPage)
});

app.get('/contact-me', (req, res) => {
    res.status(200).send(contactMePage)
});
app.use((req, res) => {
    res.status(404).send(notFoundPage)
});

app.listen(PORT, (err) => {
    if (err) throw err;

    console.log(__dirname);
    console.log(`Server is running on port ${PORT}, No errors detected 😍`);
})