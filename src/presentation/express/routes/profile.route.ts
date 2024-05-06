import { Router } from "express";
import { ProfileInteractor } from "../../../interactors/profile.interactor";
import { ProfileController } from "../controllers/profile.controller";
import { ProfileRepository } from "../../../infrastructure/database/repositories/profile.repository";

const router = Router();

const repository = new ProfileRepository();
const interactor = new ProfileInteractor(repository);
const profileController = new ProfileController(interactor);

router.route("/").post(profileController.createProfile);


export default router;


