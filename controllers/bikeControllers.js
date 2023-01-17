const express = require('express');
const router = express.Router();
const bikeRepository = require('../repositories/bikeRepository.js');
const storeRepository = require('../repositories/storeRepository.js');

// WELCOME
    router.get('/', async (req, res) => {
        res.json('Bienvendio a la tienda de bicis!');
    });

// GET
    async function getBikes(req, res){
        try {
            const bike = await bikeRepository.getBikes();  
            res.json(bike);
        } catch (err) {
            res.status(400).json({message: "No se encontró la bicileta"});
        }
    }

    async function filterBikesById(req, res){
        try {
            const bike = await bikeRepository.getBikeById(req.params.id);  
            res.json(bike);
        } catch (err) {
            res.status(400).json({message: "No se encontró la bicileta, compruebe que el id es correcto"});
        }
    }

    async function filterBikesByStore(req, res){
        bikeRepository.getBikesByStore({store: req.params.id}).then((bikes) => {
            res.status(200).json(bikes);
        }).catch((err) => {
            res.status(500).json({message: "Esta bicicltea no se ha encontrado en la tienda: " + req.params.id});
        });  
    }

// CREATE
    async function createBike(req, res){
        let store = storeRepository.getStoreById({_id:req.body.store});
        if(!store) {
            return res.status(404).json({message: "No se encontró la tienda"});
        } else {
            const newBike = bikeRepository.createBike(req.body);
            res.json(newBike);
        }
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