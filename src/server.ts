import dotenv from 'dotenv';
dotenv.config({path:'./.env'});

import app from './presentation/express/app';

// kafka init
import { KafkaAdmin } from './config/kafka/kafka.config';

//db init 
import { MongoDBConfig } from './infrastructure/database/database.config';
const db = new MongoDBConfig();
db.connect()


//KafkaAdmin.kafkaInit();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
 
    console.log(`Server is running at Port ${PORT}`);
  });


