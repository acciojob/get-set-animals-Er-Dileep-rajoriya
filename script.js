// Define the Animal class
class Animal {
  constructor(species) {
    this._species = species;  // Private property
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to log the sound an animal makes
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

// Define the Cat class, extending Animal
class Cat extends Animal {
  // Method to log the cat's purring sound
  purr() {
    console.log("purr");
  }
}

// Define the Dog class, extending Animal
class Dog extends Animal {
  // Method to log the dog's barking sound
  bark() {
    console.log("woof");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
