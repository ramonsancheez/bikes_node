const express = require('express');
const router = express.Router();
const {Store, Bike} = require('../models/Store-Bike');

// WELCOME
    router.get('/', async (req, res) => {
        res.json('Bienvendio a la tienda de bicis!');
    });

// GET
    async function getBikes(req, res){
        try {
            const bike = await Bike.find();  
            res.json(bike);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    async function filterBikesById(req, res){
        try {
            const bike = await Bike.findById(req.params.id);  
            res.json(bike);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    async function filterBikesByStore(req, res){
        Bike.find({store: req.params.id}).then((bikes) => {
            res.status(200).json(bikes);
        }).catch((err) => {
            res.status(500).json({message: 'Error al buscar bicicletas'});
        });  
    }

// CREATE
    async function createBike(req, res){
        Store.findOne({_id:req.body.store}).then((store)=>{
            const newBike = new Bike({
                name: req.body.name,
                brand: req.body.brand,
                model: req.body.model,
                price: req.body.price,
                category: req.body.category,
                store: req.body.store
            });
            newBike.save().then(()=>{
                res.status(201).json({message: 'Bicicleta creada'});
            }).catch((err)=>{
                res.status(500).json({message: 'Error al crear bicicleta'});
            });
        }).catch((err)=>{
            res.status(500).json({message: 'Error al buscar tienda'});
        });
    }

    async function createStore(req, res){
        try {
            const newStore = new Store({
                name: req.body.name,
                address: req.body.address
            });
            await newStore.save();
            res.status(201).send(newStore);
        } catch (error) {
            res.status(500).send(error);
        }
    }

// UPDATE
    async function updateBike(req, res) {
        try {
            const bike = await Bike.findByIdAndUpdate(req.params.id, {name:req.body.name}, {new: true});
            if (!bike) {
                return res.status(404).send();
            }
            res.send(bike);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    async function updateStore(req, res) {
        try {
            const store = await Store.findByIdAndUpdate(req.params.id, {name:req.body.name}, {new: true});
            if (!store) {
                return res.status(404).send();
            }
            res.send(store);
        } catch (error) {
            res.status(400).send(error);
        }
    } 

// DELETE
    async function deleteBike(req, res) {
        try {
            const deletedBike = await Bike.findByIdAndDelete(req.params.id);
            res.json(deletedBike);
        } catch (err) {
            res.status(400).json(err);
        }

    }

    async function deleteStore(req, res) {
        Bike.deleteMany({store: req.params.id}).then(()=>{
            Store.deleteOne({_id: req.params.id}).then(()=>{
                res.status(200).json({message: 'Tienda y bicicletas asociadas eliminadas'});
            }).catch((err)=>{
                res.status(500).json({message: 'Error al eliminar tienda'});
            });
        }).catch((err)=>{
            res.status(500).json({message: 'Error al eliminar bicicletas'});
        });
    }      

module.exports = {
    getBikes,
    createStore,
    createBike,
    filterBikesById,
    updateBike,
    updateStore,
    filterBikesByStore,
    deleteBike,
    deleteStore,
}