const express = require('express');
const router = express.Router();
const bikeRepository = require('../repositories/bikeRepository.js');
const storeRepository = require('../repositories/storeRepository.js');


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
        try {
            const bikes = await storeRepository.filterByAvailability(req.params.id);
            res.json({message:"Las bicicletas disponibles en la tienda son:",bikes});
        } catch (err) {
            res.json({message: "No hay ninguna bicicleta disponible en la tienda", err});
        }
    }

    async function filterByNotAvailability(req, res){
        try {
            const bikes = await storeRepository.filterByNotAvailability(req.params.id);
            res.json({message:"Las bicicletas ocupadas en la tienda son:",bikes});
        } catch (err) {
            res.json({message: "No hay ninguna bicicleta disponible en la tienda", err});
        }
    }

// CREATE
    async function createStore(req, res){
        try {
            const newStore = new Store({
                name: req.body.name,
                address: req.body.address
            });
            await newStore.save();
            res.status(201).json({message: "La tienda se creó correctamente: " + newStore});
        } catch (error) {
            res.status(500).json({message: "Error al crear la tienda"});
        }
    }

// UPDATE
    async function updateStore(req, res) {
        try {
            const store = await Store.findByIdAndUpdate(req.params.id, {name:req.body.name}, {new: true});
            if (!store) {
                return res.status(404).json();
            }
            res.json(store);
        } catch (error) {
            res.status(400).json(error);
        }
    }

// DELETE
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
    createStore,
    filterBikesByStore,
    updateStore,
    deleteStore,
    filterByAvailability,
    filterByNotAvailability,
}