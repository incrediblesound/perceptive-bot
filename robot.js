var makeRobot = function(){

  var reduce = function(object, test){
    var result = [];
    forEach(object, function(value, property){
      if(test(value, property)){
        result.push(property);
      }
    })
    return result;
  };

  var rnd = function(max){
    return Math.floor(Math.random() * max);
  }

  robot = {
    image: 'O',
    x: 10,
    y: 10,
    memory: {
      thing: {
        unsure: 'ask'
      }
    },
    vision: false,
    movementMap: {
      top: function(context){ context.y -= 20 },
      right: function(context){ context.x += 20 }, 
      bottom: function(context){ context.y += 20 }, 
      left: function(context){ context.x -= 20 },
    },
    checkCell: function(col, row){
      return (window.gameState.map[col] && 
        window.gameState.map[col][row]) ? window.gameState.map[col][row] : undefined;
    },
    view: function(){
      var cell = new Cell(this.x, this.y);
      var surroundings = {
        top: this.checkCell(cell.col, cell.row-1),
        top_right: this.checkCell(cell.col+1, cell.row-1),
        right: this.checkCell(cell.col+1, cell.row),
        bottom_right: this.checkCell(cell.col+1, cell.row+1),
        bottom: this.checkCell(cell.col, cell.row+1),
        bottom_left: this.checkCell(cell.col-1, cell.row+1),
        left: this.checkCell(cell.col-1, cell.row),
        top_left: this.checkCell(cell.col, cell.row-1),
      };
      return surroundings;
    },
    perceive: function(surroundings){
      var things = reduce(surroundings, function(cell){
        return (!!cell && cell.data instanceof Thing);
      })
      console.log(things);
    },
    render: function(){
      var canvas = document.getElementById('canvas');
      var context = canvas.getContext('2d');
      context.fillText(this.image, this.x, this.y);
    },
    move: function(){
      var _this = this;
      if(!this.vision){
        this.vision = this.view();
        this.perceive(this.vision);
      } else {
        var openCells = reduce(this.vision, function(cell, property){
          return (!!cell && cell.data === undefined && property in _this.movementMap);
        })
        var num = rnd(openCells.length);
        var select = openCells[num];
        console.log(num);
        console.log(openCells);
        this.movementMap[select](this);
        this.vision = false;
      }
    }
  }
  return robot;
}