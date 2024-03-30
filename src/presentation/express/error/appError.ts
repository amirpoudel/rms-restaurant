
export class AppError extends Error{ 
    public readonly message: string;
    public readonly statusCode: number;
    public readonly status: string;
    public readonly isOperational: boolean;
  
    constructor(message: string, statusCode: number, status: string) {
        super();
      this.message = message;
      this.statusCode = statusCode;
      this.status = status;
  
      this.isOperational = true;
    }

    public static badRequest(message:string){
        return new AppError(message,400,'fail');
    }

    public static internalServerError(message:string){
        return new AppError(message,500,'error');
    }

    public static notFound(message:string){
        return new AppError(message,404,'fail');
    }

    public static invalidCredentials(message:string){
        return new AppError(message,401,'fail');
    }

}