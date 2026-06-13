import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const studentsByField = {};

      // Başlığı ötürük, hər sethri analiz edirik
      for (let i = 1; i < lines.length; i += 1) {
        if (lines[i].trim() !== '') {
          const [firstname, , , field] = lines[i].split(',');
          if (firstname && field) {
            if (!studentsByField[field]) {
              studentsByField[field] = [];
            }
            studentsByField[field].push(firstname);
          }
        }
      }
      resolve(studentsByField);
    });
  });
}
