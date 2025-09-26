import { createServer } from 'http';

const PORT = process.env.PORT || 3000;

const server = createServer((req, res) => {
    res.writHead(200, { "content-type": "text/html" });
    res.end("<h1>Hello World</h1>");
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));