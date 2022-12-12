export class PastRecord {
    constructor(
        public id?: number,
        public patientId?: string|number|null,
        public doctorId?: string|number|null,
        public doctorName?: string|number|null,
        public uploadDate?: string|number|null,
        public diagnosis?: string|number|null,
        public prescriptionId?: number,
        public uploadedBy?: string|number|null,
        public severity?: string|number|null
    ) { }
}