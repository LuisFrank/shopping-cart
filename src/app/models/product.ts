export class Product {
    id:number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id = 0,
                name = '', 
                description = '',
                price = 0, 
                imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/1969_Ford_Mustang_Mach_1_%2837901276352%29.jpg/800px-1969_Ford_Mustang_Mach_1_%2837901276352%29.jpg'
                ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}
