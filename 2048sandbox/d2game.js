var draw_grid = function(){
	/*var frame = new Rect(0,0,380, 380);
	frame.addTo(stage);
	frame.fill('blue');
	//Need to find a nice way to incorporate this*/
	var back_grid = new Rect(0, 0, 375, 375);
	back_grid.addTo(stage);
	back_grid.fill('gray');

	var a=50; var b=50; var c=40; var d=100; 

	var tile_0 = new Circle(a,b,c,d);
	tile_0.addTo(stage);
	tile_0.fill('white');

	a+=90; 
	var tile_1 = new Circle(a,b,c,d);
	tile_1.addTo(stage);
	tile_1.fill('white');

	a+=90;
	var tile_2 = new Circle(a,b,c,d);
	tile_2.addTo(stage);
	tile_2.fill('white');

	a+=90;
	var tile_3 = new Circle(a,b,c,d);
	tile_3.addTo(stage);
	tile_3.fill('white');

	b+=90;
	a=50;
	var tile_4 = new Circle(a,b,c,d);
	tile_4.addTo(stage);
	tile_4.fill('white');

	a+=90;
	var tile_5 = new Circle(a,b,c,d);
	tile_5.addTo(stage);
	tile_5.fill('white');

	a+=90;
	var tile_6 = new Circle(a,b,c,d);
	tile_6.addTo(stage);
	tile_6.fill('white');

	a+=90;
	var tile_7 = new Circle(a,b,c,d);
	tile_7.addTo(stage);
	tile_7.fill('white');

	b+=90;
	a=50;
	var tile_8 = new Circle(a,b,c,d);
	tile_8.addTo(stage);
	tile_8.fill('white');

	a+=90;	
	var tile_9 = new Circle(a,b,c,d);
	tile_9.addTo(stage);
	tile_9.fill('white');

	a+=90;
	var tile_10 = new Circle(a,b,c,d);
	tile_10.addTo(stage);
	tile_10.fill('white');
	a+=90;

	var tile_11 = new Circle(a,b,c,d);
	tile_11.addTo(stage);
	tile_11.fill('white');

	b+=90;
	a=50;
	var tile_12 = new Circle(a,b,c,d);
	tile_12.addTo(stage);
	tile_12.fill('white');

	a+=90;
	var tile_13 = new Circle(a,b,c,d);
	tile_13.addTo(stage);
	tile_13.fill('white');

	a+=90;
	var tile_14 = new Circle(a,b,c,d);
	tile_14.addTo(stage);
	tile_14.fill('white');
	a+=90;

	var tile_15 = new Circle(a,b,c,d);
	tile_15.addTo(stage);
	tile_15.fill('white');
}

var draw_a_2_node = function(posx, posy) {
	// 50 50 is at grid[0][0]
	var node_backbun = new Circle(posx, posy, 40, 100);
	node_backbun.addTo(stage);
	node_backbun.fill('red');

	var node_meat = new Circle(posx, posy, 35, 100);
	node_meat.addTo(stage);
	node_meat.fill('white');

	var node_frontbun = new Circle(posx, posy, 30, 100);
	node_frontbun.addTo(stage);
	node_frontbun.fill('red');

	var text = new Text('2');
	text.attr({
	  x: (posx - 6), y: (posy - 9), textFillColor: 'black', opacity: 0.5,
	  fontFamily: 'Arial', fontSize: 25, fontWeight: 'bold'
	});
	stage.addChild(text);
}

var draw_a_4_node = function(posx, posy) {
	// 50 50 is at grid[0][0]
	var node_backbun = new Circle(posx, posy, 40, 100);
	node_backbun.addTo(stage);
	node_backbun.fill('orange');

	var node_meat = new Circle(posx, posy, 35, 100);
	node_meat.addTo(stage);
	node_meat.fill('white');

	var node_frontbun = new Circle(posx, posy, 30, 100);
	node_frontbun.addTo(stage);
	node_frontbun.fill('orange');

	var text = new Text('4');
	text.attr({
	  x: (posx - 6), y: (posy - 9), textFillColor: 'black', opacity: 0.5,
	  fontFamily: 'Arial', fontSize: 25, fontWeight: 'bold'
	});
	stage.addChild(text);
}

var draw_a_8_node = function(posx, posy) {
	// 50 50 is at grid[0][0]
	var node_backbun = new Circle(posx, posy, 40, 100);
	node_backbun.addTo(stage);
	node_backbun.fill('yellow');

	var node_meat = new Circle(posx, posy, 35, 100);
	node_meat.addTo(stage);
	node_meat.fill('white');

	var node_frontbun = new Circle(posx, posy, 30, 100);
	node_frontbun.addTo(stage);
	node_frontbun.fill('yellow');

	var text = new Text('8');
	text.attr({
	  x: (posx - 6), y: (posy - 9), textFillColor: 'black', opacity: 0.5,
	  fontFamily: 'Arial', fontSize: 25, fontWeight: 'bold'
	});
	stage.addChild(text);
}

var draw_a_16_node = function(posx, posy) {
	// 50 50 is at grid[0][0]
	var node_backbun = new Circle(posx, posy, 40, 100);
	node_backbun.addTo(stage);
	node_backbun.fill('green');

	var node_meat = new Circle(posx, posy, 35, 100);
	node_meat.addTo(stage);
	node_meat.fill('white');

	var node_frontbun = new Circle(posx, posy, 30, 100);
	node_frontbun.addTo(stage);
	node_frontbun.fill('green');

	var text = new Text('16');
	text.attr({
	  x: (posx-14), y: (posy - 9), textFillColor: 'black', opacity: 0.5,
	  fontFamily: 'Arial', fontSize: 25, fontWeight: 'bold'
	});
	stage.addChild(text);
}

var draw_a_32_node = function(posx, posy) {
	// 50 50 is at grid[0][0]
	var node_backbun = new Circle(posx, posy, 40, 100);
	node_backbun.addTo(stage);
	node_backbun.fill('blue');

	var node_meat = new Circle(posx, posy, 35, 100);
	node_meat.addTo(stage);
	node_meat.fill('white');

	var node_frontbun = new Circle(posx, posy, 30, 100);
	node_frontbun.addTo(stage);
	node_frontbun.fill('blue');

	var text = new Text('32');
	text.attr({
	  x: (posx-14), y: (posy - 9), textFillColor: 'black', opacity: 0.5,
	  fontFamily: 'Arial', fontSize: 25, fontWeight: 'bold'
	});
	stage.addChild(text);
}

var draw_a_64_node = function(posx, posy) {
	// 50 50 is at grid[0][0]
	var node_backbun = new Circle(posx, posy, 40, 100);
	node_backbun.addTo(stage);
	node_backbun.fill('indigo');

	var node_meat = new Circle(posx, posy, 35, 100);
	node_meat.addTo(stage);
	node_meat.fill('white');

	var node_frontbun = new Circle(posx, posy, 30, 100);
	node_frontbun.addTo(stage);
	node_frontbun.fill('indigo');

	var text = new Text('64');
	text.attr({
	  x: (posx-14), y: (posy - 9), textFillColor: 'black', opacity: 0.5,
	  fontFamily: 'Arial', fontSize: 25, fontWeight: 'bold'
	});
	stage.addChild(text);
}

var draw_a_128_node = function(posx, posy) {
	// 50 50 is at grid[0][0]
	var node_backbun = new Circle(posx, posy, 40, 100);
	node_backbun.addTo(stage);
	node_backbun.fill('violet');

	var node_meat = new Circle(posx, posy, 35, 100);
	node_meat.addTo(stage);
	node_meat.fill('white');

	var node_frontbun = new Circle(posx, posy, 30, 100);
	node_frontbun.addTo(stage);
	node_frontbun.fill('violet');

	var text = new Text('128');
	text.attr({
	  x: (posx-20), y: (posy - 9), textFillColor: 'black', opacity: 0.5,
	  fontFamily: 'Arial', fontSize: 25, fontWeight: 'bold'
	});
	stage.addChild(text);
}

var draw_a_256_node = function(posx, posy) {
	// 50 50 is at grid[0][0]
	var node_backbun = new Circle(posx, posy, 40, 100);
	node_backbun.addTo(stage);
	var myColor = new color('red').midpoint('white'); // -> pink

	node_backbun.fill(myColor);

	var node_meat = new Circle(posx, posy, 35, 100);
	node_meat.addTo(stage);
	node_meat.fill('white');

	var node_frontbun = new Circle(posx, posy, 30, 100);
	node_frontbun.addTo(stage);
	node_frontbun.fill(myColor);

	var text = new Text('256');
	text.attr({
	  x: (posx-20), y: (posy - 9), textFillColor: 'black', opacity: 0.5,
	  fontFamily: 'Arial', fontSize: 25, fontWeight: 'bold'
	});
	stage.addChild(text);
}

var draw_a_512_node = function(posx, posy) {
	// 50 50 is at grid[0][0]
	var node_backbun = new Circle(posx, posy, 40, 100);
	node_backbun.addTo(stage);
	var myColor = new color('orange').midpoint('white'); // -> pink

	node_backbun.fill(myColor);

	var node_meat = new Circle(posx, posy, 35, 100);
	node_meat.addTo(stage);
	node_meat.fill('white');

	var node_frontbun = new Circle(posx, posy, 30, 100);
	node_frontbun.addTo(stage);
	node_frontbun.fill(myColor);

	var text = new Text('512');
	text.attr({
	  x: (posx-20), y: (posy - 9), textFillColor: 'black', opacity: 0.5,
	  fontFamily: 'Arial', fontSize: 25, fontWeight: 'bold'
	});
	stage.addChild(text);
}

draw_grid();
draw_a_2_node(50,50);
draw_a_4_node(50,140); //[50][140] is at grid [1][0]
draw_a_8_node(50, 230);//[50][230] is at grid [2][0]
draw_a_16_node(50, 320);//[50][320] is at grid [3][0]
draw_a_32_node(140, 50);//[50][320] is at grid [3][0]
draw_a_64_node(140, 140);
draw_a_128_node(140, 230);
draw_a_256_node(140, 320);
draw_a_512_node(230, 50);