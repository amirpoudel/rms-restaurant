import { ZodError } from "zod";

export class AppError extends Error{ 
    public readonly message: string;
    public readonly statusCode: number;
    public readonly status: string;
    public readonly error: any | null;
    public readonly errors: any[] | null;
    public readonly isOperational: boolean;
  
    constructor(statusCode: number,message: string,error:any,errors:any[],status: string,isOperational:boolean) {
        super();
      this.message = message;
      this.error = error;
      this.errors = errors;
      this.statusCode = statusCode;
      this.status = status;
      this.isOperational = true;
    }
    public static zodError(message:string,error:any,errors:any[]=[],isOperational:boolean=true){
        //handle zod error case
        return new AppError(400,message,"Validation Error",error.issues,'fail',isOperational);
    }
    public static badRequest(message:string,error:any,errors:any[] = [],isOperational:boolean) {
        return new AppError(400,message,error,errors,'fail',isOperational);
    }
    public static internalServerError(message:string){
        return new AppError(500,message,'error',[],"fail",true);
    }

    public static notFound(message:string){
        return new AppError(404,message,"",[],'fail',true);
    }

    public static invalidCredentials(message:string){
        return new AppError(401,message,"",[],'fail',true);
    }

    public static unauthorized(message:string){
        return new AppError(403,message,"",[],'fail',true);
    }

}