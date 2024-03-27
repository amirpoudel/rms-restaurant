import { KafkaConfig } from "../../config/kafka/kafka.config";
import { IKafkaProducer } from "../../interfaces/IKafka";


export class KafkaProducer implements IKafkaProducer {
    private producer;
    private kafka;

    constructor(){
        this.kafka  = new KafkaConfig().kafka;
        this.producer = this.kafka.producer();
    }

    public async produce(){
        console.log('Connecting to Kafka...');
        await this.producer.connect();
        console.log('Connected to Kafka');
        console.log('Producing messages...');
        await this.producer.send({
            topic: 'restaurant',
            messages: [
                {
                    key: 'restaurant-registration',
                    value:JSON.stringify({
                        restaurantId: '1',
                        name: 'KFC',
                        location: 'kathmandu',
                    })
                    
                }
            ],
        })
        console.log('Messages produced');
        console.log('Disconnecting...')
        await this.producer.disconnect();
    }





}