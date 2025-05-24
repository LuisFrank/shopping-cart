export class Product {
    id:number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    points: number;
    provider: string;

    constructor(id = 0,
                name = '', 
                description = '',
                price = 0, 
                imageUrl = '',
                points = 0,
                provider = ''
                ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
        this.points = points;
        this.provider = provider;
    }
}
