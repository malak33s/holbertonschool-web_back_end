import getListStudents from './0-get_list_students.js';
import getStudentsByLocation from './2-get_students_by_loc.js';

const students = getListStudents();
console.log(getStudentsByLocation(students, 'San Francisco'));
// Expected output:
// [
//   { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
//   { id: 5, firstName: 'Serena', location: 'San Francisco' }
// ]
