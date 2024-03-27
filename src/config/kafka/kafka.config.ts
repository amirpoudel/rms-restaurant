import { Kafka } from 'kafkajs'

export class KafkaConfig {
     
    public kafka;

    constructor(){
        this.kafka = new Kafka({
            clientId: 'rms-kafka',
            brokers: ['127.0.0.1:9092']
        })
    }

}

export class KafkaAdmin{

    public static async kafkaInit(){
        const admin = await new KafkaConfig().kafka.admin();
        console.log('Connecting to Kafka...');
        await admin.connect();
        console.log('Connected to Kafka');
        console.log('Creating topics...')
        await admin.createTopics({
            topics: [{
                topic: 'restaurant',
                numPartitions: 2
            }]
        })
        console.log('Topics created');
        console.log('Disconnecting...')
        await admin.disconnect();
    }

}

