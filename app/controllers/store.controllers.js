const storeService = require('../services/store.service.js');

// GET
    async function getBikesByStore(req, res){
        try {
            const bikes = await storeService.storeRepository.getBikesByStore(req.params.id);
            res.json({message:"Las bicicletas encontradas en la tienda fueron:",bikes});
        } catch (err) {
            res.json({message: "No se encontró ninguna tienda con ese id", err});
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
        getBikesByStore,
        deleteStore,
    }