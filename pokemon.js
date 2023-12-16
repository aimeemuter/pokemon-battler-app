class Pokémon {
  constructor(name, hitPoints, attackDamage, move = "Tackle") {
    this.name = name;
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.move = move;
  }
  takeDamage(damage) {
    return (this.hitPoints -= damage);
  }
  useMove() {
    console.log(`${this.name} used ${this.move}`);
    return this.attackDamage;
  }
  hasFainted() {
    return this.hitPoints <= 0 ? true : false;
  }
  isEffectiveAgainst(otherPokémon) {
    return this.strength === otherPokémon.type ? true : false;
  }
  isWeakTo(otherPokémon) {
    return this.weakness === otherPokémon.type ? true : false;
  }
}

class Fire extends Pokémon {
  constructor(name, hitPoints, attackDamage, move = "Tackle") {
    super(name, hitPoints, attackDamage, move);
    this.type = "fire";
    this.strength = "grass";
    this.weakness = "water";
  }
}

class Charmander extends Fire {
  constructor(name) {
    super(name, 44, 17, "Ember");
  }
}

class Water extends Pokémon {
  constructor(name, hitPoints, attackDamage, move = "Tackle") {
    super(name, hitPoints, attackDamage, move);
    this.type = "water";
    this.strength = "fire";
    this.weakness = "grass";
  }
}

class Squirtle extends Water {
  constructor(name) {
    super(name, 44, 16, "Water Gun");
  }
}

class Grass extends Pokémon {
  constructor(name, hitPoints, attackDamage, move = "Tackle") {
    super(name, hitPoints, attackDamage, move);
    this.type = "grass";
    this.strength = "water";
    this.weakness = "fire";
  }
}

class Bulbasaur extends Grass {
  constructor(name) {
    super(name, 45, 16, "Vine Whip");
  }
}

class Normal extends Pokémon {
  constructor(name, hitPoints, attackDamage, move = "Tackle") {
    super(name, hitPoints, attackDamage, move);
    this.type = "normal";
    this.strength = "none";
    this.weakness = "none";
  }
}

class Rattata extends Normal {
  constructor(name) {
    super(name, 45, 20);
  }
}

module.exports = {
  Pokémon,
  Fire,
  Water,
  Grass,
  Normal,
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
};
