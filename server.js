import http from "http";

// create port
const PORT = 8000;

// create server
const server = http.createServer((req, res) => {
  res.write("Hello World");
  res.end();
});

// listen to the port
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
