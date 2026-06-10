const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const content = fs.readFileSync(path, 'utf8').trim();

  const lines = content.split('\n').filter((line) => line.length > 0);

  const students = lines.slice(1);

  console.log(`Number of students: ${students.length}`);

  const fields = {};

  for (const student of students) {
    const data = student.split(',');
    const firstName = data[0];
    const field = data[3];

    if (!fields[field]) {
      fields[field] = [];
    }

    fields[field].push(firstName);
  }

  for (const [field, list] of Object.entries(fields)) {
    console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
  }
}

module.exports = countStudents;
