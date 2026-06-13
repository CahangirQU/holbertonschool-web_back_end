import { readDatabase } from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    const databaseFile = process.argv[2];

    readDatabase(databaseFile)
      .then((studentsByField) => {
        const responseParts = ['This is the list of our students'];
        
        // Sahələri case-insensitive əlifba sırası ilə düzürük
        const sortedFields = Object.keys(studentsByField).sort((a, b) =>
          a.toLowerCase().localeCompare(b.toLowerCase())
        );

        for (const field of sortedFields) {
          const list = studentsByField[field].join(', ');
          responseParts.push(`Number of students in ${field}: ${studentsByField[field].length}. List: ${list}`);
        }

        return response.status(200).send(responseParts.join('\n'));
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const databaseFile = process.argv[2];

    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    return readDatabase(databaseFile)
      .then((studentsByField) => {
        const students = studentsByField[major] || [];
        return response.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }
}
