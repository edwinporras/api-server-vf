import mysql from "promise-mysql";
import config from "../../config";

const connectionAuth = mysql.createConnection({
    host: config.host,
    database: config.database_auth,
    user: config.user,
    password: config.password
})
const getConnectionAuth = () => {
    return connectionAuth;
}

module.exports = {
    getConnectionAuth
}