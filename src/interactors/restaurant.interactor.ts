import { Restaurant } from "../domain/entities/restaurant.entity";
import { IKafkaProducer } from "../interfaces/IKafka";
import { IRestaurantInteractor, IRestaurantRepository, IRestaurantValidation } from "../interfaces/IRestaurant";

export class RestaurantInteractor implements IRestaurantInteractor{
    
    private repository:IRestaurantRepository;
    private kafkaProducer:IKafkaProducer;
    private validation:IRestaurantValidation;
    constructor(repository:IRestaurantRepository,kafkaProducer:IKafkaProducer,validation:IRestaurantValidation){
        this.repository = repository;
        this.kafkaProducer = kafkaProducer;
        this.validation = validation
    }

    async createRestaurant(data:Restaurant): Promise<Restaurant> {

        try {
            //before creating the restaurant, validate the data
            this.validation.validate(data);
            const  restaurant = new Restaurant(data);
            const response   = await this.repository.createRestaurant(restaurant);
            //produce message to kafka
            await this.kafkaProducer.produce();
            console.log('Produced message to kafka');
            return response;
        } catch (error) {
            throw error;
        }
        
    }
    async getRestaurants(data: any): Promise<any> {
        try {
            const response = await this.repository.getRestaurants(data);
            return response;
        } catch (error) {
            throw error;
        }
    }
    async getRestaurantById(data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
}