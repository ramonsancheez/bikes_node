require('express');
const storeRepository = require('../repositories/store.repository.js');

// GET
    async function getBikesByStore(req, res){
        try {
            const bikes = await storeRepository.getBikesByStore(req.params.id);
            res.json({message:"Las bicicletas encontradas en la tienda fueron:",bikes});
        } catch (err) {
            res.json({message: "No se encontró ninguna tienda con ese id", err});
        }  
    }

    async function getByAvailability(req, res){
        const availableBikes = await storeRepository.getByAvailability(req.params.id);
        if(availableBikes.length == 0){
            res.json({message: "No se encontró ninguna tienda con ese id"});
        } else {
            res.json({message: "las bicicletas con disponibilidad " + storeRepository.isAvailable + " son:", availableBikes})
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
    getBikesByStore,
    deleteStore,
    getByAvailability,
}