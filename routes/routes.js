const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.json('Bienvendio a la tienda de bicis!');
});