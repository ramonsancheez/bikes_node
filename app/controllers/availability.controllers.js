const availabilityService = require('../services/availability.service.js');

// GET
    async function getByAvailability(req, res){
        const availableBikes = await availabilityService.getByAvailability(req.params.id);
        if(availableBikes.length == 0){
            res.json({message: "No se encontró ninguna tienda con ese id"});
        } else {
            res.json({message: "las bicicletas con disponibilidad " + availabilityService.isAvailable + " son:", availableBikes})
        }
    }

// UPDATE
    async function updateBikeAvailability(req, res) {
        try {
            const bike = await availabilityService.updateBikeAvailability(req.params.id, req.body);
            if (!bike) {
                return res.status(404).json({message: "No se encontró la bicicleta"});
            }
            res.json({message: "La disponibilidad de la bicicleta se actualizó correctamente", bike});
        } catch (err) {
            res.status(400).json({message: "La disponibilidad de la bicicleta no se pudo actualizar"});
        }
    }

// EXPORTS
    module.exports = {
        getByAvailability,
        updateBikeAvailability,
    }