import * as express from 'express';
import * as dotenv from "dotenv"
import * as GraphQLHTTP from 'express-graphql';
import { Server } from 'http';
import { createConnection, Connection } from "typeorm"

dotenv.config();

import { schema } from './graphql/shema'
import { BdConfig } from "./environment";


class App {

    public express: express.Application;
    public server: Server;
    public port = process.env.PORT || 3000;
    public connection: Connection;

    constructor() {

        this.express = express();

        this.createConnection();

        this.server = this.express.listen(this.port);

        this.graphql();

    }

    private createConnection() {

        createConnection(BdConfig).then(async connection => {

            console.log("Connected to DB");
            this.connection = connection;

        }).catch(error => console.log("TypeORM connection error: ", error));

    }

    private graphql() {

        this.express.use('/graphql', GraphQLHTTP({
            schema: schema,
            graphiql: true,
        }));

    }

}

export default new App();