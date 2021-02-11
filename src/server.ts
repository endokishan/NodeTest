import express from 'express';
import mongoose from 'mongoose';
import IndexRoutes from './routes/IndexRoutes';
import UserRoutes from './routes/UserRoutes';

export class Server {
    public app: express.Application = express();

    constructor() {
        // All configuration 
        this.setConfiguration();

        // All Routes
        this.setRoutes();

        //handle error
        this.handleError()
    };

    setConfiguration() {
        // Mongo Config
        this.connectMongo();

        // Express Bodyparser
        this.configBodyparser();
    };

    connectMongo() {
        const mongo_url = 'mongodb+srv://game:game@cluster0.xd96l.mongodb.net/game?retryWrites=true&w=majority'
        mongoose.connect(mongo_url, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }).then(() => {
            console.log('mongo is connected...')
        }).catch((err) => {
            console.log(err)
        });
    };

    configBodyparser() {
        this.app.use(express.urlencoded({ extended: true }));
    };

    setRoutes() {
        this.app.use('/', IndexRoutes);
        this.app.use('/api/user', UserRoutes);
    };

    handleError() {
        this.app.use((error, req, res, next) => {
            const errorStatus = req.errorStatus || 500;
            res.status(errorStatus).json({
                messege: error.message || 'Something Went Wrong, Please try Again',
                status_code: errorStatus
            });
        });
    };
};