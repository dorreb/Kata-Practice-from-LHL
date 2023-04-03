
// In this exercise, we will be given a list of instructors and we will create a single object to organize them based on their course.

const organizeInstructors = function(instructors) {
  const result = {};

  // Loop through each instructor in the input array
  for (const instructor of instructors) {

    // Check if the course already exists as a key in the result object
    if (result[instructor.course]) {

      // If it does, add the instructor's name to the array of instructors for that course
      result[instructor.course].push(instructor.name);

    } else {

      // If the course doesn't exist as a key in the result object, create a new key with the course name
      // and initialize it with an array containing the instructor's name
      result[instructor.course] = [instructor.name];
    }
  }
  return result;

};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));
