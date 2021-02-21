const server = require('./server');

const HOST = 'localhost';
const PORT = 8888;

server.listen(PORT, () => console.log(`\nServer running at ${HOST}:${PORT} ...🛫 \n`));