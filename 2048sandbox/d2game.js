var draw_grid = function(){
	/*var frame = new Rect(0,0,380, 380);
	frame.addTo(stage);
	frame.fill('blue');
	//Need to find a nice way to incorporate this*/
	var grid = new Group();

	var back_grid = new Rect(0, 0, 375, 375);
	var myColor = new color('green').midpoint('white'); 
	back_grid.fill(myColor);
	grid.addChild(back_grid);

	var a=50; var b=50; var c=40; var d=100; 

	var tile_0 = new Circle(a,b,c,d);
	tile_0.fill('white');
	grid.addChild(tile_0);

	a+=90; 
	var tile_1 = new Circle(a,b,c,d);
	tile_1.fill('white');
	grid.addChild(tile_1);

	a+=90;
	var tile_2 = new Circle(a,b,c,d);
	tile_2.fill('white');
	grid.addChild(tile_2);

	a+=90;
	var tile_3 = new Circle(a,b,c,d);
	tile_3.fill('white');
	grid.addChild(tile_3);

	b+=90;
	a=50;
	var tile_4 = new Circle(a,b,c,d);
	tile_4.fill('white');
	grid.addChild(tile_4);

	a+=90;
	var tile_5 = new Circle(a,b,c,d);
	tile_5.fill('white');
	grid.addChild(tile_5);

	a+=90;
	var tile_6 = new Circle(a,b,c,d);
	tile_6.fill('white');
	grid.addChild(tile_6);

	a+=90;
	var tile_7 = new Circle(a,b,c,d);
	tile_7.fill('white');
	grid.addChild(tile_7);

	b+=90;
	a=50;
	var tile_8 = new Circle(a,b,c,d);
	tile_8.fill('white');
	grid.addChild(tile_8);

	a+=90;	
	var tile_9 = new Circle(a,b,c,d);
	tile_9.fill('white');
	grid.addChild(tile_9);
	
	a+=90;
	var tile_10 = new Circle(a,b,c,d);
	tile_10.fill('white');
	grid.addChild(tile_10);

	a+=90;
	var tile_11 = new Circle(a,b,c,d);
	tile_11.fill('white');
	grid.addChild(tile_11);

	b+=90;
	a=50;
	var tile_12 = new Circle(a,b,c,d);
	tile_12.fill('white');
	grid.addChild(tile_12);

	a+=90;
	var tile_13 = new Circle(a,b,c,d);
	tile_13.fill('white');
	grid.addChild(tile_13);

	a+=90;
	var tile_14 = new Circle(a,b,c,d);
	tile_14.fill('white');
	grid.addChild(tile_14);

	a+=90;

	var tile_15 = new Circle(a,b,c,d);
	tile_15.addTo(stage);
	tile_15.fill('white');
	grid.addChild(tile_15);
	stage.addChild(grid);
}

var welcomeScreen = function(startBool){
	if (startBool === true){
		var ws = new Group();
		var ws_rect = new Rect(0,0,375,375);
		var myColor = new color('blue').midpoint('white');
		ws_rect.fill(myColor);
		ws.addChild(ws_rect);
		var text = new Text('Welcome! Press Enter.');
		text.attr({
		  x: 50, y: 175, textFillColor: 'black', opacity: 0.5,
		  fontFamily: 'Arial', fontSize: 25, fontWeight: 'bold'
		});
		ws.addChild(text);
		stage.addChild(ws);	
	}
	if (startBool == false){
		stage.removeChild(ws);
		draw_grid();
	}
}

var draw_pause_curtain = function(isPaused) {
	if (isPaused === true){
		var curtain = new Group(); 
		var curtain_rect = new Rect(0, 0, 375, 375);
		var myColor = new color('green').midpoint('gray');
		curtain_rect.fill(myColor);
		curtain.addChild(curtain_rect);
		var text = new Text('paused. press x to resume');
		text.attr({
		  x: 30, y: 175, textFillColor: 'black', opacity: 0.5,
		  fontFamily: 'Arial', fontSize: 25, fontWeight: 'bold'
		});
		curtain.addChild(text);
		stage.addChild(curtain);
	}
}

//NODE FUNCTIONS
var draw_a_2_node = function(posx, posy) {
	// 50 50 is at grid[0][0]
	var node2 = new Group();

	var node_backbun = new Circle(posx, posy, 40, 100);
	node_backbun.fill('red');
	node2.addChild(node_backbun);

	var node_meat = new Circle(posx, posy, 35, 100);
	node_meat.fill('white');
	node2.addChild(node_meat);

	var node_frontbun = new Circle(posx, posy, 30, 100);
	node_frontbun.fill('red');
	node2.addChild(node_frontbun);

	var text = new Text('2');
	text.attr({
	  x: (posx - 6), y: (posy - 9), textFillColor: 'black', opacity: 0.5,
	  fontFamily: 'Arial', fontSize: 25, fontWeight: 'bold'
	});
	node2.addChild(text);
	stage.addChild(node2);
}

var draw_a_4_node = function(posx, posy) {
	var node4 = new Group();

	var node_backbun = new Circle(posx, posy, 40, 100);
	node_backbun.fill('orange');
	node4.addChild(node_backbun);

	var node_meat = new Circle(posx, posy, 35, 100);
	node_meat.fill('white');
	node4.addChild(node_meat);

	var node_frontbun = new Circle(posx, posy, 30, 100);
	node_frontbun.fill('orange');
	node4.addChild(node_frontbun);

	var text = new Text('4');
	text.attr({
	  x: (posx - 6), y: (posy - 9), textFillColor: 'black', opacity: 0.5,
	  fontFamily: 'Arial', fontSize: 25, fontWeight: 'bold'
	});
	node4.addChild(text);
	stage.addChild(node4);
}

var draw_a_8_node = function(posx, posy) {
	var node8 = new Group();

	var node_backbun = new Circle(posx, posy, 40, 100);
	node_backbun.fill('yellow');
	node8.addChild(node_backbun);

	var node_meat = new Circle(posx, posy, 35, 100);
	node_meat.fill('white');
	node8.addChild(node_meat);

	var node_frontbun = new Circle(posx, posy, 30, 100);
	node_frontbun.fill('yellow');
	node8.addChild(node_frontbun);

	var text = new Text('8');
	text.attr({
	  x: (posx - 6), y: (posy - 9), textFillColor: 'black', opacity: 0.5,
	  fontFamily: 'Arial', fontSize: 25, fontWeight: 'bold'
	});
	node8.addChild(text);
	stage.addChild(node8);
}

var draw_a_16_node = function(posx, posy) {
	var node16 = new Group();
	var node_backbun = new Circle(posx, posy, 40, 100);
	node_backbun.fill('green');
	node16.addChild(node_backbun);

	var node_meat = new Circle(posx, posy, 35, 100);
	node_meat.fill('white');
	node16.addChild(node_meat);

	var node_frontbun = new Circle(posx, posy, 30, 100);
	node_frontbun.fill('green');
	node16.addChild(node_frontbun);

	var text = new Text('16');
	text.attr({
	  x: (posx-14), y: (posy - 9), textFillColor: 'black', opacity: 0.5,
	  fontFamily: 'Arial', fontSize: 25, fontWeight: 'bold'
	});
	node16.addChild(text);
	stage.addChild(node16);
}

var draw_a_32_node = function(posx, posy) {
	var node32 = new Group();

	var node_backbun = new Circle(posx, posy, 40, 100);
	node_backbun.fill('blue');
	node32.addChild(node_backbun);

	var node_meat = new Circle(posx, posy, 35, 100);
	node_meat.fill('white');
	node32.addChild(node_meat);	

	var node_frontbun = new Circle(posx, posy, 30, 100);
	node_frontbun.fill('blue');
	node32.addChild(node_frontbun);

	var text = new Text('32');
	text.attr({
	  x: (posx-14), y: (posy - 9), textFillColor: 'black', opacity: 0.5,
	  fontFamily: 'Arial', fontSize: 25, fontWeight: 'bold'
	});
	node32.addChild(text);
	stage.addChild(node32);
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

var draw_a_1024_node = function(posx, posy) {
	// 50 50 is at grid[0][0]
	var node_backbun = new Circle(posx, posy, 40, 100);
	node_backbun.addTo(stage);
	var myColor = new color('yellow').midpoint('white'); // -> pink

	node_backbun.fill(myColor);

	var node_meat = new Circle(posx, posy, 35, 100);
	node_meat.addTo(stage);
	node_meat.fill('white');

	var node_frontbun = new Circle(posx, posy, 30, 100);
	node_frontbun.addTo(stage);
	node_frontbun.fill(myColor);

	var text = new Text('1024');
	text.attr({
	  x: (posx-28), y: (posy - 9), textFillColor: 'black', opacity: 0.5,
	  fontFamily: 'Arial', fontSize: 25, fontWeight: 'bold'
	});
	stage.addChild(text);
}

var draw_a_2048_node = function(posx, posy) {
	// 50 50 is at grid[0][0]
	var node_backbun = new Circle(posx, posy, 40, 100);
	node_backbun.addTo(stage);
	var myColor = new color('green').midpoint('white'); // -> pink

	node_backbun.fill(myColor);

	var node_meat = new Circle(posx, posy, 35, 100);
	node_meat.addTo(stage);
	node_meat.fill('white');

	var node_frontbun = new Circle(posx, posy, 30, 100);
	node_frontbun.addTo(stage);
	node_frontbun.fill(myColor);

	var text = new Text('2048');
	text.attr({
	  x: (posx-28), y: (posy - 9), textFillColor: 'black', opacity: 0.5,
	  fontFamily: 'Arial', fontSize: 25, fontWeight: 'bold'
	});
	stage.addChild(text);
}

var draw_a_4096_node = function(posx, posy) {
	// 50 50 is at grid[0][0]
	var node_backbun = new Circle(posx, posy, 40, 100);
	node_backbun.addTo(stage);
	var myColor = new color('blue').midpoint('white'); // -> pink

	node_backbun.fill(myColor);

	var node_meat = new Circle(posx, posy, 35, 100);
	node_meat.addTo(stage);
	node_meat.fill('white');

	var node_frontbun = new Circle(posx, posy, 30, 100);
	node_frontbun.addTo(stage);
	node_frontbun.fill(myColor);

	var text = new Text('4096');
	text.attr({
	  x: (posx-28), y: (posy - 9), textFillColor: 'black', opacity: 0.5,
	  fontFamily: 'Arial', fontSize: 25, fontWeight: 'bold'
	});
	stage.addChild(text);
}

var draw_a_8192_node = function(posx, posy){
	var node_backbun = new Circle(posx, posy, 40, 100);
	node_backbun.addTo(stage);
	var myColor = new color('indigo').midpoint('white'); // -> pink

	node_backbun.fill(myColor);

	var node_meat = new Circle(posx, posy, 35, 100);
	node_meat.addTo(stage);
	node_meat.fill('white');

	var node_frontbun = new Circle(posx, posy, 30, 100);
	node_frontbun.addTo(stage);
	node_frontbun.fill(myColor);

	var text = new Text('8192');
	text.attr({
	  x: (posx-28), y: (posy - 9), textFillColor: 'black', opacity: 0.5,
	  fontFamily: 'Arial', fontSize: 25, fontWeight: 'bold'
	});
	stage.addChild(text);
}
/*
draw_a_2_node(50,50);
draw_a_4_node(50,140); //[50][140] is at grid [1][0]
draw_a_8_node(50, 230);//[50][230] is at grid [2][0]
draw_a_16_node(50, 320);//[50][320] is at grid [3][0]
draw_a_32_node(140, 50);//[50][320] is at grid [3][0]
draw_a_64_node(140, 140);
draw_a_128_node(140, 230);
draw_a_256_node(140, 320);
draw_a_512_node(230, 50);
draw_a_1024_node(230, 140);
draw_a_2048_node(230, 230);
draw_a_4096_node(230, 320);
draw_a_8192_node(320, 50);
*/
/*
{
	{50,50}		{140,50}	{230,50} 	{320,50}
	{50,140}	{140,140}	{230,140}	{320,140}
	{50,230}	{140,230}	{230,230}	{320,230}
	{50,320}	{140,320}	{230,320}	{320,320}
}
*/
//draw_pause_curtain(false);



var main = function()
{
	
}

main();