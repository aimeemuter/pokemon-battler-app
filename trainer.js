const { Pokéball } = require("./pokeball.js");

class Trainer {
  constructor() {
    this.belt = [];
    this.emptyPokéballs = 6;
  }
  catch(pokémon) {
    if (pokémon !== undefined) {
      if (this.emptyPokéballs > 0) {
        const newPokéball = new Pokéball();
        newPokéball.throw(pokémon);
        this.belt.push(newPokéball);
        this.emptyPokéballs--;
      } else {
        return "Your belt is full! No available empty pokéballs";
      }
    }
  }
  getPokémon(pokémonName) {
    let foundPokémon;
    this.belt.forEach((pokéball) => {
      const residentPokémon = pokéball.storedPokémon;
      if (residentPokémon.name === pokémonName) foundPokémon = pokéball.throw();
    });
    if (foundPokémon !== undefined) return foundPokémon;
    return `Pokémon not found!`;
  }
}

module.exports = { Trainer };
