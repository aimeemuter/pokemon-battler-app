const { describe, test, expect } = require("@jest/globals");
const {
  Pokémon,
  Fire,
  Water,
  Grass,
  Normal,
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
} = require("../pokemon.js");

describe("Pokémon", () => {
  test("Pokémon should have properties equal to the properties passed in as arguments", () => {
    const pokémonTest = new Pokémon("Eevee", 55, 18, "Headbutt");
    expect(pokémonTest.name).toBe("Eevee");
    expect(pokémonTest.hitPoints).toBe(55);
    expect(pokémonTest.attackDamage).toBe(18);
    expect(pokémonTest.move).toBe("Headbutt");
  });
  test("when takeDamage is invoked with a number, it reduces the pokémon's health by the number given", () => {
    const pokémonTest = new Pokémon("Eevee", 55, 18, "Headbutt");
    pokémonTest.takeDamage(1);
    expect(pokémonTest.hitPoints).toBe(54);
  });
  test("when useMove is invoked, it returns the pokémon's attack damage and console.logs correct response", () => {
    const pokémonTest = new Pokémon("Eevee", 55, 18, "Headbutt");
    // come back and test the console log with jest spy
    expect(pokémonTest.useMove()).toBe(18);
  });
  test("when hasFainted is invoked, it returns true if the pokémon has fainted (hitPoints equals 0) and false if not", () => {
    const pokémonTest = new Pokémon("Eevee", 55, 18, "Headbutt");
    expect(pokémonTest.hasFainted()).toBe(false);
    pokémonTest.takeDamage(55);
    expect(pokémonTest.hasFainted()).toBe(true);
  });
  test("a Fire type pokémon has a type equal to fire", () => {
    const firePokémonTest = new Fire("Flareon", 65, 20, "Fire blast");
    expect(firePokémonTest.type).toBe("fire");
  });
  test("a Water type pokémon has a type equal to water", () => {
    const waterPokémonTest = new Water("Vaporeon", 70, 19, "Hydro pump");
    expect(waterPokémonTest.type).toBe("water");
  });
  test("a Grass type pokémon has a type equal to grass", () => {
    const grassPokémonTest = new Grass("Leafeon", 65, 17, "Giga drain");
    expect(grassPokémonTest.type).toBe("grass");
  });
  test("a Normal type pokémon has a type equal to normal", () => {
    const normalPokémonTest = new Normal("Eevee", 55, 18, "Headbutt");
    expect(normalPokémonTest.type).toBe("normal");
  });
  test("when isEffectiveAgainst is invoked on a pokémon it should return true if it is strong against the other pokémon passed in as an argument and false if not", () => {
    const firePokémonTest = new Fire("Flareon", 65, 20, "Fire blast");
    const waterPokémonTest = new Water("Vaporeon", 70, 19, "Hydro pump");
    const grassPokémonTest = new Grass("Leafeon", 65, 17, "Giga drain");
    expect(firePokémonTest.isEffectiveAgainst(grassPokémonTest)).toBe(true);
    expect(firePokémonTest.isEffectiveAgainst(waterPokémonTest)).toBe(false);
  });
  test("when isWeakTo is invoked on a pokémon it should return true if it is weak against the other pokémon passed in as an argument and false if not", () => {
    const firePokémonTest = new Fire("Flareon", 65, 20, "Fire blast");
    const waterPokémonTest = new Water("Vaporeon", 70, 19, "Hydro pump");
    const grassPokémonTest = new Grass("Leafeon", 65, 17, "Giga drain");
    expect(firePokémonTest.isWeakTo(grassPokémonTest)).toBe(false);
    expect(firePokémonTest.isWeakTo(waterPokémonTest)).toBe(true);
  });
  test("Charmander should have a type equal to fire and a move equal to Ember", () => {
    const charmanderTest = new Charmander("Flame");
    expect(charmanderTest.type).toBe("fire");
    expect(charmanderTest.move).toBe("Ember");
  });
  test("Squirtle should have a type equal to water and a move equal to Water Gun", () => {
    const squirtleTest = new Squirtle("Splash");
    expect(squirtleTest.type).toBe("water");
    expect(squirtleTest.move).toBe("Water Gun");
  });
  test("Bulbasaur should have a type equal to grass and a move equal to Vine Whip", () => {
    const bulbasaurTest = new Bulbasaur("Blade");
    expect(bulbasaurTest.type).toBe("grass");
    expect(bulbasaurTest.move).toBe("Vine Whip");
  });
  test("Rattata should have a type equal to normal", () => {
    const rattataTest = new Rattata("Rat");
    expect(rattataTest.type).toBe("normal");
  });
});

const { Pokéball } = require("../pokeball.js");

describe("Pokéball", () => {
  test("isEmpty function returns true if there is no pokémon stored inside it", () => {
    const pokeballTest = new Pokéball();
    expect(pokeballTest.isEmpty()).toBe(true);
  });
  test("the throw function catches the passed pokémon if the pokéball is empty and doesn't catch the pokémon if it is full", () => {
    const pokeballTest = new Pokéball();
    const rattataTest = new Rattata("Rat");
    pokeballTest.throw(rattataTest);
    expect(pokeballTest.isEmpty()).toBe(false);
    expect(pokeballTest.storedPokémon.name).toBe("Rat");
    const bulbasaurTest = new Bulbasaur("Blade");
    pokeballTest.throw(bulbasaurTest);
    expect(pokeballTest.storedPokémon.name).toBe("Rat");
    // test console.log with jest spy later
  });
  test("the throw function should return the storedPokémon (if there is one) if invoked with no argument", () => {
    const pokeballTest = new Pokéball();
    const rattataTest = new Rattata("Rat");
    pokeballTest.throw(rattataTest);
    expect(pokeballTest.throw()).toEqual(rattataTest);
    // test console.log with jest spy later
  });
  test("invoking contains on a pokéball should return the pokémon's name if there is one, otherwise, return 'Empty...'", () => {
    const pokeballTest = new Pokéball();
    const rattataTest = new Rattata("Rat");
    expect(pokeballTest.contains()).toBe("Empty...");
    pokeballTest.throw(rattataTest);
    expect(pokeballTest.contains()).toBe(rattataTest.name);
  });
});

const { Trainer } = require("../trainer.js");

describe("Trainer", () => {
  test("trainer should have belt property that is an array", () => {
    const trainerTest = new Trainer();
    expect(Array.isArray(trainerTest.belt)).toBe(true);
  });
  test("catch method should add pokémon to the belt as long as there are empty pokéballs", () => {
    const trainerTest = new Trainer();
    const pokémonTest = new Charmander("Mike");
    trainerTest.catch(pokémonTest);
    expect(trainerTest.belt.length).toBe(1);
    const pokémonTest2 = new Squirtle("Splash");
    const pokémonTest3 = new Charmander("Flame");
    const pokémonTest4 = new Rattata("Rat");
    const pokémonTest5 = new Bulbasaur("Blade");
    const pokémonTest6 = new Charmander("Blaze");
    trainerTest.catch(pokémonTest2);
    trainerTest.catch(pokémonTest3);
    trainerTest.catch(pokémonTest4);
    trainerTest.catch(pokémonTest5);
    trainerTest.catch(pokémonTest6);
    expect(trainerTest.belt.length).toBe(6);
    const pokémonTest7 = new Squirtle("Mike");
    expect(trainerTest.catch(pokémonTest7)).toBe(
      "Your belt is full! No available empty pokéballs"
    );
  });
  test("getPokémon searches for the pokéball containing the pokémon with that name, and returns that pokémon. It should return a string if the pokémon is not found", () => {
    const trainerTest = new Trainer();
    const pokémonTest = new Rattata("Rat");
    const pokémonTest2 = new Bulbasaur("Blade");
    trainerTest.catch(pokémonTest);
    trainerTest.catch(pokémonTest2);
    expect(trainerTest.getPokémon("Rat")).toEqual(pokémonTest);
    expect(trainerTest.getPokémon("Flame")).toBe("Pokémon not found!");
  });
});

const { Battle } = require("../battle.js");

describe("Battle", () => {
  test("Battle has properties called attackingPlayer and defendingPlayer", () => {
    const battleTest = new Battle();
    expect(battleTest.hasOwnProperty("attackingPlayer")).toBe(true);
    expect(battleTest.hasOwnProperty("defendingPlayer")).toBe(true);
  });
  test("selectFirstPlayer initiates the attackingPlayer and defendingPlayer properties with player1 and player2", () => {
    const trainerTest1 = new Trainer();
    const trainerTest2 = new Trainer();
    const pokémonTest1 = new Rattata("Rat");
    const pokémonTest2 = new Bulbasaur("Blade");
    const battleTest = new Battle(
      [trainerTest1, pokémonTest1],
      [trainerTest2, pokémonTest2]
    );
    battleTest.selectFirstPlayer();
    expect(battleTest.attackingPlayer).not.toBe(undefined);
    expect(battleTest.defendingPlayer).not.toBe(undefined);
  });
  test("damageCalculator returns a number", () => {
    const battleTest = new Battle();
    const pokémonTest1 = new Charmander("Flame");
    const pokémonTest2 = new Bulbasaur("Blade");
    expect(
      typeof battleTest.damageCalculator(pokémonTest2, pokémonTest1, 10)
    ).toBe("number");
  });
  test("the turn method returns a string", () => {
    const trainerTest1 = new Trainer();
    const trainerTest2 = new Trainer();
    const pokémonTest1 = new Charmander("Flame");
    const pokémonTest2 = new Bulbasaur("Blade");
    const player1 = [trainerTest1, pokémonTest1];
    const player2 = [trainerTest2, pokémonTest2];
    const battleTest = new Battle(player1, player2);
    battleTest.selectFirstPlayer();
    expect(typeof battleTest.turn()).toBe("string");
  });
  test("the fight method returns a string", () => {
    const trainerTest1 = new Trainer();
    const trainerTest2 = new Trainer();
    const pokémonTest1 = new Charmander("Flame");
    const pokémonTest2 = new Bulbasaur("Blade");
    const player1 = [trainerTest1, pokémonTest1];
    const player2 = [trainerTest2, pokémonTest2];
    const battleTest = new Battle(player1, player2);
    expect(typeof battleTest.fight()).toBe("string");
  });
  // another fighting scenario
  test("the fight method returns a string", () => {
    const trainerTest1 = new Trainer();
    const trainerTest2 = new Trainer();
    const pokémonTest1 = new Rattata("Ratboi");
    const pokémonTest2 = new Rattata("Remi");
    const player1 = [trainerTest1, pokémonTest1];
    const player2 = [trainerTest2, pokémonTest2];
    const battleTest = new Battle(player1, player2);
    expect(typeof battleTest.fight()).toBe("string");
  });
  test("isCriticalHit returns a boolean", () => {
    const battleTest = new Battle();
    expect(typeof battleTest.isCriticalHit()).toBe("boolean");
  });
});
