console.log("This is tutorial 37");

// Pretend that this response is coming from the server
const students = [
  { name: "Muhammad Saeed", subject: "JavaScript" },
  { name: "Haris", subject: "Machine Learning" },
];

function enrollStudent(student, callback) {
  setTimeout(function () {
    students.push(student);
    console.log("Student has been enrolled");
    callback();
  }, 5000);
}

function getStudents() {
  setTimeout(function () {
    let str = "";
    students.forEach(function (student) {
      str += `<li> ${student.name}</li>`;
    });
    document.getElementById("students").innerHTML = str;
    console.log("Students have been fetched");
  }, 1000);
}

let newStudent = { name: "Hassan", subject: "Python" };
enrollStudent(newStudent, getStudents);
// getStudents();
