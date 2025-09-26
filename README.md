# Odin Node.js Routing Project

A learning project from The Odin Project curriculum focused on understanding HTTP routing using vanilla Node.js without any frameworks or external libraries.

## 🎯 Learning Objectives

This project was built to understand fundamental concepts of:
- **HTTP Server Creation** - Building a server from scratch using Node.js built-in modules
- **URL Routing** - Handling different routes and HTTP methods manually
- **Request/Response Handling** - Processing incoming requests and sending appropriate responses
- **File System Operations** - Serving static files and managing file operations
- **Node.js Core Modules** - Working with `http`, `url`, `fs`, and `path` modules

## 🛠️ Technologies Used

- **Node.js LTS 20+** - Runtime environment with ES6 modules support
- **HTTP Module** - For creating the web server (`createServer`)
- **File System Module** - For synchronous file operations (`readFileSync`)
- **ES6 Import/Export** - Modern module syntax
- **Process.env** - For environment variable management
- **NPM Scripts** - For development workflow
- No external frameworks or libraries (pure Node.js)

## 🚀 Getting Started

### Prerequisites
- Node.js LTS version 20+ installed on your machine

### Installation & Running

1. Clone the repository:
```bash
git clone https://github.com/omr-muhammad/odin-node-1.git
cd odin-node-1
```

2. Install dependencies (if any):
```bash
npm install
```

3. Start the development server in watch mode:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

*Note: The port will be 5000 if you have `PORT=5000` set in your `.env` file*

## 📁 Project Structure

```
odin-node-1/
├── views/
│   ├── index.html          # Home page
│   ├── about.html          # About page  
│   ├── contact-me.html     # Contact page
│   └── 404.html           # Error page
├── server.js              # Main server file
├── .env                   # Environment variables (PORT=5000)
├── package.json           # NPM scripts and project metadata
└── README.md              # This file
```

## 🔧 Features

### Basic Routing
- **Home Route** (`/`) - Serves the main index page
- **About Route** (`/about`) - Displays about information
- **Contact Route** (`/contact-me`) - Shows contact form/information
- **404 Handling** - Custom error page for undefined routes

### HTTP Methods
- Handles GET requests for all routes
- Proper HTTP status codes (200, 404)
- Content-Type headers for HTML responses

### Static File Serving
- Serves HTML files from the `views/` directory
- Uses synchronous file reading for simplicity (`readFileSync`)
- Pre-loads all HTML files at server startup
- Returns appropriate HTTP status codes

### Environment Configuration
- Uses environment variables for PORT configuration
- Defaults to port 3000 if PORT not specified in `.env`
- Environment-based development setup

### Development Features
- **Watch Mode** - Server restarts automatically on file changes using npm start script
- **Organized Structure** - HTML templates separated into views folder
- **ES6 Modules** - Modern import/export syntax
- **Synchronous File Reading** - Files loaded once at startup for better performance

## 💡 Key Learning Points

### Manual Routing Implementation
Instead of using Express.js or other frameworks, this project implements routing manually using ES6 modules and modern Node.js:

```javascript
import { createServer } from 'http';

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
```

### File System Integration
Learning to read and serve files from the views directory using synchronous file operations:

```javascript
import fs from 'fs';

const homepage = fs.readFileSync('./views/index.html');
const aboutPage = fs.readFileSync('./views/about.html');
const contactMePage = fs.readFileSync('./views/contact-me.html');
const notFoundPage = fs.readFileSync('./views/404.html');
```

### Environment Variables
Using environment variables with ES6 modules:

```javascript
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

### HTTP Response Handling
Understanding how to set proper headers and status codes:

```javascript
response.writeHead(200, {'Content-Type': 'text/html'});
response.end(data);
```

## 🎓 What This Project Teaches

1. **Foundation Knowledge** - How web servers work at a fundamental level
2. **Modern Node.js** - Using ES6 modules and import/export syntax
3. **HTTP Protocol** - Understanding requests, responses, and status codes
4. **Routing Logic** - Implementing URL routing from scratch with conditional statements
5. **File Operations** - Using synchronous file reading for better performance
6. **Project Organization** - Separating views from server logic
7. **Environment Configuration** - Using environment variables for settings
8. **Development Workflow** - Setting up npm scripts and watch mode
9. **Performance Optimization** - Pre-loading files at startup vs reading on each request

## 🔄 Possible Improvements

As a learning exercise, you could extend this project by:
- Adding support for POST requests
- Implementing query parameter parsing
- Adding CSS/JavaScript file serving
- Including basic form handling
- Adding logging functionality
- Implementing middleware concepts

## 📚 Related Learning Resources

- [The Odin Project - NodeJS Course](https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs)
- [Node.js Official Documentation](https://nodejs.org/en/docs/)
- [MDN - Node.js server without framework](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework)

## 🤝 About The Odin Project

This project is part of [The Odin Project](https://www.theodinproject.com/), a free, open-source curriculum for learning web development. The Odin Project provides a structured path for learning full-stack development with hands-on projects and a supportive community.

---

*This is a beginner-level project focused on understanding the fundamentals of Node.js and HTTP routing without the abstraction of frameworks. The goal is to build a solid foundation before moving on to more advanced tools and frameworks.*