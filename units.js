var Thing = function(shape, color, size){
  this.shape = shape;
  this.color = color;
  this.size = size;
  this.space = size-1;
  this.interior = [];
}

Thing.prototype.augment = function(thing){
  if(thing.size <= this.space){
    this.interior.push(thing);
    this.space -= thing.size
  } else {
    return false;
  }
}

Thing.prototype.inspect = function(){
  var results = {};
  results[this.shape] = {thing: this};
  forEach(this.interior, function(thing){
    results.interior = thing.getInterior();
  })
  return results;
}