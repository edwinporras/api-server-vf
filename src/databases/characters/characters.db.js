import mysql from "promise-mysql";
import config from "../../config";

const connectionCharacter = mysql.createConnection({
    host: config.host,
    database: config.database_characters,
    user: config.user,
    password: config.password
})

const getConnectionCharacters = () => {
    return connectionCharacter;
}


module.exports = {
    getConnectionCharacters
}