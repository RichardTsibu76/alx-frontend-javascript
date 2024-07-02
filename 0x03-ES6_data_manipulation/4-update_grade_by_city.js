export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  // Filter students by city
  const studentsInCity = listStudents.filter(student => student.location === city);

  // Map through students in the city and update their grades
  const updatedStudents = studentsInCity.map(student => {
    const gradeRecord = newGrades.find(grade => grade.studentId === student.id);
    return {
      ...student,
      grade: gradeRecord ? gradeRecord.grade : 'N/A'
    };
  });

  return updatedStudents;
}

