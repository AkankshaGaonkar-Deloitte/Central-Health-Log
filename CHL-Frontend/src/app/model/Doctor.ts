export class Doctor {
    constructor(
      public id: number,
      public name: string,
      public aadhaarNo: number,
      public registrationNo: number,
      public yearOfRegistration: number,
      public state: string,
      public qualification: string,
      public email: string,
      public contact: number,
      public username: string,
      public password: string
    ){}
  }