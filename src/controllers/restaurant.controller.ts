
import { IRestaurantInteractor } from "../interfaces/IRestaurant";
import { AsyncHandler } from "../utils/error/asyncHandler";
import { Request,Response } from "express";

export class RestaurantController {

    private interactor:IRestaurantInteractor;

    constructor(interactor:IRestaurantInteractor){
        this.interactor = interactor;
    }

    createRestaurant = AsyncHandler.trycatch(async(req:Request,res:Response)=>{

        await this.interactor.createRestaurant(req.body);
        return res.status(200).json({message:'Restaurant created successfully'});

    })


}