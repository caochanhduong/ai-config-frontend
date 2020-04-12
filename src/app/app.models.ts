export class Account {
    constructor(
        public id?: number,
        public account?: string,
        public ai_type?: number,
        public start_time?: number,
        public duration?: number,
        public end_time?: number
    ) { }
}

export class Map {
    constructor(
        public ai_type?: number,
        public ai_name?: string
    ) { }
}