(function() {
  'use strict';

  function Traveler(food, name, isHealthy) {
    var food = food;
    var name = name;
    var isHealthy = isHealthy;

    this.getName = function() {
      return name;
    }
    this.getFood = function() {
      return food;
    }
    this.setFood = function(x) {
      food = food + x;
    }
    this.getHealth = function() {
      return isHealthy;
    }


  } //this ends my traveler function


  function Wagon(capacity) {
    this.passengers = [];
    this.capacity = capacity;

    this.addPassengers = function(travelerName) {
      this.passengers.push(travelerName);
    }

  } //this closes my wagon function

  // this returns an integer either 0 or 1 * 100 = 0 or 100 to add to food.
  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function makeTraveler(name) {
    let food = getRandomIntInclusive(20, 80);
    return new Traveler(food, name, true);
  }

  function hunt(Traveler) {
    let trophy = ((getRandomIntInclusive(0, 1)) * 100);
    // console.log(trophy);
    Traveler.setFood(trophy);
  }

  function eat(Traveler) {
    let eat = -20;
    Traveler.setFood(eat);
  }
  // console.log(traveler2.getFood());

  function makeWagon(capacity) {
    return new Wagon(capacity);
  }

  function join(Wagon, Traveler) {
    if (wagon.capacity <= 5) {
    Wagon.addPassengers(Traveler);
  }
    //need an if statement for capacity
  }
  // console.log(wagon.passengers[0].getName());

  function quarantine(wagon) {
    for (var i = 0; i < wagon.passengers.length; i++) {

      if ((wagon.passengers[i].getFood()) < 20) {
        return true;
      }
    }
    return false;
  }


  function food(wagon){
    let total = 0;
    for (var i = 0; i < wagon.passengers.length; i++) {
      total += wagon.passengers[i].getFood();
    }
    return total;
  }





  // Create a wagon called 'wagon'
  let wagon = makeWagon(5);
  // // Create a traveler with the name 'Henrietta' called 'traveler'
  let traveler = makeTraveler('Henrietta');
  // // Create a traveler with the name 'Juan' called 'traveler2'
  let traveler2 = makeTraveler('Juan');
  //
  hunt(traveler); // maybe get more food
  // console.log(traveler2.getFood());

  eat(traveler2);
  eat(traveler2); // juan is hungry
  join(wagon, traveler);
  join(wagon, traveler2);
  //
  console.log(quarantine(wagon)); // print true if someone is sick, false otherwise
  console.log("True means someone in the wagon is sick. It needs to be quarantined. \nFalse means everyone is well fed and healthy.");
  console.log(food(wagon)); // print juan's food + henrietta's food
  console.log("This amount is the total of the passengers' food.");

  console.log("Individually, " + wagon.passengers[0].getName() + " has a food supply of " + wagon.passengers[0].getFood() + ",");
  console.log(" and " + wagon.passengers[1].getName() + " has a food supply of " + wagon.passengers[1].getFood() + ", because he eats a lot and does not hunt.");




})();
