import { Router } from "express";
import { UserController } from "../controller/UserController";
import { GlobalmiddleWare } from "../middlewares/GlobalmiddleWare";
import { UserValidator } from "../validators/UserValidator";

class UserRoutes {
    public router : Router;

    constructor() {
        this.router = Router();

        this.getRoutes();

        this.postRoutes();
    };

    getRoutes() {
        this.router.get('/login', UserValidator.login(), GlobalmiddleWare.checkError, UserController.login)
    };

    postRoutes() {
        this.router.post('/signup', UserValidator.signup(), GlobalmiddleWare.checkError, UserController.signup)
    };
};

export default new UserRoutes().router;