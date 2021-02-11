import { Router } from "express";
import { IndexController } from "../controller/IndexController";

class Index {
    public router : Router;

    constructor() {
        this.router = Router();

        this.getRoutes();
    };

    getRoutes() {
        this.router.get('/', IndexController.index);
    }
}

export default new Index().router;