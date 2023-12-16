class Battle {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.attackingPlayer = undefined;
    this.defendingPlayer = undefined;
  }

  selectFirstPlayer() {
    const randomizer = Math.round(Math.random());
    if (randomizer === 0) {
      this.attackingPlayer = this.player1;
      this.defendingPlayer = this.player2;
    } else if (randomizer === 1) {
      this.attackingPlayer = this.player2;
      this.defendingPlayer = this.player1;
    }
  }

  attackHits() {
    const hitChance = 0.8;
    const randomHitChance = Math.random();
    return randomHitChance <= hitChance ? true : false;
  }

  isCriticalHit() {
    const criticalHitChance = 0.05;
    const randomCritChance = Math.random();
    return randomCritChance <= criticalHitChance ? true : false;
  }

  damageCalculator(attackingPokémon, defendingPokémon, baseDamage) {
    if (this.isCriticalHit()) {
      console.log(`CRITICAL HIT!!!`);
      return baseDamage * 3;
    }
    if (attackingPokémon.isEffectiveAgainst(defendingPokémon)) {
      console.log("It's SUPER effective!!!");
      return baseDamage * 1.25;
    }
    if (!defendingPokémon.isWeakTo(attackingPokémon)) {
      console.log("It's not very effective...");
      return baseDamage * 0.75;
    }
    return baseDamage;
  }

  turn() {
    const attacker = this.attackingPlayer;
    const defender = this.defendingPlayer;
    const attackingPokémon = attacker[1];
    const defendingPokémon = defender[1];
    let baseDamage = 0;
    let actualDamage = 0;

    if (this.attackHits()) {
      baseDamage = attackingPokémon.useMove();
    } else {
      console.log(`${attackingPokémon.name} missed!`);
    }

    if (baseDamage > 0) {
      actualDamage = this.damageCalculator(
        attackingPokémon,
        defendingPokémon,
        baseDamage
      );
    }

    if (actualDamage > 0) {
      defendingPokémon.takeDamage(actualDamage);
      console.log(
        `${defendingPokémon.name} has ${defendingPokémon.hitPoints} points remaining.`
      );
    }

    if (defendingPokémon.hitPoints > 0) {
      this.attackingPlayer = defender;
      this.defendingPlayer = attacker;
    }

    console.log(`End of turn!`);
    return `End of turn!`;
  }

  fight() {
    this.selectFirstPlayer();
    while (
      !this.attackingPlayer[1].hasFainted() &&
      !this.defendingPlayer[1].hasFainted()
    ) {
      this.turn();
    }
    console.log(`Battle ended... ${this.attackingPlayer[1].name} won!`);
    return `Battle ended... ${this.attackingPlayer[1].name} won!`;
  }
}

module.exports = { Battle };
