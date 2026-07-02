import express from "express";
import restaurantRoutes from "./routes/restaurant.routes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to AI Restaurant Employee API 🚀"
    });
});

app.use("/restaurants", restaurantRoutes);

export default app;