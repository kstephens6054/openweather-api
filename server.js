const app = require('./app');
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT);

server.on('listening', () => {
  const port = server.address().port;
  console.log(`Node HTTP server listening on port ${port}`)
});

server.on('error', (error) => {
  console.log('SERVER ERROR: ', error.message);
  process.exit(1);
});
