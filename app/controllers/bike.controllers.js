const express = require('express');
const router = express.Router();
const bikeRepository = require('../repositories/bike.repository.js');
const storeRepository = require('../repositories/store.repository.js');

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

// CREATE
    async function createBike(req, res) {
        try {
            const store = await storeRepository.getStoreById(req.body.store);
            if (!store) {
                return res.status(404).json({message: "No se encontró la tienda"});
            }
            const bike = await bikeRepository.createBike(req.body);
            res.json({message: "Se creó la bicicleta:",bike});
        } catch (err) {
            res.status(400).json({message: "La bicicleta no se pudo crear", err});
        }
    }

// UPDATE
    async function updateBikeAvailability(req, res) {
        try {
            const availabilityUpdated = await bikeRepository.updateAvailability(req.params.id, req.body.availability);
            if (!availabilityUpdated) {
                return res.json({message: "No se encontró la bicicleta"});
            }
            res.json({message:"La bicicleta actualizada es: " + availabilityUpdated});
        } catch (error) {
            res.status(400).send({message});
        }
    }

// DELETE
    async function deleteBike(req, res) {
        try {
            const bike = await bikeRepository.deleteBike(req.params.id);
            if (!bike) {
                return res.status(404).json({message: "No se encontró la bicicleta"});
            }
            res.json({message: "La bicicleta se eliminó correctamente"});
        } catch (err) {
            res.status(400).json({message: "La bicicleta no se pudo eliminar"});
        }
    }

// deleteAllBikes
    async function deleteAllBikes(req, res) {
        try {
            const bike = await bikeRepository.deleteAllBikes();
            if (!bike) {
                return res.json({message: "No se pudo vaciar la base de datos"});
            }
            res.json({message: "Se eliminaron todas las bicicletas de la base de datos"});
        } catch (err) {
            res.json({message: "Hubo un error al intentar borrar todas las bicicletas de la base de datos"});
        }
    }
    

module.exports = {
    getBikes,
    deleteAllBikes,
    updateBikeAvailability,
    createBike,
    filterBikesById,
    deleteBike,
}