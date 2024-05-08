import { z } from 'zod';

// Define schema for Address interface
const AddressSchema = z.object({
    country: z.string(),
    province: z.string(),
    district: z.string(),
    municipality: z.string(),
    ward: z.number(),
    street: z.string(),
    location: z.object({
        type: z.string(),
        coordinates: z.tuple([z.number(), z.number()])
    })
});

// Define schema for Contact interface
const ContactSchema = z.object({
    phone: z.array(z.string()),
    email: z.array(z.string())
});

// Define schema for OpeningHours interface
const OpeningHoursSchema = z.object({
    day: z.enum(['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']),
    open: z.string(),
    close: z.string()
});

// Define schema for Profile interface
export const ProfileSchema = z.object({
    name: z.string(),
    description: z.string().optional(),
    contact: ContactSchema,
    address: AddressSchema,
    cuisine: z.array(z.string()),
    rating: z.number().optional(),
    openingHours: z.array(OpeningHoursSchema)
});