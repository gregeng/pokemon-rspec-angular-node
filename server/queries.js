var promise = require('bluebird');

var options = {
    // Initialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/pokemons';
var db = pgp(connectionString);


function ping(req, res, next) {
    db.any('select * from pokemons')
        .then(function (data) {
            res.status(200)
                .json({ pong: true });
        })
        .catch(function (err) {
            return next(err);
        });
}

function getAllPokemons(req, res, next) {
    db.any('select * from pokemons')
        .then(function (data) {
            res.status(200)
                .json(data);
        })
        .catch(function (err) {
            return next(err);
        });
}

function getSinglePokemon(req, res, next) {
    var pupID = parseInt(req.params.id);
    db.one('select * from pokemons where id = $1', pupID)
        .then(function (data) {
            res.status(200)
                .json(data);
        })
        .catch(function (err) {
            return next(err);
        });
}

function createPokemon(req, res, next) {
    req.body.age = parseInt(req.body.age);
    db.none('insert into pokemons(name, element_type, age, sex)' +
        'values(${name}, ${element_type}, ${age}, ${sex})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json(data);
        })
        .catch(function (err) {
            return next(err);
        });
}

function updatePokemon(req, res, next) {
    db.none('update pokemons set name=$1, element_type=$2, age=$3, sex=$4 where id=$5',
        [req.body.name, req.body.element_type, parseInt(req.body.age),
            req.body.sex, parseInt(req.params.id)])
        .then(function (data) {
            res.status(200)
                .json(data);
        })
        .catch(function (err) {
            return next(err);
        });
}

function removePokemon(req, res, next) {
    var pupID = parseInt(req.params.id);
    db.result('delete from pokemons where id = $1', pupID)
        .then(function (result) {
            /* jshint ignore:start */
            res.status(200)
                .json(data);
            /* jshint ignore:end */
        })
        .catch(function (err) {
            return next(err);
        });
}


module.exports = {
    ping: ping,
    getAllPokemons: getAllPokemons,
    getSinglePokemon: getSinglePokemon,
    createPokemon: createPokemon,
    updatePokemon: updatePokemon,
    removePokemon: removePokemon
};
