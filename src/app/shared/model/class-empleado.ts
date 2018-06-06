export class ClassEmpleado {

    constructor(public Id:number,
        public Nombre:string,
                public Ciudad: string,
                public FotoUrl?: string){
        
}
    getEdad(): number {
        return 0;
    }
}
