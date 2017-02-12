var express = require('express');
var router = express.Router();

var db = require('../queries');

router.get('/', function(req, res) {
    res.redirect('ping');
});
router.get('/ping', function(req, res) {
    res.status(200).json({
        pong: true
    });
});

router.get('/api/pokemons', db.getAllPokemons);
router.get('/api/pokemons/:id', db.getSinglePokemon);
router.post('/api/pokemons', db.createPokemon);
router.put('/api/pokemons/:id', db.updatePokemon);
router.delete('/api/pokemons/:id', db.removePokemon);

module.exports = router;