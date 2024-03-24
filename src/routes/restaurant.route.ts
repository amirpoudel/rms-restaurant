import e, { Router } from "express";
import { RestaurantRepository } from "../repositories/restaurant.repository";
import { RestaurantInteractor } from "../interactors/restaurant.interactor";
import { RestaurantController } from "../controllers/restaurant.controller";


const router = Router();

const repository = new RestaurantRepository();
const interactor = new RestaurantInteractor(repository);

const restaurantController = new RestaurantController(interactor);

router.route("/").get(restaurantController.createRestaurant);


export default router;