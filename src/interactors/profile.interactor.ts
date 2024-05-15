import { Profile } from "../domain/entities/profile.entity";
import { IProfileApplication, IProfileInteractor, IProfileRepository } from "../interfaces/IProfile";    
import { AppError } from "../lib/error/appError";


export class ProfileInteractor implements IProfileInteractor{

    private repository:IProfileRepository;
    private application:IProfileApplication;
    
    constructor(repository:IProfileRepository,application:IProfileApplication){
        this.repository = repository;
        this.application = application;
    }

    async createProfile(data: Profile): Promise<Profile> {
        //validate schema
        try {
            this.application.validateSchema(data)
            return await this.repository.createProfile(data);
        } catch (error) {
            throw error;
        }
    }


}