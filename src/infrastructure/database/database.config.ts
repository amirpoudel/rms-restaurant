import mongoose from "mongoose";



export class MongoDBConfig{
    private connectionURL:string
    constructor(){
        this.connectionURL = process.env.MONGO_URL || 'mongodb://localhost:27017/restaurant';

    }
    public async connect(){
        try {
            const connection = await mongoose.connect(this.connectionURL);
            console.log("Database connected to ",connection.connection.host)
        } catch (error) {
            process.exit(1);
        }
    }
}



