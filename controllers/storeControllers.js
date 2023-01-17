const express = require('express');
const router = express.Router();
const Bike = require('../models/bike.model.js.js');
const Store = require('../models/store.model.js');


// GET
    async function filterBikesByStore(req, res){
        Bike.find({store: req.params.id}).then((bikes) => {
            res.status(200).json(bikes);
        }).catch((err) => {
            res.status(500).json({message: "Esta bicicltea no se ha encontrado en la tienda: " + req.params.id});
        });  
    }

    async function filterByAvailability(req, res){
        Bike.find({store: req.params.id, availability: true}).then((bikes) => {
            res.status(200).json(bikes);
        }).catch((err) => {
            res.status(500).json({message: "Esta tienda no tiene bicicletas disponibles"});
        });
    }

    async function filterByNotAvailability(req, res){
        Bike.find({store: req.params.id, availability: false}).then((bikes) => {
            res.status(200).json(bikes);
        }).catch((err) => {
            res.status(500).json({message: "Esta tienda no tiene bicicletas en uso"});
        });
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