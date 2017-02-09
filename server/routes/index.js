var express = require('express');
var router = express.Router();

var db = require('../queries');


router.get('/api/pokemons', db.getAllPokemons);
router.get('/api/pokemons/:id', db.getSinglePokemon);
router.post('/api/pokemons', db.createPokemon);
router.put('/api/pokemons/:id', db.updatePokemon);
router.delete('/api/pokemons/:id', db.removePokemon);


module.exports = router;