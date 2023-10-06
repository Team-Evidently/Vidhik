import express from "express";
import { registerController, loginController } from "../controllers";
import errorHandler from "../middlewares/errorHandler";
const Router = express.Router();

Router.use(errorHandler);

Router.post("/api/register/user", [], registerController.registerUser);
Router.post("/api/register/lsp", [], registerController.registerLSP);
Router.post("/api/login/user", [], loginController.loginUser)

export default Router;
