const jsonServer = require('json-server');
const auth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
// const db = require('./db.json'); // Import the database JSON file

server.use(auth)
server.db = router.db;

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});
