## 4 Task

```
/**
 * Create Person class
 * @param {string} name - set name of our Person
 * @param {number} mindPoints - set mind of our Person
 * @param {number} healthPoints - set health of our Person
 * @param {number} manaPoints - set mana of our Person
 * @param {number} powerPoints - set power of our Person.
 * @param {number} powerful - average power value for Person
 */

class Person {
  constructor(name = `Unnamed`,
              mindPoints = 50,
              healthPoints = 100,
              manaPoints = 1,
              powerPoints = 100) {
    this.name = name;
    this.mindPoints = mindPoints;
    this.healthPoints = healthPoints;
    this.powerPoints = powerPoints;
    this.powerful = (mindPoints * healthPoints * manaPoints * powerPoints) / 1000;
  }

  /**
   * Greeting function
   */

  greet() {
    console.log(`Hello stranger! My name is ${this.name}`);
  }

  /**
   * Some Person attack some Person
   * @param {string} whom - Person you want to attack
   */

  attack(whom) {
    console.log(`Arrrrr! ${this.name} attack ${whom.name}`);
    setTimeout(() => {
      console.log(`Battle is begin ...`);
    }, 1000);
    setTimeout(() => {
      if (this.powerful > whom.powerful) {
        console.log(`${this.name} win!`);
      } else if (this.powerful < whom.powerful) {
        console.log(`${whom.name} win!`);
      } else {
        console.log(`Wow! Powers is equal! Battle is continue ...`);
        setTimeout(() => {
          if (Math.random() < 0.5) {
            console.log(`${this.name} win!`);
          } else {
            console.log(`${whom.name} win!`);
          }
        }, 2000);
      }
    }, 3000);
  }
};

class Human extends Person {
  constructor(...args) {
    super(...args);
    this.type = 'human';
  }

  greet(...args) {
    console.log(`I'm a HUUUUUUUMAN! My name is ${this.name}`);
  }
};

class Orc extends Person {
  constructor(...args) {
    super(...args);
    this.type = 'orc';
  }
};

class Wizard extends Person {
  constructor(...args) {
    super(...args);
    this.type = 'wizard';
  }
};

let humanDavid = new Human('David', 80, 100, 1, 50);
let orcFroddle = new Orc('Froddle', 20, 150, 1, 100);
let wizardJan = new Wizard('Jan', 100, 20, 100, 60);
let wizardGleb = new Wizard('Gleb', 100, 20, 100, 60);

let ghost = new Human;

humanDavid.greet();

humanDavid.attack(orcFroddle);

```
