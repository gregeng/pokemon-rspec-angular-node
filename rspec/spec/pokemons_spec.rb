require 'spec_helper'
Pokemons.connection

describe 'pokemons' do
  it 'returns a list of pokemon' do
    charmander = create_pokemon(name: 'Charmander', age: 4, element_type: 'Fire', sex: 'M')
    bulbasaur = create_pokemon(name: 'Bulbasar', age: 3, element_type: 'Grass', sex: 'F')
    squirtle = create_pokemon(name: 'Squirtle', age: 5, element_type: 'Water', sex: 'M')

    response = get('/api/pokemons')
    expect(response.body).to eq([charmander, bulbasaur, squirtle].to_json)
  end

  it 'returns a 200 status' do
    response = get('/api/pokemons')

    expect(response.code).to eq(200)
  end
end