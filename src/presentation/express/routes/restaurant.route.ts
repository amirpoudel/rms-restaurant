import { Router } from "express";
import { RestaurantRepository } from "../../../infrastructure/database/repositories/profile.repository";
import { RestaurantInteractor } from "../../../interactors/restaurant.interactor";
import { RestaurantController } from "../controllers/restaurant.controller";
import { KafkaProducer } from "../../../infrastructure/kafka/producer.kafka";
import { RestaurantValidation } from "../../../domain/application/validation/restaurant.validation";


const router = Router();

const repository = new RestaurantRepository();

const kafkaProducer = new KafkaProducer();
const validation = new RestaurantValidation();
const interactor = new RestaurantInteractor(repository,kafkaProducer,validation);

const restaurantController = new RestaurantController(interactor);

router.route("/").get(restaurantController.getRestaurants);
router.route("/register").post(restaurantController.createRestaurant)
                         


export default router;