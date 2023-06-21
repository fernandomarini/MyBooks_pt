export class Book {

    public title: string
    public type: string
    public author: string
    public price: number
    public photo: string
    public id_book: number
    public id_user: number

    constructor(    title: string,                    
                    author: string,
                    type: string,                    
                    photo: string,
                    price: number,
                    id_book: number = 0,
                    id_user: number = 0 ){

        this.title = title;
        this.type = type;
        this.author = author;
        this.price = price;
        this.photo = photo;
        this.id_book = id_book;
        this.id_user = id_user;
                                
    };
};
