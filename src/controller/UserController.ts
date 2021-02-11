import Bcrypt from 'bcrypt';
import User from '../models/User';

export class UserController {
    static async signup(req, res, next) {
        const username = req.body.username;
        const password = req.body.password;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const mobile = req.body.mobile;

        try {
            let hashpassword = await Bcrypt.hash(password, 10);
            const data = {
                username, firstName, lastName, mobile, password: hashpassword
            };

            let user = await new User(data).save();
            res.send(user);
        } catch (e) {
            next(e);
        }
    }

    static async login(req, res, next) {
        const password = req.query.password;
        const user = req.user;

        try {
            const match = await Bcrypt.compare(password, user.password);
            if (!match) {
                res.json({
                    message : 'User and Password does not match'
                })
            } else {
                res.json({
                    user: user
                });
            }

        } catch (e) {
            next(e);
        };
    }
}