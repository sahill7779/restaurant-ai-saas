import express from "express";
import { getRestaurants } from "./restaurant.controller.js";

const router = express.Router();

router.get("/", getRestaurants);

export default router;