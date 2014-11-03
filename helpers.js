var forEach = function(arr, fn){
  if(Array.isArray(arr)){
    for(var i = 0; i < arr.length; i++){
      fn(arr[i], i);
    }
  } else {
    var keys = Object.keys(arr), key;
    for(var i = 0; i < keys.length; i++){
      key = keys[i];
      fn(arr[key], key);
    }
  }
}

var Cell = function(x, y){
  this.col = Math.floor(x/20);
  this.row = Math.floor(y/20);  
}

var DataCell = function(col, row, data){
  this.col = col;
  this.row = row;
  this.data = data || undefined;
}

DataCell.prototype.trigger = function(){
  lightup(this);
}

Cell.prototype.isEqualTo = function(cell){
  return (this.col === cell.col && this.row === cell.row);
}

var makeP = function(text){
  var p = document.createElement('p');
  p.textContent = text;
  return p;
}

var makeH = function(text){
  var h = document.createElement('h2');
  h.textContent = text;
  return h;
}