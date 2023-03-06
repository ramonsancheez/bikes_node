const storeService = require('../services/store.service.js');

// GET
    async function getBikesByStore(req, res){
        try {
            const bikes = await storeService.storeRepository.getBikesByStore(req.params.id);
            res.json(bikes);
        } catch (err) {
            res.json({message: "No se encontró ninguna tienda con ese id", err});
        }  
    }

    async function getStores(req, res){
        try {
            const stores = await storeService.storeRepository.getStores();
            res.json(stores);
        } catch (err) {
            res.json({message: "No se encontró ninguna tienda", err});
        }
    }

// CREATE
    async function createStore(req, res) {
        try{
            const store = await storeService.storeRepository.createStore(req.body);
            res.json({message: "Se creó la tienda:",store});
        } catch (err) {
            res.status(400).json({message: "La tienda no se pudo crear", err});
        }
    }

// DELETE
    async function deleteStore(req, res) {
        try {
            const store = await storeService.storeRepository.deleteStore(req.params.id);
            res.json({message: "Se eliminaron todas las bicicletas relacionadas con la tienda", store});
        } catch (err) {
            res.json({message: "No se encontró la tienda", err});
        }
    }

// EXPORTS
    module.exports = {
        createStore,
        getStores,
        getBikesByStore,
        deleteStore,
    }