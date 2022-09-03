export class Province {
    id: number;
    name: string;
    department_id: string;

    constructor(id:number, name:string, department_id: string){
        this.id = id;
        this.name = name;
        this.department_id = department_id;
    
    }
}
