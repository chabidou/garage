const app = require('./lib/server');

app.listen(3030, () => {
  console.info('api listening on port 3030!');
});
