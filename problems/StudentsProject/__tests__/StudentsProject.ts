import { StudentsProject } from "../StudentsProject";

test("if the correct odd student is returned", () => {
  const studentsID = [2, 4, 5, 4, 2];
  const studentsProject = new StudentsProject(studentsID);
  expect(studentsProject.findOddStudent()).toBe(5);
});
