export class StudentsProject {
  constructor(studentsID: number[]) {
    this.#studentsID = studentsID;
  }

  #unpairedStudentsID = new Set<number>();
  #pairedStudentsID = new Set<number>();
  #allStudentsID = new Set<number>();
  #studentsID: number[] = [];

  getUnpairedStudents() {
    this.#studentsID.forEach((studentID) => {
      if (this.#isInAllStudentsSet(studentID)) {
        this.#deleteFromUnpairedStudentsSet(studentID);
      } else {
        this.#addToAllStudentsSet(studentID);
        this.#addToUnpairedStudentsSet(studentID);
      }
    });
    return this.#unpairedStudentsID;
  }

  getPairedStudents() {
    this.#studentsID.forEach((studentID) => {
      if (this.#isInAllStudentsSet(studentID)) {
        this.#addToPairedStudentsSet(studentID);
      } else {
        this.#addToAllStudentsSet(studentID);
      }
    });
    return this.#pairedStudentsID;
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

  #addToPairedStudentsSet(studentID: number) {
    this.#pairedStudentsID.add(studentID);
  }
}
