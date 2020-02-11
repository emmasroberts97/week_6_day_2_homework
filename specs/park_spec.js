const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function() {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 20);
    dinosaur2 = new Dinosaur('pterodactyl', 'carnivore', 15);
    dinosaur3 = new Dinosaur('diplodocus', 'herbivore', 30);
    dinosaur4 = new Dinosaur('oviraptor', 'omnivore', 10);
    dinosaur5 = new Dinosaur('stegosaurus', 'herbivore', 25);
    dinosaur6 = new Dinosaur('t-rex', 'carnivore', 20);
    park = new Park('Dino-mite Park', 10, [dinosaur1, dinosaur2, dinosaur3]);
  })

  it('should have a name', function() {
    const actual = park.name;
    const expected = 'Dino-mite Park';
    assert.strictEqual(actual, expected);
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    const expected = 10;
    assert.strictEqual(actual, expected);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs.length;
    const expected = 3;
    assert.strictEqual(actual, expected);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDino(dinosaur4);
    const actual = park.dinosaurs.length;
    const expected = 4;
    assert.strictEqual(actual, expected);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDino(dinosaur4);
    park.addDino(dinosaur5);
    park.removeDino(dinosaur4);
    const actual = park.dinosaurs.length;
    const expected = 4;
    assert.strictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.popularDino();
    const expected = dinosaur3;
    assert.deepEqual(actual, expected);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    const actual = park.dinoSpecies('t-rex');
    const expected = [dinosaur1]
    assert.deepEqual(actual, expected);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    const actual = park.dayVisitors();
    const expected = 65;
    assert.strictEqual(actual, expected);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    const actual = park.yearVisitors();
    const expected = 23725;
    assert.strictEqual(actual, expected);
  });

  it('should be able to calculate total revenue for one year', function(){
    const actual = park.yearRevenue();
    const expected = 237250;
    assert.strictEqual(actual, expected);
  });

  it('should be able to remove dinosaurs of species', function(){
    park.addDino(dinosaur6);
    park.removeDinoSpecies('t-rex')
    const actual = park.dinosaurs.length;
    const expected = 2;
    assert.strictEqual(actual, expected);
  });

});
