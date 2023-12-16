class Pokéball {
  constructor() {
    this.storedPokémon = "none";
  }
  isEmpty() {
    return this.storedPokémon === "none" ? true : false;
  }
  throw(pokémon) {
    if (this.isEmpty() && pokémon !== undefined) {
      this.storedPokémon = pokémon;
      console.log(`You caught ${this.storedPokémon.name}!`);
    }
    if (!this.isEmpty() && pokémon === undefined) {
      console.log(`GO ${this.storedPokémon.name}!`);
      return this.storedPokémon;
    }
    return `This pokéball is empty...`;
  }
  contains() {
    if (!this.isEmpty()) return this.storedPokémon.name;
    return `Empty...`;
  }
}

module.exports = { Pokéball };
