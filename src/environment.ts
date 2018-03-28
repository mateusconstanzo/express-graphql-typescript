import { ConnectionOptions } from 'typeorm';

import { AuthorEntity } from './author'

export const BdConfig: ConnectionOptions = {
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [
        AuthorEntity
    ],
    synchronize: true
}