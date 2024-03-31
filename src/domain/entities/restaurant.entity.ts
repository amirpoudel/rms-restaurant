import { v4 as uuidv4 } from 'uuid';

interface Contact {
    phone: string[];
    email: string[];
}

interface Address {
    country: string;
    province: string;
    district: string;
    municipality: string;
    ward: number;
    street: string;
    pincode: string;
    location: {
        type: string;
        coordinates: number[];
    };
}

export class Restaurant {
    id: string;
    name: string;
    username: string;
    restaurantType: string;
    description?: string;
    profileImage?: string;
    coverImage?: string;
    contact?: Contact;
    address?: Address;
    createdAt: Date;
    updatedAt: Date;

    constructor(data:{
        name: string,
        username: string,
        restaurantType: string,
        description?: string,
        profileImage?: string,
        coverImage?: string,
        contact?: Contact,
        address?: Address       
    }) {
        this.id = uuidv4();
        this.name = data.name;
        this.username =  data.username;
        this.restaurantType =  data.restaurantType;
        this.description =  data.description;
        this.profileImage =  data.profileImage;
        this.coverImage =  data.coverImage;
        this.contact =  data.contact;
        this.address =  data.address;
        const currentDate = new Date();
        this.createdAt = currentDate;
        this.updatedAt = currentDate;
        this.validate();
    }

    private validate(): void {
        if (!this.name || !this.username || !this.restaurantType) {
            throw new Error('Restaurant data is invalid');
        }
    }
}
