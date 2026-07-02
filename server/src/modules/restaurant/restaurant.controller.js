import { getAllRestaurants } from "./restaurant.service.js";

export const getRestaurants = (req, res) => {
    const restaurants = getAllRestaurants();
    res.json(restaurants);
};