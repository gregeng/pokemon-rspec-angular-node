#!/bin/sh

# exit script if there are failures in any of the processes
set -e

psql -f migrations/pokemons.sql