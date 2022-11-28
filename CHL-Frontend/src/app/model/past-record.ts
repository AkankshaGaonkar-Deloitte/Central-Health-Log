export class PastRecord {
    constructor(
        public id?: number,
        public patientId?: string|number|null,
        public doctorId?: string|number|null,
        public doctorName?: string|number|null,
        public uploadDate?: string|number|null,
        public diagnosis?: string|number|null,
        public prescription?: File,
        public uploadedBy?: string|number|null,
        public severity?: string|number|null
    ) { }
}