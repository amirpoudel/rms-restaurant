


export interface IKafkaProducer {
    produce(): Promise<void>;
}

export interface IKafkaConsume {
    consume(): Promise<void>;
}

