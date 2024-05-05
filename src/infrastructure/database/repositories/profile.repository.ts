import { Restaurant } from "../../../domain/entities/restaurant.entity";
import { IRestaurantRepository } from "../../../interfaces/IRestaurant";
import { ProfileModel } from "../models/profile.model";

export class RestaurantRepository implements IRestaurantRepository{

    constructor(private readonly model = ProfileModel){};

    async createRestaurant(data: Partial<Restaurant>): Promise<any> {
        try {
            const restaurant  = await this.model.create(data);
            return restaurant;    
        } catch (error) {
            throw error;
        }
        
    }
    async getRestaurants(data: any): Promise<any> {
       try {
        const restaurants = await this.model.find();
        return restaurants;
       } catch (error) {    
        throw error;
       }
    }
    async getRestaurantById(data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
}