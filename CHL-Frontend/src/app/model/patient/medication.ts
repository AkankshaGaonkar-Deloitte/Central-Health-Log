export class Medication {
    constructor(
        public id?: number,
        public dosage?: string|number|null,
        public isCurrent?: boolean,
        public medicine?: string|number|null,
        public recordId?: string|number|null,
        public startingDate?: string|number|null,
        public patientId?: string|number|null
    ) {}
}