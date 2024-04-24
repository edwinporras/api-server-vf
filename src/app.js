import express from "express";
import morgan from "morgan";

//routes
import charactersRoutes from "./routes/characters/characters.routes";
import accountsRoutes from "./routes/accounts/accounts.routes";

const app = express();

//settings;
app.set("port", 4000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json())

//routes
app.use("/api/v1/characters", charactersRoutes);
app.use("/api/v1/accounts", accountsRoutes);

export default app;