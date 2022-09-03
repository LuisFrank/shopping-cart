export class District {
    id: number;
    name: string;   
    department_id: string;
    province_id: string;

    constructor(id:number, name:string, department_id: string,  province_id: string){
        this.id = id;
        this.name = name;
        this.department_id = department_id;
        this.province_id = province_id;
    }
}

