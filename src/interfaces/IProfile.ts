import { Profile } from "../domain/entities/profile.entity"

export interface IProfileInteractor{
    
    createProfile(data:any):Promise<any>
    

}
export interface IProfileRepository {

    createProfile(data:Profile):Promise<Profile>
    
}



export interface IProfileApplication{
    validateSchema(data:Profile):boolean
}

