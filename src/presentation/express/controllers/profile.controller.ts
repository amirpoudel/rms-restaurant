import { IProfileInteractor } from "../../../interfaces/IProfile";
import { AsyncHandler } from "../error/asyncHandler";



export class ProfileController {
    
        private interactor:IProfileInteractor;
    
        constructor(interactor:IProfileInteractor){
            this.interactor = interactor;
        }
    
        createProfile = AsyncHandler.trycatch(async(req:any,res:any)=>{
            
            const profile = await this.interactor.createProfile(req.body);
            return res.status(200).json({message:'Profile created successfully',data:profile});
    
        })
        
}