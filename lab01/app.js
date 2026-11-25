// 953261 Lab 1 — My first Node.js server
// Run:  npm start   then open http://localhost:3000
//
// Routes:
//   GET /          → HTML home page with my nickname and student ID
//   GET /api/me    → JSON about me (status 200)
//   GET /api/time  → current time in Bangkok as JSON (stretch task)
//   anything else  → 404 HTML page

import http from "node:http";

const PORT = 3000;

const me = {
  name: "Panapat Chaiprom",
  studentId: "692115027",
  favouriteLanguage: "JavaScript",
};

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  // 1. Home page
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`<h1>Hello, 953261!</h1>
<p>My name is Pan (student ID ${me.studentId})</p>
<ul>
  <li><a href="/api/me">/api/me</a> — about me (JSON)</li>
  <li><a href="/api/time">/api/time</a> — time in Bangkok (JSON)</li>
</ul>`);
    return;
  }

  // 2. JSON about me
  if (req.method === "GET" && req.url === "/api/me") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(me));
    return;
  }

  // Stretch: current time in Bangkok
  if (req.method === "GET" && req.url === "/api/time") {
    const now = new Date();
    const bangkok = now.toLocaleString("en-GB", { timeZone: "Asia/Bangkok" });
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ timeZone: "Asia/Bangkok", time: bangkok, iso: now.toISOString() }));
    return;
  }

  // 3. Any other path → 404
  res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`<h1>404 Not Found</h1><p>No page at ${req.url}. <a href="/">Go home</a></p>`);
});

server.listen(PORT, () => console.log(`Running at http://localhost:${PORT}`));
