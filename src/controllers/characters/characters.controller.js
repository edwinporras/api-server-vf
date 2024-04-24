//ACA VA TODAS LAS INTERACIONES CON LA BD
import { getConnection } from "../../databases/database";
const getCharacters = async(req, res) => {
    try {
        const connection = await getConnection(); 
        const result = await connection.query("SELECT * FROM characters");
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


export const methods = {
    getCharacters
}