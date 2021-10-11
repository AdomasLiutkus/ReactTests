export class Meetup {
    id: number;
    title: string; 
    address: string;
    image: string; 
    description: string;

    constructor(id: number, title: string, address: string, image: string, description: string) {
        this.id = id;
        this.title = title;
        this.address = address;
        this.image = image;
        this.description = description;
    }
}