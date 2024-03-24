import { IRestaurantInteractor, IRestaurantRepository } from "../interfaces/IRestaurant";

export class RestaurantInteractor implements IRestaurantInteractor{
    
    private repository:IRestaurantRepository;
    constructor(repository:IRestaurantRepository){
        this.repository = repository;
    }

    async createRestaurant(data: any): Promise<any> {
        try {
            const restaurant  = await this.repository.createRestaurant(data);
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