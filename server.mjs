import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello Wor');
  res.end();
}).listen(process.env.PORT);
