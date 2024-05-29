export class StudentsProject {
  constructor(studentsID: number[]) {
    this.#studentsID = studentsID;
  }

  #unpairedStudentsID = new Set<number>();
  #allStudentsID = new Set<number>();
  #studentsID: number[] = [];

  findUnpairedStudents() {
    this.#studentsID.forEach((studentID) => {
      if (!this.#isInAllStudentsSet(studentID)) {
        this.#addToAllStudentsSet(studentID);
        this.#addToUnpairedStudentsSet(studentID);
      } else {
        this.#deleteFromUnpairedStudentsSet(studentID);
      }
    });
    return this.#unpairedStudentsID;
  }

  #isInAllStudentsSet(studentID: number) {
    return this.#allStudentsID.has(studentID);
  }

  #addToAllStudentsSet(studentID: number) {
    this.#allStudentsID.add(studentID);
  }

  #addToUnpairedStudentsSet(studentID: number) {
    this.#unpairedStudentsID.add(studentID);
  }

  #deleteFromUnpairedStudentsSet(studentID: number) {
    this.#unpairedStudentsID.delete(studentID);
  }
}
