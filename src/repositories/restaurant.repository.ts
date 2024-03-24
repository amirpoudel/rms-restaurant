import { IRestaurantRepository } from "../interfaces/IRestaurant";
import { RestaurantModel } from "../models/restaurant.model";

export class RestaurantRepository implements IRestaurantRepository{

    constructor(private readonly model = RestaurantModel){};

    async createRestaurant(data: any): Promise<any> {
        try {
            const restaurant  = await this.model.create(data);
            return restaurant;    
        } catch (error) {
            throw error;
        }
        
    }
    async getAllRestaurants(data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async getRestaurantById(data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
}