DROP DATABASE IF EXISTS pokemons;
CREATE DATABASE pokemons;

\c pokemons;

CREATE TABLE pokemons (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  type VARCHAR,
  age INTEGER,
  sex VARCHAR
);

INSERT INTO pokemons (name, type, age, sex)
  VALUES ('Bulbasaur', 'Grass', 3, 'M');