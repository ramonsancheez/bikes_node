const express = require('express');
const router = express.Router();
const Bike = require('../models/bike');

// WELCOME
    router.get('/', async (req, res) => {
        res.json('Bienvendio a la tienda de bicis!');
    });

// GET
    router.get('/bikes', async (req, res) => {
        try {
            const bike = await Bike.find();  
            res.json(bike);
        } catch (err) {
            res.status(400).json(err);
        }
    });
    router.get('/bikes/:id', async (req, res) => {
        try {
            const bike = await Bike.findById(req.params.id);  
            res.json(bike);
        } catch (err) {
            res.status(400).json(err);
        }
    });

// CREATE
    router.post('/bikes', async (req, res) => {
        try {
            const newBike = new Bike({
                name: req.body.name,
                brand: req.body.brand,
                model: req.body.model,
                price: req.body.price,
                category: req.body.category
            });
            await newBike.save();
            res.status(201).send(newBike);
        } catch (error) {
            res.status(500).send(error);
        }
    });

// UPDATE
    router.put('/bikes/:id', async (req, res) => {
        try {
            const bike = await Bike.findByIdAndUpdate(req.params.id, {name:req.body.name}, {new: true});
            if (!bike) {
                return res.status(404).send();
            }
            res.send(bike);
        } catch (error) {
        res.status(400).send(error);
        }
    }); 

// DELETE
    router.delete('/bikes/:id', async (req, res) => {
        try {
            const deletedBike = await Bike.findByIdAndDelete(req.params.id);
            res.json(deletedBike);
        } catch (err) {
            res.status(400).json(err);
        }
    });

module.exports = router;