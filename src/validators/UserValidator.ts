import { body, query } from 'express-validator';
import User from '../models/User';


export class UserValidator {
    static signup() {
        return [body('username', 'Username is required').isString().custom((username, { req }) => {
            return User.findOne({ username: username }).then((user) => {
                if (user) {
                    throw new Error('username is alredy exist');
                } else {
                    return true;
                }
            })
        }),
        body('password', 'Password is Required').isAlphanumeric().isLength({ min: 8, max: 15 }).withMessage('Password should be Alphanumeric and between 8 to 15 characters'),
        body('firstName', 'First Name is Required').isString(),
        body('lastName', 'LastName is Required').isString(),
        body('mobile', 'Mobile Number is required').isNumeric()]
    };

    static login() {
        return [query('username', 'Username is Required').isString().custom((username, { req }) => {
            return User.findOne({ username: username }).then(user => {
                if (user) {
                    req.user = user;
                    return true;
                } else {
                    throw new Error('User does not Exist');
                };
            });
        }), query('password', 'Password is required').isAlphanumeric()]
    }
}