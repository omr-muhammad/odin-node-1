import { createServer } from 'http';
import fs from 'fs';

const PORT = process.env.PORT || 3000;

const homepage = fs.readFileSync('./views/index.html');
const aboutPage = fs.readFileSync('./views/about.html');
const contactMePage = fs.readFileSync('./views/contact-me.html');
const notFoundPage = fs.readFileSync('./views/404.html');

const server = createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    if (req.method === 'GET') {
        if (req.url === '/') {
            res.end(homepage);
        } else if (req.url === '/about') {
            res.end(aboutPage);
        } else if (req.url === '/contact-me') {
            res.end(contactMePage);
        } else {
            res.statusCode = 404;
            res.end(notFoundPage);
        }
    }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));