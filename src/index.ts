import http from 'http';
import fs from 'fs'
const server = http.createServer((req, res) => {
    // const readFile = fs.readFileSync("src/files/sample.txt","utf-8")
    const readFile = fs.createReadStream("src/files/sample.txt")
    res.writeHead(200,{"Content-Type": 'text'})
    readFile.pipe(res);
    // return res.end(readFile)
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
