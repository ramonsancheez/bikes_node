require('express');
const storeRepository = require('../repositories/store.repository.js');

// GET
    async function filterBikesByStore(req, res){
        try {
            const bikes = await storeRepository.filterBikesByStore(req.params.id);
            res.json({message:"Las bicicletas encontradas en la tienda fueron:",bikes});
        } catch (err) {
            res.json({message: "No se encontró ninguna tienda con ese id", err});
        }  
    }

    async function filterByAvailability(req, res){
        const availableBikes = await storeRepository.filterByAvailability(req.params.id);
        if(availableBikes.length == 0){
            return res.json({message: "No se encontró ninguna bicicleta disponible"});
        } else {
            res.json({message:"Las bicicletas disponibles en la tienda son:", availableBikes});
        }
    }

    async function filterByNotAvailability(req, res){
        const notAvailableBikes = await storeRepository.filterByNotAvailability(req.params.id);
        if(notAvailableBikes.length == 0){
            return res.json({message: "Todas las bicicletas están disponibles"});
        } else {
            res.json({message:"Las bicicletas ocupadas de la tienda son:",notAvailableBikes});
        }
    }

// CREATE
    async function createStore(req, res) {
        try{
            const store = await storeRepository.createStore(req.body);
            res.json({message: "Se creó la tienda:",store});
        } catch (err) {
            res.status(400).json({message: "La tienda no se pudo crear", err});
        }
    }

// DELETE
    async function deleteStore(req, res) {
        try {
            const store = await storeRepository.deleteStore(req.params.id);
            res.json({message: "Se eliminaron todas las bicicletas relacionadas con la tienda", store});
        } catch (err) {
            res.json({message: "No se encontró la tienda", err});
        }
    }

module.exports = {
    createStore,
    filterBikesByStore,
    deleteStore,
    filterByAvailability,
    filterByNotAvailability,
}