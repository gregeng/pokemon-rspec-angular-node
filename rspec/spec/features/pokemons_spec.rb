require "feature_helper"

base_url = "http://localhost:4201"

feature "Pokemons", js: true do
  describe "viewing all the pokemons", js: true do
    before do
      create_pokemon(name: "Charmander", age: 4, element_type: "Fire", sex: "M")
      create_pokemon(name: "Bulbasaur", age: 3, element_type: "Grass", sex: "F")
      create_pokemon(name: "Squirtle", age: 5, element_type: "Water", sex: "M")
    end

    it "shows a list of pokemon in an <li>" do
      visit "#{base_url}/pokemons"

      expect(page).to have_content("Gotta Catch Em All")

      expect(page).to have_content "Bulbasaur"
      expect(page).to have_content "Charmander"
      expect(page).to have_content "Squirtle"
    end
  end
end