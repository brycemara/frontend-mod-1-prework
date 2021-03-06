/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/dog.js`

In the dog class below, add a play method that, when called, will result in
the dog being hungry. Call that method below the class, and print the dog's
hunger status.
*/

class Dog {
  constructor(breed, name, age) {
    this.breed = breed;
    this.name = name;
    this.age = age;
    this.hungry = true;
  }

  bark() {
    console.log("woof!");
  }

  eat() {
    this.hungry = false;
  }
  fetch() {
    this.hungry = true;
    console.log("Fido fetched and now he's hungry!")
  }

};

var fido = new Dog("Bernese", "Fido", 4)
console.log(fido.breed);
console.log(fido.name);
console.log(fido.age);

fido.fetch();
console.log(fido.hungry);
