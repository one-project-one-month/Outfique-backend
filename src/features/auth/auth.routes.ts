import { Router } from "express";
import { AuthController } from "./auth.controller";

const router = Router();

router.post("/signup", AuthController.signup);
router.post("/login", AuthController.login);
router.post("/logout", AuthController.signout);
router.get('/login/social',AuthController.socialSignIn)


export default router