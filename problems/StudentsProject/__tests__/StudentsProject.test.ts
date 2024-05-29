import { StudentsProject } from "../StudentsProject";

test("if the correct unpaired student is returned", () => {
  const studentsID = [2, 4, 5, 6, 4, 2];
  const studentsProject = new StudentsProject(studentsID);
  expect(studentsProject.getUnpairedStudents()).toStrictEqual(new Set([5, 6]));
});

test("if the correct paired students are returned", () => {
  const studentsID = [1, 2, 4, 5, 6, 4, 2, 1];
  const studentsProject = new StudentsProject(studentsID);
  expect(studentsProject.getPairedStudents()).toStrictEqual(new Set([1, 2, 4]));
});
