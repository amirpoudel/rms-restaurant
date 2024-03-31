import { IRestaurantValidation } from '../../../interfaces/IRestaurant';
import { z } from 'zod';

export class RestaurantValidation implements IRestaurantValidation {
   
    private restaurantSchema = z.object({
        name: z.string().min(4,{
            message: 'Name should be atleast 4 characters long'
        }).max(255,{
            message: 'Name should not exceed 255 characters'
        }), 
        username: z.string().min(6).max(50), 
        restaurantType: z.string().min(1).max(255),
        description: z.string().min(6).max(200).optional(), 
        profileImage: z.string().optional(),
        coverImage: z.string().optional(), 
        contact: z
            .object({
                phone: z.array(z.string()),
                email: z.array(z.string().email({ message: 'Invalid email' })),
            })
            .optional(), 
        address: z.object({
            country: z.string().min(1).max(255),
            province: z.string().min(1).max(255), 
            district: z.string().min(1).max(255), 
            municipality: z.string().min(1).max(255), 
            ward: z.number(), 
            street: z.string().min(1).max(255), 
            pincode: z.string().min(6).max(20), 
            location: z.object({
                type: z.literal('Point'), 
                coordinates: z.array(z.number()), 
            }),
        }).optional(),
    });

    validate(data: any): void {
        try {
            // Validate input data against the schema
            const validatedData = this.restaurantSchema.parse(data);
            // Validation successful
        } catch (error) {
            // Validation failed - later we can throw a custom error
            throw new Error('Validation error: ' + error);

        }
    }
}
