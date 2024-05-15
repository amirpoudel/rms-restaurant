
import { IProfileApplication } from "../../interfaces/IProfile";
import { AppError } from "../../lib/error/appError";
import { Profile } from "../entities/profile.entity";
import { ProfileSchema } from "../schemas/profile.schema";

export class ProfileApplication implements IProfileApplication{
 
    private profileSchemaValidation
   constructor() {
        this.profileSchemaValidation = ProfileSchema;
    
   }
    validateSchema(data: Profile): void {
        try {
            this.profileSchemaValidation.parse(data);
        } catch (error) {
            throw  AppError.zodError("Invalid Profile Data",error,[],true);
        }
    }

    

}