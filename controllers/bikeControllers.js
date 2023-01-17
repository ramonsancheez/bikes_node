const express = require('express');
const router = express.Router();
const Bike = require('../models/bike.model.js.js');
const Store = require('../models/store.model.js');

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
            res.status(400).json({message: "No se encontró la bicileta"});
        }
    }

    async function filterBikesById(req, res){
        try {
            const bike = await Bike.findById(req.params.id);  
            res.json(bike);
        } catch (err) {
            res.status(400).json({message: "No se encontró la bicileta, compruebe que el id es correcto"});
        }
    }

    async function filterBikesByStore(req, res){
        Bike.find({store: req.params.id}).then((bikes) => {
            res.status(200).json(bikes);
        }).catch((err) => {
            res.status(500).json({message: "Esta bicicltea no se ha encontrado en la tienda: " + req.params.id});
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
                availability: req.body.availability,
                store: req.body.store
            });
            newBike.save().then(()=>{
                res.status(201).json({message: "Bicicleta creada: " + newBike});
            }).catch((err)=>{
                res.status(500).json({message: "Error al crear bicicleta"});
            });
        }).catch((err)=>{
            res.status(500).json({message: "Error al buscar tienda"});
        });
    }

// UPDATE
    async function updateBike(req, res) {
        try {
            const bike = await Bike.findByIdAndUpdate(req.params.id, {name:req.body.name}, {new: true});
            if (!bike) {
                return res.status(404).json();
            }
            res.json(bike);
        } catch (error) {
            res.status(400).json(error);
        }
    } 

    async function updateAvailability(req, res) {
        try {
            const availabilityUpdated = await Bike.findByIdAndUpdate(req.params.id, {availability:req.body.availability}, {new: true});
            if (!availabilityUpdated) {
                return res.status(500).json({message: "No se encontró la bicicleta"});
            }
            res.json({message:"La bicicleta actualizada es: " + availabilityUpdated});
        } catch (error) {
            res.status(400).json(error);
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

    async function deleteAllBikes(req, res) {
        Bike.deleteMany().then(() => {
            res.status(200).json({message: "Se borraron todas las bicicletas"})
        }).catch((err) =>{
            res.status(500).json({message: "Error al eliminar todas las bicicletas"})
        });
    }     

module.exports = {
    getBikes,
    deleteAllBikes,
    updateAvailability,
    createBike,
    filterBikesById,
    updateBike,
    filterBikesByStore,
    deleteBike,
}