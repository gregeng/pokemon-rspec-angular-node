require "api_helper"

describe 'pokemons' do
  it 'returns a list of pokemon' do
    create_pokemon(name: 'Charmander', age: 4, element_type: 'Fire', sex: 'M')
    create_pokemon(name: 'Bulbasaur', age: 3, element_type: 'Grass', sex: 'F')
    create_pokemon(name: 'Squirtle', age: 5, element_type: 'Water', sex: 'M')

    pokemons = Pokemons.all

    response = get('/api/pokemons')
    expect(response.body).to match(pokemons.to_json)
  end

  it 'returns a 200 status' do
    response = get('/api/pokemons')

    expect(response.code).to eq(200)
  end
end