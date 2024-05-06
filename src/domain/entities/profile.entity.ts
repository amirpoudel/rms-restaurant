interface Address {
    country: string;
    province: string;
    district: string;
    municipality: string;
    ward: number;
    street: string;
    location: {
        type: string;
        coordinates: [number, number];
    };
}

interface Contact {
    phone: string[];
    email: string[];
}

interface OpeningHours {
    day: 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';
    open: string;
    close: string;
}

export interface Profile {
    name: string;
    description?: string;
    contact: Contact;
    address: Address;
    cuisine: string[];
    rating?: number;
    openingHours: OpeningHours[];
}
