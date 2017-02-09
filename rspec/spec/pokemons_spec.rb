require 'spec_helper'
Pokemons.connection

describe 'pokemons' do
  it 'returns a list of pokemon' do
    response = get('/api/pokemons')

    pokemons = Pokemons.all

    expect(response.body).to eq(pokemons.to_json)
  end

  it 'returns a 200 status' do
    response = get('/api/pokemons')

    expect(response.code).to eq(200)
  end
end