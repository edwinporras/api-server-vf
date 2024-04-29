import mysql from "promise-mysql";
import config from "../../config";

const connectionWorld = mysql.createConnection({
    host: config.host,
    database: config.database_world,
    user: config.user,
    password: config.password
})

const getConnectionWorld = () => {
    return connectionWorld;
}

module.exports = {
    getConnectionWorld
}