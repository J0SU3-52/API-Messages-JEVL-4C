import * as mysql from 'mysql2/promise';
import "dotenv/config"

const access: mysql.ConnectionOptions = {
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    //host: process.env.DB_HOST,
    localAddress: "127.0.0.1",
    port: 3306,
};

const conn = mysql.createConnection(access);

export default conn;