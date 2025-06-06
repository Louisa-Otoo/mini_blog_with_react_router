const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
// const router = jsonServer.router(path.join(__dirname, 'db.json'));
const router = jsonServer.router(path.join(__dirname, 'data', 'posts.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});


