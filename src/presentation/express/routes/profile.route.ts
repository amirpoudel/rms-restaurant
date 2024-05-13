import { Router } from "express";
import { ProfileInteractor } from "../../../interactors/profile.interactor";
import { ProfileController } from "../controllers/profile.controller";
import { ProfileRepository } from "../../../infrastructure/database/repositories/profile.repository";
import { ProfileApplication } from "../../../domain/application/profile.application";

const router = Router();

const repository = new ProfileRepository();
const application = new ProfileApplication();
const interactor = new ProfileInteractor(repository,application);
const profileController = new ProfileController(interactor);

router.route("/").post(profileController.createProfile);


export default router;


