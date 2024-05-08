import {z} from 'zod';
import { IProfileValidation } from '../../../interfaces/IProfile';
import { Profile } from '../../entities/profile.entity';

export class ProfileValidation implements IProfileValidation{

    private AddressSchema = z.object({
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
    private ContactSchema = z.object({
        phone: z.array(z.string()),
        email: z.array(z.string())
    });
    
    // Define schema for OpeningHours interface
    private OpeningHoursSchema = z.object({
        day: z.enum(['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']),
        open: z.string(),
        close: z.string()
    });
    
    // Define schema for Profile interface
    private  ProfileSchema = z.object({
        name: z.string(),
        description: z.string().optional(),
        contact: this.ContactSchema,
        address: this.AddressSchema,
        cuisine: z.array(z.string()),
        rating: z.number().optional(),
        openingHours: z.array(this.OpeningHoursSchema)
    });
    
    validate(data: Profile): boolean {
        try {
            const validatedData = this.ProfileSchema.parse(data);
            console.log("This is validate Data: ",validatedData);
            return true;
        } catch (error) {
            throw new Error('Validation error: ' + error);
        }
    }   

}