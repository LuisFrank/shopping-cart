export class NotificationType {
    id: number;
    name: string;
    message: string;
    constructor(id:number, name:string, message:string){
        this.id = id;
        this.name = name;
        this.message = message;
    }
}
