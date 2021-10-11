export class MeetupData {
    title: string; 
    address: string;
    image: string; 
    description: string;

    constructor(title: string, address: string, image: string, description: string) {
        this.title = title;
        this.address = address;
        this.image = image;
        this.description = description;
    }
}