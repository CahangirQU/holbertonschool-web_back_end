const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    let output = '';

    const oldLog = console.log;

    console.log = (text) => {
      output += `${text}\n`;
    };

    countStudents(process.argv[2])
      .then(() => {
        console.log = oldLog;

        res.end(`This is the list of our students\n${output.trim()}`);
      })
      .catch(() => {
        console.log = oldLog;

        res.end('This is the list of our students\nCannot load the database');
      });
  }
});

app.listen(1245);

module.exports = app;
