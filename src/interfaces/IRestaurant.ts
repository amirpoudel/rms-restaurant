
export interface IRestaurantInteractor{
    createRestaurant(data:any):Promise<any>;
    getRestaurants(data:any):Promise<any>;
    getRestaurantById(data:any):Promise<any>
}

export interface IRestaurantRepository {
    createRestaurant(data:any):Promise<any>;
    getRestaurants(data:any):Promise<any>;
    getRestaurantById(data:any):Promise<any>
}


export interface IRestaurantValidation{
    validate(data:any):void;
}