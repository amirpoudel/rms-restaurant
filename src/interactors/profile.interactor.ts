import { Profile } from "../domain/entities/profile.entity";
import { IProfileApplication, IProfileInteractor, IProfileRepository } from "../interfaces/IProfile";    


export class ProfileInteractor implements IProfileInteractor{

    private repository:IProfileRepository;
    private application:IProfileApplication;
    
    constructor(repository:IProfileRepository,application:IProfileApplication){
        this.repository = repository;
        this.application = application;
    }

    async createProfile(data: Profile): Promise<Profile> {
        //validate schema
        const isValid = this.application.validateSchema(data)
        console.log(isValid)
        if(!isValid){
           
        }
        return await this.repository.createProfile(data);
    }


}