export class StudentsProject {
  constructor(studentsID: number[]) {
    this.studentsID = studentsID;
  }

  #onlyUniqueIDsSet = new Set<number>();
  #oddStudentID: number = 0;
  studentsID: number[] = [];

  #isInUniqueIDsSet(studentID: number) {
    return this.#onlyUniqueIDsSet.has(studentID);
  }

  #addToUniqueIDsSet(studentID: number) {
    this.#onlyUniqueIDsSet.add(studentID);
  }

  findOddStudent() {
    this.studentsID.forEach((studentID) => {
      if (!this.#isInUniqueIDsSet(studentID)) {
        this.#addToUniqueIDsSet(studentID);
        this.#oddStudentID = studentID;
      }
    });
    return this.#oddStudentID;
  }
}
