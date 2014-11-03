var canvasEl = document.createElement('canvas');
canvasEl.width = 760;
canvasEl.height = 760;
canvasEl.id = 'canvas';
var div = document.getElementById('game')
var canvas = div.appendChild(canvasEl);

var getCursorPosition = function(e) {
  var x;
  var y;
  if (e.pageX != undefined && e.pageY != undefined) {
    x = e.pageX;
    y = e.pageY;
  }
  else {
    x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;
  var cell = new Cell(x, y);
  return cell;
}

document.addEventListener('click', function(e){
	var clickCell = getCursorPosition(e);
	var cell = new DataCell(clickCell.col, clickCell.row, new Thing('square', 'blue', 10));
	window.gameState.map[clickCell.col][clickCell.row] = cell;
	lightup(cell);
})

function lightup(cell){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	context.fillRect(cell.col*20,cell.row*20, 20, 20);
}

function triggerDataCell(cell){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	context.fillText('*', cell.col*20,cell.row*20, 20, 20);	
}
