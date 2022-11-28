export class PastRecord {
    constructor(
        public id: number,
        public patientId: number,
        public doctorId: number,
        public doctorName: string,
        public uploadDate: Date,
        public diagnosis: string,
        public prescription: File,
        public uploadedBy: string,
        public severity: number
    ) { }
}