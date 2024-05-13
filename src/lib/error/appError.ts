export class AppError extends Error{ 
    public readonly message: string;
    public readonly statusCode: number;
    public readonly status: string;
    public readonly error: any | null;
    public readonly errors: any[] | null;
    public readonly isOperational: boolean;
  
    constructor(statusCode: number,error:any,errors:any[],message: string,status: string,isOperational:boolean) {
        super();
      this.message = message;
      this.error = error;
      this.errors = errors;
      this.statusCode = statusCode;
      this.status = status;
  
      this.isOperational = true;
    }

    public static badRequest(message:string,error:any,errors:any[] = [],isOperational:boolean) {
        return new AppError(400,error,errors,message,'fail',isOperational);
    }
    public static internalServerError(message:string){
        return new AppError(500,"",[],message,'error',true);
    }

    public static notFound(message:string){
        return new AppError(404,"",[],message,'fail',true);
    }

    public static invalidCredentials(message:string){
        return new AppError(401,"",[],message,'fail',true);
    }

    public static unauthorized(message:string){
        return new AppError(403,"",[],message,'fail',true);
    }

}