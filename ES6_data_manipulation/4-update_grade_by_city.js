import getListStudents from "./0-get_list_students.js";


const updateStudentGradeByCity = (students, city, newGrades) => {

  const filteredStudents = students.filter(
    (student) => student.location === city
  );

  return filteredStudents.map((student) => {

    const studentGrade = newGrades.find(
      (grade) => grade.studentId === student.id
    );

    if (studentGrade) {
      student.grade = studentGrade.grade;
    } else {
      student.grade = "N/A";
    }

    return student;
  });
};
export default updateStudentGradeByCity;
