
import * as dotenv from 'dotenv';
dotenv.config();

const db_host = process.env.DB_HOST;
const db_port: number = parseInt( process.env.DB_PORT );
const db_username = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD ;
const db_database = process.env.DB_SCHEMA;
const orm_sync = true;

export class DataBaseConfig {
    constructor(
        readonly type: 'postgres' = 'postgres',
        readonly host: string = db_host,
        readonly port: number = db_port,
        readonly username: string = db_username,
        readonly password = db_password,
        readonly database = db_database,
        readonly sync = orm_sync,
    ) { }
}
