
export interface IRestaurantInteractor{
    createRestaurant(data:any):Promise<any>;
    getAllRestaurants(data:any):Promise<any>;
    getRestaurantById(data:any):Promise<any>

}

export interface IRestaurantRepository {
    createRestaurant(data:any):Promise<any>;
    getAllRestaurants(data:any):Promise<any>;
    getRestaurantById(data:any):Promise<any>
}