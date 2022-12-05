export class Patient {
    constructor(
        public id?: number,
        public username?: string|number|null,
        public firstname ?: string|number|null,
        public lastname ?: string|number|null,
        public password?: string|number|null,
        public email ?: string|number|null,
        public phoneNo ?: string|number|null,
        public gender ?: string|number|null,
        public address ?: string|number|null,
        public age ?: string|number|null
    ) { }
}