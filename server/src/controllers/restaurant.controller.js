export const getRestaurants = (req, res) => {
    const restaurants = [
        {
            id: 1,
            name: "Sahil's Restaurant",
            city: "Kolkata"
        },
        {
            id: 2,
            name: "Pizza World",
            city: "Toronto"
        }
    ];

    res.json(restaurants);
};