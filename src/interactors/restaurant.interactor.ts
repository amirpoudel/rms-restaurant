import { IKafkaProducer } from "../interfaces/IKafka";
import { IRestaurantInteractor, IRestaurantRepository } from "../interfaces/IRestaurant";

export class RestaurantInteractor implements IRestaurantInteractor{
    
    private repository:IRestaurantRepository;
    private kafkaProducer:IKafkaProducer;
    constructor(repository:IRestaurantRepository,kafkaProducer:IKafkaProducer){
        this.repository = repository;
        this.kafkaProducer = kafkaProducer;
    }

    async createRestaurant(data: any): Promise<any> {
        try {
            //const restaurant  = await this.repository.createRestaurant(data);
            //produce message to kafka
            await this.kafkaProducer.produce();
            console.log('Produced message to kafka');
            //return restaurant;    
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