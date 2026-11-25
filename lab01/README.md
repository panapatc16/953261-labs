# 953261 Lab 1 — First Node.js Server

| | |
|---|---|
| **Name** | Panapat Chaiprom |
| **Nickname** | Pan |
| **Student ID** | 692115027 |
| **Section** | 701 |

## How to run

```bash
cd lab01
npm start
```

Then open <http://localhost:3000> and <http://localhost:3000/api/me>.

| Route | Response |
|---|---|
| `GET /` | HTML home page with my nickname and student ID |
| `GET /api/me` | `200` JSON: `name`, `studentId`, `favouriteLanguage` |
| `GET /api/time` | `200` JSON: current time in Bangkok (stretch) |
| any other path | `404` HTML message |

## What I learned today

When I type a URL, the browser sends an HTTP request (a method like GET plus a path like `/api/me`) to the server at localhost:3000. My Node.js server reads `req.method` and `req.url`, chooses a response, and sends back a status code (200 or 404), headers such as `Content-Type`, and a body (HTML or JSON). The browser then shows the body, and I can see the whole request–response in the terminal log, in DevTools → Network, and with `curl -i`.

## AI-use statement

I used Claude (Anthropic) to help write the routes in `app.js` (`/api/me`, `/api/time`, the 404 response) and to draft this README. I read and tested every line myself and can explain how the code works.
