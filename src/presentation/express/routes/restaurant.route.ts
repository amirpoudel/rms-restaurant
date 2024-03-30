import { Router } from "express";
import { RestaurantRepository } from "../../../infrastructure/database/repositories/restaurant.repository";
import { RestaurantInteractor } from "../../../interactors/restaurant.interactor";
import { RestaurantController } from "../controllers/restaurant.controller";
import { KafkaProducer } from "../../../infrastructure/kafka/producer.kafka";


const router = Router();

const repository = new RestaurantRepository();
const kafkaProducer = new KafkaProducer();
const interactor = new RestaurantInteractor(repository,kafkaProducer);

const restaurantController = new RestaurantController(interactor);

router.route("/").get(restaurantController.createRestaurant);
router.route("/register").post(restaurantController.createRestaurant);


export default router;