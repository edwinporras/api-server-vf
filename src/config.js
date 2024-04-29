import { config } from "dotenv";   

config();

export default {
    host: process.env.HOST || "",
    database_characters: process.env.DATABASE_CHARACTERS || "",
    database_auth: process.env.DATABASE_AUTH || "",
    database_world: process.env.DATABASE_WORLD || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || "",
}