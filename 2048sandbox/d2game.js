var dg = function(){
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
dg();

var draw_a_2_node = function(posx, posy) {
	// 50 50 is at grid[0][0]
	var node_2_backbun = new Circle(posx, posy, 40, 100);
	node_2_backbun.addTo(stage);
	node_2_backbun.fill('red');

	var node_2_meat = new Circle(posx, posy, 35, 100);
	node_2_meat.addTo(stage);
	node_2_meat.fill('white');

	var node_2_frontbun = new Circle(posx, posy, 30, 100);
	node_2_frontbun.addTo(stage);
	node_2_frontbun.fill('red');

	var text = new Text('2');
	text.attr({
	  x: (posx - 6), y: (posy - 9), textFillColor: 'black', opacity: 0.5,
	  fontFamily: 'Arial', fontSize: 25, fontWeight: 'bold'
	});
	stage.addChild(text);
}

var draw_a_4_node = function(posx, posy) {
	// 50 50 is at grid[0][0]
	var node_2_backbun = new Circle(posx, posy, 40, 100);
	node_2_backbun.addTo(stage);
	node_2_backbun.fill('orange');

	var node_2_meat = new Circle(posx, posy, 35, 100);
	node_2_meat.addTo(stage);
	node_2_meat.fill('white');

	var node_2_frontbun = new Circle(posx, posy, 30, 100);
	node_2_frontbun.addTo(stage);
	node_2_frontbun.fill('orange');

	var text = new Text('4');
	text.attr({
	  x: (posx - 6), y: (posy - 9), textFillColor: 'black', opacity: 0.5,
	  fontFamily: 'Arial', fontSize: 25, fontWeight: 'bold'
	});
	stage.addChild(text);
}
//draw_a_2_node(50,50);
draw_a_4_node(50,140); //[50][140] is at grid [1][0]
 