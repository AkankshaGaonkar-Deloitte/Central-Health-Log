export class Medication {
    constructor(
        public id?: number,
        public dosage?: string,
        public isCurrent?: boolean,
        public medicine?: string,
        public recordId?: number,
        public startingDate?: string,
        public patientId?: number
    ) {}
}