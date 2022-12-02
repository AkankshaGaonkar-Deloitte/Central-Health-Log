export class MedicalData {
    constructor(
        public id?:string|number|null,
        public patientId?: string|number|null,
        public isCurrent?: string|number|null,
        public height?: string|number|null,
        public weight?: string|number|null,
        public bmi?: string|number|null,
        public pulseRate?: string|number|null,
        public bloodPressure?: string|number|null,
        public bloodGroup?: string|number|null,
        public allergies?: string|number|null,
        public immunizations?: string|number|null,
        public chronicHealthProblems?: string|number|null,
        public familyMedicalHistory?: string|number|null,
        public uploadDate?: string|number|null
    ) { }
}