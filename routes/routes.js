const express = require('express');
const router = express.Router();
const Bike = require('../models/bike');

router.get('/', async (req, res) => {
    res.json('Bienvendio a la tienda de bicis!');
});

// GET
    router.get('/bikes/:id', async (req, res) => {
        try {
            const bike = await Bike.findById(req.params.id);  
            res.json(bike);
        } catch (err) {
            res.status(400).json(err);
        }
    });

module.exports = router;