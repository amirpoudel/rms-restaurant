import dotenv from 'dotenv';
dotenv.config({path:'./.env'});

import app from './app';

// kafka init
import { KafkaAdmin } from './config/kafka/kafka.config';
KafkaAdmin.kafkaInit();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
 
    console.log(`Server is running at Port ${PORT}`);
  });


