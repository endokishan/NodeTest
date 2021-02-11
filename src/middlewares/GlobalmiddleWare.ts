import { validationResult } from "express-validator";

export class GlobalmiddleWare {
    static checkError(req, res, next) {
        const error = validationResult(req);

        if (!error.isEmpty()) {
            next(new Error(error.array()[0].msg));
        } else {
            next();
        };
    };
}