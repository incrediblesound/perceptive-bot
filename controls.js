window.gameState = {};
window.gameState.map = {};
window.gameState.init = function(){
    for(var i = 0; i < 38; i++){
    for(var k = 0; k < 38; k++){
      window.gameState.map[i] = window.gameState.map[i] || {};
      window.gameState.map[i][k] = new DataCell(i, k);
    }
  }
  setInterval(function(){ window.gameState.animate() }, 1000);
}

window.gameState.player = new World();

window.gameState.animate = function(){
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  context.clearRect(window.robot.x-10, window.robot.y-10, 20, 20);
  window.robot.move();
  window.robot.render();
};