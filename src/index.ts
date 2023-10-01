import http from 'http';
const server = http.createServer((req, res) => {
    return res.end("Hello");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
