import { StudentsProject } from "../StudentsProject";

test("if the correct odd student is returned", () => {
  const studentsID = [2, 4, 5, 6, 4, 2];
  const studentsProject = new StudentsProject(studentsID);
  expect(studentsProject.getUnpairedStudents()).toStrictEqual(new Set([5, 6]));
});