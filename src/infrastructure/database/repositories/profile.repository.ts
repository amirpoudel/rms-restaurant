import { IProfileRepository } from "../../../interfaces/IProfile";
import { Profile } from "../../../domain/entities/profile.entity";

export class ProfileRepository implements IProfileRepository{
    
    async createProfile(data: Profile): Promise<Profile> {
        throw new Error("Method not implemented.");
    }

    
}