import { Profile } from "../domain/entities/profile.entity";
import { IProfileInteractor, IProfileRepository } from "../interfaces/IProfile";    


export class ProfileInteractor implements IProfileInteractor{

    private repository:IProfileRepository;
    
    constructor(repository:IProfileRepository){
        this.repository = repository;
    }

    async createProfile(data: Profile): Promise<Profile> {
        throw new Error("Method not implemented.");
    }


}