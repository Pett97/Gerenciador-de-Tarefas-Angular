export class Tarefa {
    // o ? significa que os são opcionais 
    constructor(
        public id?: number,
        public nome?: string,
        public concluida?: boolean
    ) {

    }
}