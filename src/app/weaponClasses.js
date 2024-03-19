class Weapon {
  constructor(item, damage) {
    this.item = item;
    this.damage = damage;
  }
  attack() {
    console.log(
      `You have been attacked with ${this.item}! Damage of ${this.damage} has been inflicted.`
    );
  }
}

class Sword extends Weapon {
  slice() {
    console.log(`${this.item} sliced you!`);
  }
  poke() {
    console.log(`${this.item} poked you!`);
  }
}

const oathkeeper = new Weapon("OathKeeper", 10);
oathkeeper.attack();

const longclaw = new Sword("Longclaw");
// longclaw.poke();

class Armour {
  constructor(item, defence) {
    this.item = item;
    this.defence = defence;
  }
  block() {
    console.log(`A ${this.item} was used to block you!`);
  }
}

const shield = new Armour("shield", 5);
// shield.block();
const invisibleForceField = new Armour("Invisible Force Field", 20);
invisibleForceField.block();
