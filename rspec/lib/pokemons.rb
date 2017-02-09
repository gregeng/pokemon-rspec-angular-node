require 'active_record'

class Pokemons < ActiveRecord::Base
  self.table_name = 'pokemons'
end