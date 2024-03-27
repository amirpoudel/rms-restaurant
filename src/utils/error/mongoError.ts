import { MongooseError } from "mongoose";
import { MongoServerError } from "mongodb";

const mongooseErrorHTTPStatusCodes = {
    "ValidationError": 400,
    "MongoServerError": 409
}

export class MongooseErrorHandler  {

    public statusCode:number;
    public message:string = "Internal server error";
    public error:any;
    public errors:any[] = [];
       
    constructor(err:MongooseError){
             console.log("calling the constructor of MongooseErrorHandler")
            this.statusCode = this.getStatusCode(err);
            this.error = err.name;    
        }

       private getStatusCode(err:MongooseError):number{
            let statusCode = mongooseErrorHTTPStatusCodes[err.name as keyof typeof mongooseErrorHTTPStatusCodes];
            if(!statusCode){
                statusCode = 500;
            }
            return statusCode; 
       }
}

export class MongoServerErrorHandler{
    public statusCode:number;
    public message:string = "Internal server error";
    public error:any;
    public errors:any[] = [];
    constructor(err:MongoServerError){
        console.log("calling the constructor of MongoServerErrorHandler")
        this.statusCode = this.getStatusCode(err);
        this.error = err.code;
    }

    private getStatusCode(err:MongoServerError):number{
        let statusCode;
        if(!statusCode){
            statusCode = 500;
        }
        return statusCode;
    }

}