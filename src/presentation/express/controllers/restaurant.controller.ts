
import { IRestaurantInteractor } from "../../../interfaces/IRestaurant";
import { AsyncHandler } from "../error/asyncHandler";
import { Request,Response } from "express";

export class RestaurantController {

    private interactor:IRestaurantInteractor;

    constructor(interactor:IRestaurantInteractor){
        this.interactor = interactor;
    }

    createRestaurant = AsyncHandler.trycatch(async(req:Request,res:Response)=>{
        const restaurant = await this.interactor.createRestaurant(req.body);
        return res.status(200).json({message:'Restaurant created successfully',data:restaurant});

    })

    getRestaurants = AsyncHandler.trycatch(async(req:Request,res:Response)=>{
        const restaurant = await this.interactor.getRestaurants(req.body);
        return res.status(200).json({message:'Restaurants fetched successfully',data:restaurant});
        
    })

    


}