const Park = function(name, ticketPrice, dinosaurs){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

// Add a dinosaur to its collection of dinosaurs
Park.prototype.addDino = function(dinosaur){
  this.dinosaurs.push(dinosaur);
};
// Remove a dinosaur from its collection of dinosaurs
Park.prototype.removeDino = function(dinosaur){
  const dinosaurIndex = this.dinosaurs.indexOf(dinosaur)
  this.dinosaurs.splice(dinosaurIndex, 1);
};
// Find the dinosaur that attracts the most visitors
Park.prototype.popularDino = function(){
  let max = Math.max(...this.dinosaurs.map(dinosaur => dinosaur.guestsAttractedPerDay));
  for (const dinosaur of this.dinosaurs){
    if (dinosaur.guestsAttractedPerDay === max){
      return dinosaur;
    };
  };
};
// Find all dinosaurs of a particular species
Park.prototype.dinoSpecies = function(species){
  let dinoSpecies = [];
  for (const dinosaur of this.dinosaurs){
    if (dinosaur.species === species){
      dinoSpecies.push(dinosaur);
    };
  };
  return dinoSpecies;
};
// Calculate the total number of visitors per day
Park.prototype.dayVisitors = function(){
  let total = 0;
  for (const dinosaur of this.dinosaurs){
    total += dinosaur.guestsAttractedPerDay;
  };
  return total;
};
// Calculate the total number of visitors per year
Park.prototype.yearVisitors = function(){
  return this.dayVisitors() * 365;
};
// Calculate the total revenue from ticket sales for one year
Park.prototype.yearRevenue = function(){
  return this.yearVisitors() * this.ticketPrice;
};

// Remove all dinosaurs of a particular species
Park.prototype.removeDinoSpecies = function(species){
  safeDinos = [];
  for (const dinosaur of this.dinosaurs){
    if (dinosaur.species !== species){
      safeDinos.push(dinosaur);
    };
  };
  this.dinosaurs = safeDinos;
};


module.exports = Park;
