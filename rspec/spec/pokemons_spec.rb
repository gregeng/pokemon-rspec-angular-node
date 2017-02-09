require 'spec_helper'

describe 'pokemons' do
  it 'returns a list of pokemon' do
    response = get('/api/pokemons')

    pokemons = [
      {
        "id": 1,
        "name": "Bulbasaur",
        "type": "Grass",
        "age": 3,
        "sex": "M"
      }
    ]

    expect(response.body).to eq(pokemons.to_json)
  end

  it 'returns a 200 status' do
    response = get('/api/pokemons')

    expect(response.code).to eq(200)
  end
end