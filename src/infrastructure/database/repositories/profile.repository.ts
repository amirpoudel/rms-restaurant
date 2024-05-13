import { IProfileRepository } from "../../../interfaces/IProfile";
import { Profile } from "../../../domain/entities/profile.entity";
import { ProfileModel } from "../models/profile.model";

export class ProfileRepository implements IProfileRepository{
    
    async createProfile(data: Profile): Promise<Profile> {
        return await ProfileModel.create(data);
    }

    
}