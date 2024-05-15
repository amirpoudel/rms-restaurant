import {Request,Response,Errback} from 'express';


import { MongooseError } from 'mongoose';
import { MongoServerErrorHandler, MongooseErrorHandler } from './mongoError';

import { MongoServerError } from "mongodb";
import { ZodError, array } from 'zod';
import { AppError } from '../../../lib/error/appError';




export class ErrorHandler{
 

    public static expressErrorHandler(err:any,req:Request,res:Response){
        let apiError ;

        //console.log(err);
        
        console.log(err instanceof MongooseError);
        console.log(err instanceof ZodError)
        console.log(err instanceof AppError)
        console.log(err?.error instanceof ZodError)
        
        if(err instanceof MongooseError){
          apiError = new MongooseErrorHandler(err);
        }
        if(err instanceof MongoServerError){
            apiError = new MongoServerErrorHandler(err);
        }

        return res.status(err.statusCode || 500).json({
            success:false,
            message:err.message || "Internal server error",
            error:err.error || "Error Not Found",
            errors:err.errors || []
        })
    }
}

