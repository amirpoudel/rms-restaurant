import {Request,Response,Errback} from 'express';


import { MongooseError } from 'mongoose';
import { MongoServerErrorHandler, MongooseErrorHandler } from './mongoError';

import { MongoServerError } from "mongodb";




export class ErrorHandler{
 

    public static expressErrorHandler(err:any,req:Request,res:Response){
        let apiError ;

        console.log(err);
        console.log(err instanceof MongooseError);
        
        if(err instanceof MongooseError){
          apiError = new MongooseErrorHandler(err);
        }
        if(err instanceof MongoServerError){
            apiError = new MongoServerErrorHandler(err);
        }
        
        return res.status(apiError?.statusCode || 500).json({
            success: false,
            message: apiError?.message || "Internal server error",
            error: apiError?.error || null,
            errors: apiError?.errors || [],
        })
    }
}

