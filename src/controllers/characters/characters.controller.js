//ACA VA TODAS LAS INTERACIONES CON LA BD
import { getConnectionCharacters } from "../../databases/characters/characters.db";
const getCharacters = async(req, res) => {
    try {
        const connection = await getConnectionCharacters(); 
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