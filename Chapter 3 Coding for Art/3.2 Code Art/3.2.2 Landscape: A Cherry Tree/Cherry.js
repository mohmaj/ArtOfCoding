(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.windBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("wind", "bold 22px 'Myriad Pro'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 51;
	this.text.parent = this;
	this.text.setTransform(39.8,5.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BDBDBD","#000000"],[0,1],0,-40.2,0,40.2).s().p("AmRDFIAAmJIMjAAIAAGJg");
	this.shape.setTransform(40.2,19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.5,39.5);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CB5D27").s().p("Ai4C5QhNhNAAhsQAAhrBNhNQBNhNBrAAQBsAABNBNQBNBNAABrQAABshNBNQhNBNhsAAQhrAAhNhNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.2,-26.2,52.4,52.4);


(lib.sunsetBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("sunset", "bold 22px 'Myriad Pro'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 66;
	this.text.parent = this;
	this.text.setTransform(40.4,3.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BDBDBD","#000000"],[0,1],0,-40.2,0,40.2).s().p("AmRDFIAAmJIMjAAIAAGJg");
	this.shape.setTransform(40.2,19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.5,39.5);


(lib.startBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("start", "bold 22px 'Myriad Pro'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 48;
	this.text.parent = this;
	this.text.setTransform(39.3,5.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BDBDBD","#000000"],[0,1],0,-40.2,0,40.2).s().p("AmRDFIAAmJIMjAAIAAGJg");
	this.shape.setTransform(40.2,19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.5,39.5);


(lib.fallingleaf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD61BE").s().p("AhCA+QgHgCgGgGQgFgHABgIQACgGAGgGIANgKIAegZQALgIASgKIAygdQASgJAJAEQAJADABALQABAKgGAIQgGAJgYALQgnARgYAZQgSARgFAEQgMAIgKAAIgHgBg");
	this.shape.setTransform(8.4,6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DD61BE").s().p("AhQApQgHgDgDgIQgDgIACgHQAEgGAHgEIAQgFIAjgSQANgFATgFIA5gOQAUgFAHAHQAIAFgCALQgCAJgHAHQgJAHgZADQgrAIgeARIgbAPQgJADgHAAQgIAAgGgEg");
	this.shape_1.setTransform(8.5,6.4,1,1,24.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DD61BE").s().p("AArAYQgqgKgjACQgYADgGgBQgTgCgIgLQgFgFAAgIQABgJAFgFQAGgEAIgBQADAAAOACIAngCQAOABATADIA6ALQAUAEADAIQAGAIgHAJQgFAIgJACIgJABQgLAAgQgEg");
	this.shape_2.setTransform(8.7,6.3,1,1,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DD61BE").s().p("AAjAiQglgUgjgHQgYgEgGgCQgSgGgFgNQgCgGACgJQADgIAGgEQAGgBAIABQAEAAAMAFIAnAJQAMAEASAIIA1AZQATAJABAJQADAKgIAHQgIAGgJAAIgBAAQgLAAgWgNg");
	this.shape_3.setTransform(8.7,6.3,1,1,-15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DD61BE").s().p("AArAXQgqgJgjACQgYACgGAAQgTgCgIgLQgEgFgBgJQABgIAFgGQAGgDAIgBQADgBAOADIAngCIAhAEIA6ALQAUADAEAJQAFAIgGAJQgGAIgJACIgIABQgLAAgRgFg");
	this.shape_4.setTransform(8.7,6.4,1,1,-15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DD61BE").s().p("AhXAbQgFgEgDgJQgBgIADgGQAFgFAIgCQACgCAOgCIAmgLIAggGIA7gEQAVgCAGAIQAGAHgDALQgDAIgJAEQgKAGgaAAQgqABgiAMQgWAIgGABIgJABQgNAAgIgGg");
	this.shape_5.setTransform(8.8,6.6,1,1,-15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DD61BE").s().p("AhMAyQgGgDgFgIQgDgHABgIQADgGAIgEQABgDANgFIAigUIAegOIA3gTQAUgHAIAGQAIAFAAALQgBAJgIAHQgIAJgZAGQgoALgeAUIgYARQgMAFgJAAQgFAAgFgCg");
	this.shape_6.setTransform(8.7,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{rotation:0}}]}).to({state:[{t:this.shape,p:{rotation:15}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.8,12.5);


(lib.sun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(26.2,26.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sun, new cjs.Rectangle(0,0,52.4,52.4), null);


// stage content:
(lib.Cherry = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{beginPoint:0,loopPoint:37,sunPoint:50});

	// timeline functions:
	this.frame_0 = function() {
		this.stop(); //Prevent the animation from playing automatically
		
		this.playBtn.addEventListener("click", playClicked.bind(this));  //Add event listeners to all three buttons
		this.windBtn.addEventListener("click", windClicked.bind(this));
		this.sunsetBtn.addEventListener("click", sunsetClicked.bind(this));
		
		function playClicked(){  //Functions called by event listeners
			this.gotoAndPlay("beginPoint");
		}
		function windClicked(){
			this.gotoAndPlay("loopPoint");
		}
		function sunsetClicked(){
			this.gotoAndPlay("sunPoint");
		}
	}
	this.frame_36 = function() {
		this.gotoAndStop("beginPoint"); //Returns to beginning of animation and stops
	}
	this.frame_49 = function() {
		this.gotoAndPlay("loopPoint"); //Returns to 'loopPoint' and starts
	}
	this.frame_124 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(36).call(this.frame_36).wait(13).call(this.frame_49).wait(75).call(this.frame_124).wait(1));

	// nav
	this.sunsetBtn = new lib.sunsetBtn();
	this.sunsetBtn.parent = this;
	this.sunsetBtn.setTransform(411.8,351.5);
	new cjs.ButtonHelper(this.sunsetBtn, 0, 1, 1);

	this.windBtn = new lib.windBtn();
	this.windBtn.parent = this;
	this.windBtn.setTransform(411.8,283.6);
	new cjs.ButtonHelper(this.windBtn, 0, 1, 1);

	this.playBtn = new lib.startBtn();
	this.playBtn.parent = this;
	this.playBtn.setTransform(60.2,306.7,1,1,0,0,0,40.2,19.7);
	new cjs.ButtonHelper(this.playBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.playBtn},{t:this.windBtn},{t:this.sunsetBtn}]}).to({state:[{t:this.playBtn},{t:this.windBtn},{t:this.sunsetBtn}]},124).wait(1));

	// Layer 11
	this.instance = new lib.fallingleaf();
	this.instance.parent = this;
	this.instance.setTransform(439.9,178.1,1,1,0,0,0,8.4,6.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:8.6,regY:6.2,y:184},0).wait(1).to({x:439.8,y:190.1},0).wait(1).to({x:439.6,y:196.1},0).wait(1).to({x:439.5,y:202.2},0).wait(1).to({x:439.3,y:208.3},0).wait(1).to({x:439.2,y:214.3},0).wait(1).to({x:439,y:220.4},0).wait(1).to({x:438.8,y:226.4},0).wait(1).to({x:438.7,y:232.5},0).wait(1).to({x:438.5,y:238.6},0).wait(1).to({x:438.4,y:244.6},0).wait(1).to({x:438.2,y:250.7},0).wait(1).to({x:438,y:256.8},0).wait(1).to({x:437.9,y:262.8},0).wait(1).to({x:437.7,y:268.9},0).wait(1).to({x:437.6,y:274.9},0).wait(1).to({x:437.4,y:281},0).wait(1).to({x:437.3,y:287.1},0).wait(1).to({x:437.1,y:293.1},0).wait(1).to({x:436.9,y:299.2},0).wait(1).to({x:436.8,y:305.2},0).wait(1).to({x:436.6,y:311.3},0).wait(1).to({x:436.5,y:317.4},0).wait(1).to({x:436.3,y:323.4},0).wait(1).to({x:436.2,y:329.5},0).wait(1).to({x:436,y:335.6},0).wait(1).to({x:435.8,y:341.6},0).wait(1).to({x:435.7,y:347.7},0).wait(1).to({x:435.5,y:353.7},0).wait(1).to({x:435.4,y:359.8},0).wait(1).to({x:435.2,y:365.9},0).wait(1).to({x:435,y:371.9},0).wait(1).to({x:434.9,y:378},0).wait(1).to({x:434.7,y:384.1},0).wait(1).to({x:434.6,y:390.1},0).wait(1).to({x:434.4,y:396.2},0).wait(1).to({x:434.3,y:402.2},0).wait(1).to({x:434.1,y:408.3},0).wait(85).to({regX:8.4,regY:6.3,x:433.9,y:408.4},0).wait(1));

	// Layer 13
	this.instance_1 = new lib.fallingleaf();
	this.instance_1.parent = this;
	this.instance_1.setTransform(334.2,270.1,1,1,0,0,0,8.4,6.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({regX:8.6,regY:6.2,x:334.1,y:274.2},0).wait(1).to({x:333.9,y:278.5},0).wait(1).to({x:333.6,y:282.8},0).wait(1).to({x:333.4,y:287.1},0).wait(1).to({x:333.1,y:291.4},0).wait(1).to({x:332.9,y:295.7},0).wait(1).to({x:332.6,y:300},0).wait(1).to({x:332.4,y:304.3},0).wait(1).to({x:332.1,y:308.6},0).wait(1).to({x:331.9,y:312.9},0).wait(1).to({x:331.6,y:317.2},0).wait(1).to({x:331.4,y:321.5},0).wait(1).to({x:331.1,y:325.8},0).wait(1).to({x:330.9,y:330.1},0).wait(1).to({x:330.6,y:334.4},0).wait(1).to({x:330.4,y:338.7},0).wait(1).to({x:330.1,y:343},0).wait(1).to({x:329.9,y:347.3},0).wait(1).to({x:329.6,y:351.6},0).wait(1).to({x:329.3,y:355.8},0).wait(1).to({x:329.1,y:360.1},0).wait(1).to({x:328.8,y:364.4},0).wait(1).to({x:328.6,y:368.7},0).wait(1).to({x:328.3,y:373},0).wait(1).to({x:328.1,y:377.3},0).wait(1).to({x:327.8,y:381.6},0).wait(1).to({x:327.6,y:385.9},0).wait(1).to({x:327.3,y:390.2},0).wait(1).to({x:327.1,y:394.5},0).wait(1).to({x:326.8,y:398.8},0).wait(1).to({x:326.6,y:403.1},0).wait(1).to({x:326.3,y:407.4},0).wait(1).to({x:326.1,y:411.7},0).wait(1).to({x:325.8,y:416},0).wait(1).to({x:325.6,y:420.3},0).wait(1).to({x:325.3,y:424.6},0).wait(1).to({x:325.1,y:428.9},0).wait(1).to({x:324.8,y:433.2},0).wait(85).to({regX:8.4,regY:6.3,x:324.6,y:433.3},0).wait(1));

	// Layer 12
	this.instance_2 = new lib.fallingleaf();
	this.instance_2.parent = this;
	this.instance_2.setTransform(387.8,248.5,1,1,0,0,0,8.4,6.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1).to({regX:8.6,regY:6.2,x:388,y:253},0).wait(1).to({y:257.7},0).wait(1).to({y:262.4},0).wait(1).to({y:267.1},0).wait(1).to({y:271.8},0).wait(1).to({y:276.5},0).wait(1).to({y:281.2},0).wait(1).to({y:285.9},0).wait(1).to({y:290.6},0).wait(1).to({y:295.3},0).wait(1).to({y:300},0).wait(1).to({y:304.7},0).wait(1).to({y:309.4},0).wait(1).to({y:314.1},0).wait(1).to({y:318.8},0).wait(1).to({y:323.5},0).wait(1).to({y:328.2},0).wait(1).to({y:332.9},0).wait(1).to({y:337.6},0).wait(1).to({y:342.2},0).wait(1).to({y:346.9},0).wait(1).to({y:351.6},0).wait(1).to({y:356.3},0).wait(1).to({y:361},0).wait(1).to({y:365.7},0).wait(1).to({y:370.4},0).wait(1).to({y:375.1},0).wait(1).to({y:379.8},0).wait(1).to({y:384.5},0).wait(1).to({y:389.2},0).wait(1).to({y:393.9},0).wait(1).to({y:398.6},0).wait(1).to({y:403.3},0).wait(1).to({y:408},0).wait(1).to({y:412.7},0).wait(1).to({y:417.4},0).wait(1).to({y:422.1},0).wait(1).to({y:426.8},0).wait(85).to({regX:8.4,regY:6.3,x:387.8,y:426.9},0).wait(1));

	// Layer 9
	this.instance_3 = new lib.fallingleaf();
	this.instance_3.parent = this;
	this.instance_3.setTransform(91.8,250.2,1,1,0,0,0,8.4,6.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1).to({regX:8.6,regY:6.2,x:91.5,y:254.7},0).wait(1).to({x:90.9,y:259.4},0).wait(1).to({x:90.4,y:264},0).wait(1).to({x:89.8,y:268.7},0).wait(1).to({x:89.3,y:273.3},0).wait(1).to({x:88.7,y:278},0).wait(1).to({x:88.2,y:282.6},0).wait(1).to({x:87.6,y:287.3},0).wait(1).to({x:87.1,y:291.9},0).wait(1).to({x:86.5,y:296.6},0).wait(1).to({x:86,y:301.2},0).wait(1).to({x:85.4,y:305.9},0).wait(1).to({x:84.9,y:310.5},0).wait(1).to({x:84.3,y:315.2},0).wait(1).to({x:83.8,y:319.8},0).wait(1).to({x:83.2,y:324.5},0).wait(1).to({x:82.7,y:329.1},0).wait(1).to({x:82.1,y:333.8},0).wait(1).to({x:81.6,y:338.4},0).wait(1).to({x:81.1,y:343.1},0).wait(1).to({x:80.5,y:347.7},0).wait(1).to({x:80,y:352.4},0).wait(1).to({x:79.4,y:357},0).wait(1).to({x:78.9,y:361.7},0).wait(1).to({x:78.3,y:366.3},0).wait(1).to({x:77.8,y:371},0).wait(1).to({x:77.2,y:375.6},0).wait(1).to({x:76.7,y:380.3},0).wait(1).to({x:76.1,y:384.9},0).wait(1).to({x:75.6,y:389.6},0).wait(1).to({x:75,y:394.2},0).wait(1).to({x:74.5,y:398.9},0).wait(1).to({x:73.9,y:403.5},0).wait(1).to({x:73.4,y:408.2},0).wait(1).to({x:72.8,y:412.8},0).wait(1).to({x:72.3,y:417.4},0).wait(1).to({x:71.7,y:422.1},0).wait(1).to({x:71.2,y:426.8},0).wait(85).to({regX:8.4,regY:6.3,x:71,y:426.9},0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#332F29").s().p("AC2BrYAAAAgEgFgIgKYgEgEgEgGgGgHYgGgGgHgIgIgIYgHgHgIgIgIgJYgJgIgKgJgKgJYgKgHgLgJgLgIYgLgJgMgIgMgIYgLgHgLgIgMgHYgLgHgNgGgMgGYgGgDgFgDgGgDYgGgDgFgDgGgCYgLgFgLgEgJgEYgFgCgFgCgEgCYgFgBgEgBgEgCYgIgCgHgCgGgCYgMgEgHgCAAAAIAAAAYAAAAAHADALAEYAGADAHADAHADYAEABAEACAFACYAEACAFACAEADYAJAFAKAFALAFYAFADAFADAGADYAFAEAFADAGADYALAHALAHALAJYALAIALAIAKAIYAKAJALAJAKAJYAJAIAKAJAJAJYAJAKAIAIAIAJYAIAJAHAJAHAIYAGAIAFAHAFAGYAFAHAEAGADAFYAHAKAEAGAAAAYAGAJANADAJgHYAJgGACgMgGgJYAAgBgBAAAAgB");
	this.shape.setTransform(187.3,293.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#332F29").s().p("AgHAzYAAAAAAgCACgDYAAgBAAgBABgBIAAAAYgBACAAgCAAABIAAAAIAAAAIAAgBIAAAAIABgBYAAAAAAgBAAAAYABgDACgCABgDYAEgLAGgPAHgOYABgEADgDABgDYACgEACgDACgDYAEgHADgGADgFYAGgLAEgHAAAAIAAAAYAAAAgGAGgJAIYgFAEgFAFgFAFYgDADgDADgDADYgDADgDACgDADYgKANgLALgIAJYgCACgBACgCACIgBABIgBABIAAAAIAAAAIAAAAIAAAAIgBABIAAAAYgBABAAABgBABYgCADgBABAAAAYgHAJABANAJAHYAJAHANgCAGgJYACgBABgCABgC");
	this.shape_1.setTransform(319.1,289.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#332F29").s().p("Ag1BWYAAAAACgDADgFYACgDACgDADgEYAAgBABgBABgBIAAAAYAAAAAAgBAAAAIACgBYABgCACgCABgDYAHgIAHgLAIgLYAIgLAIgMAJgLYAJgLAJgMAIgKYAEgGAEgFAEgFYAEgEAEgFAEgEYAEgEADgEADgCYAEgDADgDACgCYAFgEADgCAAAAIAAAAYAAAAgDACgGADYgDACgDACgEACYgEACgEADgEAEYgFADgEADgGAFYgEAEgFAEgFAFYgKAJgLAKgKAKYgLAKgLALgJAIYgKAKgKAJgHAHYgCACgCACgCACIgBABIgCACYgBABgBABAAAAYgDAEgDACgCADYgFAEgCADAAAAYgIAIAAANAIAHYAIAIANAAAHgIYABgBABgBABgB");
	this.shape_2.setTransform(258.2,222.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#332F29").s().p("AggC3YAAAAADgFAEgKYADgFACgGADgGYACgEACgEACgEYABgEACgEACgEYADgJADgJAEgJYAEgKAEgLAEgLYAEgLADgMAEgLYAEgMADgMADgKYAEgMADgMADgMYACgMADgMACgLYACgLACgLACgLYACgKABgKABgJYACgJABgIABgIYAAgHABgHAAgFYABgLABgGAAAAIAAAAYAAAAgBAGgCALYgBAFgCAGgBAIYgBAHgDAIgCAJYgCAJgCAJgDAKYgDALgDAKgDALYgDALgEALgEALYgEAMgEALgFALYgEALgEALgFALYgFAKgDALgFAKYgFAKgFAKgFAJYgFAKgEAIgFAIYgCAEgCAEgCAEYgCADgCADgCADYgDAHgEAFgCAFYgGAJgDAFAAAAYgGAKADAMAKAGYAJAGAMgEAGgJYABgBAAAAAAgB");
	this.shape_3.setTransform(295.4,211);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#332F29").s().p("AhmgEYAAAAADACAFACYADABADABAEACYACABACABACABYABAAACABABAAIAAABIACAAIAAAAIAAAAIABABIACAAYAJAEAMAEAMAEYADABADABADABYAEABADABAEABYAHABAHACAGACYAHABAHADAGAAYAHABAHABAHABYAGAAAHABAFABYAGABAGgBAFAAYAVABAOAAAAAAIAAAAYAAAAgNgDgVgEYgFgBgFAAgGgCYgGgCgGgCgGgCYgGgCgGgCgGgCYgHgBgGgEgGgCYgGgDgFgDgGgCYgDgBgDgCgDgBYgDgBgDgBgDgCYgLgGgKgGgJgFYgRgMgKgHAAAAYgKgHgMACgGAKYgHAJACAMAKAHYAAAAACABABAA");
	this.shape_4.setTransform(321.3,231.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#332F29").s().p("AB3BaYAAAAgEgEgFgGYgDgEgEgEgEgEYgEgFgFgFgGgGYgDgDgDgDgDgDIgCgCIgDgCYgBgCgCgBgCgBYgGgGgHgGgHgGYgHgGgIgGgIgGYgIgGgIgGgHgGYgHgGgIgGgIgGYgIgGgIgGgHgGYgHgGgHgGgHgFYgHgFgGgGgFgFYgGgFgFgEgFgEYgEgFgEgDgDgDYgGgHgDgDAAAAIAAAAYAAAAADAEAFAHYADADADAEAEAFYAEAFAEAFAFAGYAFAFAGAHAGAGYAGAGAGAHAHAGYAGAHAHAHAHAHYAHAHAHAHAHAHYAHAGAHAHAGAHYAHAHAHAGAGAHYAGAHAGAHAGAHYABABACACABABIACADYAAAAABABABAAYACAEACACACADYAFAGAEAFADAEYAEAFADAFACAEYAFAHADAEAAAAIAAAAYAGAJAMADAJgGYAKgGACgNgGgJYAAgBgBAAAAgB");
	this.shape_5.setTransform(105.3,220.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#332F29").s().p("AB+gvYAAAAgFAAgIABYgEAAgEABgGAAYgFABgGAAgIACYgHABgHABgIACYgCAAgCAAgCABIgCAAYgCAAABAAgBABIgDAAYgEABgEABgEACYgEABgEABgEABYgFABgEACgEABYgIADgJADgIAEYgJAEgIADgIAEYgIAEgIADgIAEYgOAIgOAIgMAHYgGADgFADgFACYgFADgEABgEACYgHACgEACAAAAIAAAAYAAAAAEgBAIgCYADgBAFgBAFgCYAGgBAFgCAHgCYAGgDAHgDAHgDYAHgCAIgDAIgEYAIgCAIgDAIgDYAIgDAJgCAIgCYAJgDAHAAAIgCYAFAAAEgBAEgBYAEgBAEAAAEgBYAFAAAEgBAEAAIADgBYAAAAABAAAAAAIABAAYACAAACAAACAAYAHAAAHAAAGgBYAGAAAGAAAGABYAFAAAFAAAEAAYAIABAEAAAAAAYALABAKgJAAgLYABgLgJgJgLgBYAAAAgBAAgBAA");
	this.shape_6.setTransform(104.7,244.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#332F29").s().p("AASCsYAAAAABgXACgiYAAgRABgUAAgVYAAgLAAgLAAgLYAAgLAAgMAAgKYgBgLAAgMAAgLYgBgLgBgLAAgLYgBgKAAgKgBgKYAAgKgCgJAAgIYgDgigDgXAAAAIAAAAYAAAAAAAXAAAiYgBAIABAJgBAKYgBAKAAAKgBAKYAAALgBALgBALYAAALgBALgBALYgBAKgBAMgBALYAAAKgCALgBALYgDAVgDATgCARYgFAhgEAWAAAAYgCALAHAKALACYAKACALgHABgLYABgBAAgBAAAA");
	this.shape_7.setTransform(95.6,104.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#332F29").s().p("AAUDVYAAAAAAgHAAgNYgBgGAAgHAAgJYAAgIgBgKAAgLYgCgpgDg4gCg3YgBgHAAgGAAgHYgBgHAAgHgBgHYgBgOgBgNgBgNYgDgagCgZgBgVYgDgpgCgcAAAAIAAAAYAAAAgBAcAAAqYAAAVAAAYAAAaYAAANAAANAAAOYAAAHAAAHAAAHYgBAHAAAHAAAGYgDA3gCA4gCAqYAAAKgBAJAAAJYgBAIAAAHgBAGYAAANgBAHAAAAYgBALAJAJALABYAKABAJgJABgLYAAAAAAgBAAAA");
	this.shape_8.setTransform(129.3,123.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#332F29").s().p("ABwAvYAAAAg9geg8gdYgIgEgHgDgHgEYgIgEgHgEgHgEYgHgEgGgEgGgEYgGgDgGgEgFgEYgFgEgFgDgEgDYgEgEgDgCgDgDYgGgFgDgCAAAAIAAAAYAAAAADADAFAFYACADADAEADAEYAEAEAEADAFAFYAFAEAFAFAFAFYAGAFAGAFAGAFYAGAFAHAFAHAFYAHAFAHAEAHAFYA3AmA4AnAAAAYAJAGAMgCAHgJYAGgJgCgNgJgGYgBgBgBAAgBgBIAAAA");
	this.shape_9.setTransform(76.8,151.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#332F29").s().p("ACXgXYAAAAgUABgfABYgPABgSABgTABIgEAAIgBAAIAAAAIgBAAIgCAAIgHABYgFAAgFABgFAAYgKABgJABgKABYgLABgKACgKABYgFABgFABgFAAYgFABgFABgEABYgKACgJACgJABYgIACgIACgIACYgHADgHABgGADYgGACgFABgEACYgJADgEACAAAAIAAAAYAAAAAFgBAIgCYAFgBAFgCAGgBYAGgCAHAAAHgBYAIgCAIgBAJgBYAIgBAKgBAJAAYAFgBAEAAAFAAYAFgBAFAAAFAAYAKAAAKAAAKAAYAKAAAKAAAKABYAFAAAFAAAFAAIAHABIACAAIABAAIAAAAIAAAAYAAAAABAAgBAAIAAAAIAEAAYATACASABAPABYAeADAVABAAAAYALABAJgIABgKYABgLgIgKgLgBYgBAAgBAAAAAAIgBAA");
	this.shape_10.setTransform(40.7,193.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#332F29").s().p("AAoBVYAAAAgEgNgGgTYgCgFgBgFgCgFYgCgGgCgFgCgGYgEgMgEgLgFgNYgEgMgEgNgEgLYgDgHgCgFgCgFYgDgFgCgFgDgFYgCgEgCgEgDgEYgCgDgCgDgCgCYgEgEgCgDAAAAIAAAAYAAAAACADADAFYABACACAEABADYACAEABAEACAFYABAEACAFABAGYABAFACAGAAAGYACAMADANACANYACAMACANACAMYABAGAAAGABAGYABAFABAGAAAEYACAUABANAAAAYABALAKAIALgBYALgBAIgKgBgLYgBgCAAgBAAgB");
	this.shape_11.setTransform(30.6,164.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#332F29").s().p("AgGBKYAAAAADgLADgPYADgIADgJACgJYAEgKACgKAEgJYAOgoAPgoAAAAIAAAAYAAAAgYAkgXAkYgFAJgFAIgGAJYgFAJgEAIgEAHYgJANgFAKAAAAYgGAJAEAMAJAGYAKAGAMgDAGgKYAAgBABgCABgBIAAAA");
	this.shape_12.setTransform(288.3,168.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#332F29").s().p("Aj/CMYAAAAAJgDAPgHYAIgDAKgEAKgFYALgFAMgFANgGYAagMAegOAggOYAggRAigRAhgRYAJgFAIgEAJgDYAIgFAIgFAIgEYARgJAQgJAPgJYAQgJAPgIAOgIYAOgJANgIANgHYAwgeAhgUAAAAIAAAAYAAAAgiASgyAaYgNAHgOAHgOAIYgPAHgPAHgQAIYgQAHgRAIgRAIYgIAEgJAEgIAEYgJAEgJAEgIAEYgiAOgjAOggAOYgiANgfAMgaAKYgOAFgMAFgLAEYgKADgKAEgHACYgQAGgJADAAAAYgLAEgFALAEAKYADALAMAFAKgDYAAAAABgBAAAA");
	this.shape_13.setTransform(272.6,182.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#332F29").s().p("AAUBUYAAAAgBgMgCgSYgBgSgDgXgCgXYgCgYgDgYgBgSYgBgEgBgFgBgDYgBgEgBgDAAgCYgCgFAAgDAAAAIAAAAYAAAAAAADAAAFYABADAAADAAADYAAAEAAAEAAAEYgCASgCAYgDAYYgDAWgCAYgCASYgCASgCALAAAAIAAABYgBALAHAKAMABYAKABAKgHABgLYAAgCAAgBAAgC");
	this.shape_14.setTransform(254.3,124.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#332F29").s().p("ACAB6YAAAAgQgSgYgaYgDgEgDgDgDgEYgCgCgBgBgCgCYgCgCgBgCgCgCYgHgHgHgIgIgJYgPgQgQgQgQgSYgIgIgIgJgIgJYgHgIgJgIgIgIYgPgQgPgPgMgNYgZgZgRgRAAAAIAAAAYAAAAAPASAWAcYALAOANAQAOASYAHAIAHAJAHAKYAHAJAHAKAHAJYAOASAOATANASYAHAJAGAJAGAIYACACABACACACYABACACACABABYADAEACAEADAEYAVAdAOATAAAAYAGAJAMACAJgGYAJgHADgMgHgJYAAgBgBAAAAgB");
	this.shape_15.setTransform(180.3,107);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#332F29").s().p("AhWCiYAAAAAPgUAWgdYADgDADgEADgEIACgDIADgDYABgCACgDABgCYAHgIAGgJAHgJYANgTAOgUAOgUYAHgJAHgLAHgKYADgFADgFADgFYADgFADgFADgGYAGgKAFgJAFgKYAFgJAFgJAEgIYAEgJAEgHACgHYADgHADgGACgFYAEgKACgGAAAAIAAAAYAAAAgDAGgFAJYgCAFgDAGgEAGYgDAHgFAHgFAIYgFAHgFAJgGAJYgGAIgGAJgHAJYgDAFgDAFgEAFYgDAEgEAFgEAFYgHAJgIAJgHAKYgQARgQASgPARYgIAJgIAIgHAIYgBACgCACgCACIgBABYAAAAgBABABAAIgBAAIgDADYgDAEgDADgDADYgaAbgRASAAAAYgHAIAAAMAIAIYAIAIANgBAHgIYABAAAAgBABAA");
	this.shape_16.setTransform(211,137);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#332F29").s().p("AAsCjIhXleIAAAAIAvFmIAAAAYACALAKAHALgBYALgCAIgKgCgLYAAAAAAgBAAgB");
	this.shape_17.setTransform(184.4,48.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#332F29").s().p("AAWCOYAAAAgCgTgEgdYgBgDAAgEgBgEYAAgCAAgCgBgBYAAgCAAgCAAgCYgBgJgBgJgBgJYgCgSgCgTgCgTYgCgTgBgTgCgTYgCgJgBgJgBgIYgBgIgCgIgCgHYgBgIgBgGgCgGYgBgGgCgFgBgEYgCgIgCgFAAAAIAAAAYAAAAABAFABAIYABAFABAFABAGYAAAFABAHAAAHYABAIABAIAAAIYAAAIAAAJAAAJYABASgBAUgBATYAAATgBATAAASYAAAJgBAJAAAJYAAACAAACAAACYAAACAAACAAADYAAAEAAADAAAEYAAAdAAAUAAAAYABALAJAJAKAAYALAAAJgJAAgLYAAgBAAgBgBgBIAAgB");
	this.shape_18.setTransform(278.3,97.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#332F29").s().p("AgbBsYAAAAAFgPAIgVYAJgWALgdALgbYADgIADgHADgHYADgHADgHADgGYAGgNAGgNAEgKYAKgWAGgOAAAAIAAAAYAAAAgIANgNAUYgHAJgHAMgIAMYgEAGgEAGgFAHYgEAGgEAHgDAHYgQAZgQAbgMAUYgMAUgHAOAAAAYgGAJADANAKAFYAKAGAMgEAFgJYABgBAAgBABgB");
	this.shape_19.setTransform(334.6,200.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#332F29").s().p("AklAYIJggvIAAAAIpiAIYgLAAgIAJAAAKYAAALAJAJALAAYAAAAABAAAAAA");
	this.shape_20.setTransform(395,207);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#332F29").s().p("AihBnYAAAAAGgDAKgFYAFgDAGgCAIgEYAGgEAIgEAJgEYARgJATgKAWgLYAVgMAWgNAVgNIARgIYAFgEAGgDAFgDYALgHAKgGAKgHYAKgGAKgGAJgGYAKgGAIgGAIgGYAfgVAVgPAAAAIAAAAYAAAAgWANghASYgJAFgJAFgJAFYgKAFgKAFgLAFYgLAFgLAGgLAFYgFADgGADgGADIgRAIYgWAKgXAJgWAKYgWAJgVAIgRAHYgJAEgIADgIADYgGACgHADgFACYgKAEgGACAAAAYgLAEgFALAEALYAEAKALAFALgEYAAAAABAAAAAA");
	this.shape_21.setTransform(411.5,182.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#332F29").s().p("AANCcYAAAAABgFABgJYABgFABgFAAgGYABgHABgHABgIYAAgHABgJABgIYABgJAAgKABgJYABgKABgKAAgKYAAgLAAgKAAgJYABgLgBgKAAgKYAAgKAAgKgBgKYAAgJgBgKgBgIYAAgJgBgJAAgHYABgfAAgUAAAAIAAAAYAAAAgDAUgEAfYgBAIAAAIgBAJYAAAIgBAKgBAJYAAAKgBAJgBAKYgBAKgBAKgCAKYgBAKgCAJgBAKYgBAKgBAKgCAJYgCAJgBAJgCAJYgCAIgCAIgCAIYgBAHgCAHgBAGYgCAGgBAFgBAEYgDAJgBAFAAAAYgDALAHALALACYAKADAKgGADgLYAAgBAAgBAAAA");
	this.shape_22.setTransform(354.5,195.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("AmweZICgqeIB4jSIgijIIgkjSIkikiIo6hRIhGgJIpCngIjAifIjShuIEOAlIAUADIKeIbIBpATIIrBlIkijcIksnLIochaID6geIAwAEIEQAaIBaBuIgUjcIpYmuIiMpsIkiAAIF8haICqJsIEEDEIFPD8IAPAMIDmGaIEYFnIA8rFIgOlSIgao8IAKgOIEEluIiWGQIBkNjIAUCtICqGuIFKocIjInCIAUh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICBBiIBRA+IE7hiIEnhcIAek1IBQgKIgeBGIAPCsIAKBmIDbhfIEPh3IDmmVIEOiRIjrC0IhpEuIgZBJIj7BqIooDpIm/C+ICRLpICgkJICkgwID2hIIlUClIi5HHIBQJOg");
	this.shape_23.setTransform(218.3,213.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#332F29").s().p("AkQT7IB5jSIgijHQAWAZAUAdQgUgdgWgZIgkjTIkikiIo7hRIABAAQAfgEAeAAIABAAIAAAAIAGAAIAFAAIgFAAIgGAAIAAAAIgBAAQgeAAgfAEIgBAAIhGgJIpCngQAsAAA/ACQg/gCgsAAIi/ifIjShuIENAlIAVADIKdIbIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlSIAyA/Igyg/Igao8IAKgOIEEluIiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIgyATIAygTIhxD/ICABiIBSA+IE7hjIEnhbIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIgGAfIAGgfIEPh3IDlmVIEOiRIjrC0IhoEuIgfANIAfgNIgZBJIj7BqIgtACIAtgCIooDpIgbgPIAbAPIm/C+ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAPXMgIAEgIIgEAIgAwCCtQgPgWgZgbQAZAbAPAWgAFKCjIAQgUIgQAUgALRCUIAWgqIgWAqgARegdIAPghIgPAhgA9AmUIgGghIAGAhgA0fonIghgTgAiupoIA1g9Ig1A9gAt4qsIABgqIgBAqgAFpspIABgXIgBAXgAzMucIAGg2IgGA2gAJav2QgCgVgCgsQACAsACAVgAk53HIgThjIATBjgAi5NiIAAAAgAPFCqIAAAAgAVSg3IAAAAgAXtg/gA7CjNIAAAAgAFLjSgAcBjygAk8vgIAAAAg");
	this.shape_24.setTransform(218.3,213.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#332F29").s().p("Ah2CnIARgoIAQgpIAOgpIANgqIAKgpIAJgrIAGgrIAFgrIgQAFIDJDkIAAAAIi7jwYgDgEgGgBgEADYgCACgBACAAACIAAABIgIAqIgJApIgLApIgNAoIgOAnIgQAnIgRAmIgUAmYgFAKAEAMAKAFYAKAFAMgDAFgKYAAgBAAAAAAAA");
	this.shape_25.setTransform(306.3,208.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#332F29").s().p("ACkBTIgRgRYgFgGgFgFgHgGIgSgQYgFgGgHgFgGgFYgGgFgGgFgHgFIgTgNIgKgHYgEgDgDgCgDgCIgUgNYgHgEgGgEgGgEIgWgLIgVgMYgHgEgIgCgHgEIgWgJYgHgDgHgDgIgDIgtgPIgDARIERgPIAAAAIkRgCYgFAAgDAEgBAEYAAAEADADADABIABABIArARYAHACAHAEAHADIAUALYAHADAHADAHAFIATALIAUAMYAGAFAGAEAGAFIATAOYADABAEADACABIAJAIIARAOYAGAFAGAGAFAFYAGAFAGAFAFAGIAQAQYAFAFAFAGAFAGIAPASYAIAIAMABAJgHYAIgHABgNgHgIYgBAAAAgBAAAA");
	this.shape_26.setTransform(184.7,290.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#332F29").s().p("AhfA3IAPgaIAHgNIAEgHYABgCABgCABgCIAhgwIgLAFICxANIAAAAIiuglYgEgBgDABgDADIgBABIgoAuYgCACgBACgCACIgEAGIgJALIgSAYYgHAJACANAJAGYAJAHAMgCAHgJYABAAAAgBAAgB");
	this.shape_27.setTransform(328.2,288.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#332F29").s().p("AgzA+IAggpIAQgVIAQgSIAQgUIAJgKIAEgFIACgCIABgCIAAAAIAAAAIABAAIAAAAYgCABABgBAAAAIAAAAIATgSYADgDADgCADgDIAJgHIgOgMIg2DUIAAAAIBJjOYACgFgDgGgFgCYgDgBgDABgDABIAAAAIgMAIYgEACgEADgEACIgUARIglAmIgTASIgSATIgjAlYgIAIAAAMAIAIYAJAIAMgBAIgIYAAAAABgBAAAA");
	this.shape_28.setTransform(259.6,223);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#332F29").s().p("AiiAfIgXgWYgEgEgEgEgEgCIgNgLIgYgVIgZgVYgQgNgPgOgQgOIgXgWYgEgDgDgEgDgEIgLgLIgRAYILpEFIAAAAIrekiIAAAAYgIgDgJAEgDAIYgCAFABAGAEAEIALANYADAEAEAEAEAEIAWAYYAQAOAPAQAQAOIAYAVIAXAVIALAKYAEADAEAFADADIAXAXIAAAAYAHAIANAAAIgHYAIgIAAgNgIgIYAAAAAAAAAAAA");
	this.shape_29.setTransform(129.2,221.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#332F29").s().p("ABagwIgaAGYgEABgFACgEABIgOAFYgJACgIAEgJAEYgEABgEACgDACIgNAGIgMAGIgMAGIgXAMIgGADIgGADIgLAGYgFACgDABgEACIgMAEIAGAPIB9hXIAAAAIiFBJYgEACgCAGACAEYACADAEACAEgBIAAAAIAOgEYAEgBAFgBAEgCIANgEIAGgDIAGgCIAZgLIAMgFIAMgEIALgEYAEgCAFgBAEgBYAIgCAIgDAIAAIANgDYAEgBADgBAFAAIAagEYALgBAIgLgCgLYgBgKgKgIgLABYgBAAgBABAAAA");
	this.shape_30.setTransform(100.6,245);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#332F29").s().p("AiQAfIAFhMIAChNIgBhOIgFhNIgeAJIFQIpIAAABYACADAFABAEgCYACgBABgDAAgCIgBiSIgFiQIgIABIAWEsIAAAAIgOktYAAgCgCgCgCAAYgCAAgCACAAACIAAAAIACCRIgDCQIAOgDIlBoyYgEgIgKgCgIAEYgFADgDAGAAAFIAAABIACBMIAABMIgEBLIgHBMYgBALAIAJALABYALABAKgIABgLYAAAAAAAAAAAA");
	this.shape_31.setTransform(112.5,112.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#332F29").s().p("AAUAsIgZhwIAAAAIgOByYgCALAIAKALABYALACAKgIABgLYAAgDAAgCAAgC");
	this.shape_32.setTransform(129.2,107.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#332F29").s().p("AgWAqIgzgcIgagOIgMgGIgNgHIgNgIYgEgCgEgCgEgDIgLgIYgEgCgEgDgEgDIgWgRIgVgTIgOAWIHUCPIAAAAInLioYgHgDgIAEgDAHYgBAFABAFADAEIAWAWIAXAUYAEADAEADAEADIAMAJYAEACAEADAEACIANAIIAMAIIAMAIIAZAQIAyAfYAJAGAMgDAGgKYAGgJgDgMgJgGYAAAAgBAAAAgB");
	this.shape_33.setTransform(87.1,150.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#332F29").s().p("ABmAoIg3AEIgCAAIgBAAIgBABIgEAAIgHABIgNACYgJABgJABgJACIgbAFYgKACgJADgJACIgNADYgFABgEACgFACIgaAJIAMAKIAQi9IAAAAIgiC6YgBAFADAFAFABYABAAABAAACAAIABgBIAagGYAEgBAFgBAEgBIANgCYAJgBAJgCAJgBIAagCYAIgBAJAAAKAAIANgBIAHAAIAEAAIAAAAIABAAIAAAAIAAAAYABAAgCAAAAAAIAAAAIACAAIA3ABYALAAAJgIAAgMYABgLgJgJgLAAYgBAAAAAAgBAAIAAAA");
	this.shape_34.setTransform(34.9,186.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#332F29").s().p("AkvjXIgchmIgiAMIAxBoIAAABYABACACACABABIFSEJYAcAWAdAWAcAWIBWBBICqCDIAAAAIimiJIhShFYgcgXgcgWgbgYIlIkUIAFAFIgthqYgEgJgKgEgJADYgIAEgFAJACAIIAAABIAYBnYADALALAGAKgCYALgDAHgKgDgLYAAAAAAgBAAAAIAAAA");
	this.shape_35.setTransform(64.3,190.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#332F29").s().p("AAdAdIgCgEIgBgCIAAgBIAAAAIAAgBIgBAAIAAAAIAAAAIgEgJIgEgIYgBgCgCgCgBgDIgFgJIgGgIIgCgEYgBgBgBgBgBgCIgHgHIgBgBYgEgEgGgBgEAEYgEADAAAGACADIAlA8IATgGAAKAjIgShEIgRALIADAHYABABABABAAABIABAEIADAIIACAHYAAACABADABADIABAIIACAJYAAABgBgBAAAAIAAAAIAAAAIAAAAIABAAIAAAAIAAABIAAABIAAACIABAFIASgG");
	this.shape_36.setTransform(28.4,156);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#332F29").s().p("Ai8ATIB/g3IB8g9IB6hBIB4hHIgNgTIpaH8IAAAAIJpnqYAFgEAAgHgEgFYgDgFgHgBgEADIgBAAIh5BCIh7A+Ih8A4IiBA0YgKAEgFAMAEAJYAEAKAMAFAKgEYAAAAABAAAAAA");
	this.shape_37.setTransform(271.1,192.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#332F29").s().p("Agqh+IBWEXIAAAAIgvkgYgCgLgKgHgLABYgLACgHALABALYAAAAABABAAAB");
	this.shape_38.setTransform(256.6,127.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#332F29").s().p("AAUBIYAAAAgFgqgEgoYgCgLgBgKgBgKYAAgFgBgFAAgEYgBgDAAgCAAgCIAAgCYAAgBgBAAAAAAYAAgBAAgBAAgBYgBgEgBgEgBgDYgBgDAAgDAAgCYgCgEgBgDAAAAIAAAAYAAAAAAADABAEYAAADAAACAAAEYABADAAADAAAEYAAABgBABAAABYAAABAAAAAAAAIAAACYAAACAAACgBADYAAAEgBAFAAAFYgCAJgBALgBAKYgGApgFAqAAAAIAAAAYgBALAHAKALACYALABAKgIABgLYAAgBAAgCAAgC");
	this.shape_39.setTransform(254.4,123);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#332F29").s().p("AhCA9IAwg9IAXgfIAWghYADgFAEgFADgGIALgRIAKgRYAEgGACgGADgGIAKgRYADgGADgGADgGIAQgkIgWgJIiOGxIAAAAICkmpYADgGgEgHgGgCYgFgCgHACgCAFIgBABIgRAiYgDAGgEAFgDAGIgKAQYgDAGgDAGgEAFIgKAPIgLAQYgDAFgFAGgDAFIgXAfIgYAdIgzA6YgHAIABANAIAHYAIAHANgBAHgIYAAAAABAAAAgBIAAAA");
	this.shape_40.setTransform(214.3,140.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#332F29").s().p("AAAHFIhihyYgJgJgIgJgJgKIgZgbIgzg4IACARICllaIAAgBYABgBAAgCAAgBIgUiIYgCgLgBgMgDgLIgGghIgMhEIgEAGIE0hyIAAAAIk3BoYgCABgCACABADIAAAAIAKBEIAFAhYACALACAMABALIAPCIIABgGIivFVYgDAGABAGAEAFIAAAAIAxA5IAYAdYAIAJAJAJAHAKIBfB1YAHAJAMABAJgHYAIgHABgNgGgIYAAAAAAgBAAAA");
	this.shape_41.setTransform(188.2,67.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#332F29").s().p("AgxCwIgKh7YAAgKgCgKgBgLYgCgKAAgLgCgJIgGgfIgIgfIgEALIC4iKIAAAAIjDB6YgDACgBADAAAEIAAABIAFAeIADAeYABAJAAAKABAKYAAAKABAKAAAKIgBB8YAAALAJAJALAAYALAAAJgJAAgLYAAgBAAAAAAgB");
	this.shape_42.setTransform(285,87.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#332F29").s().p("AgaA5IArhfYADgIAEgIAEgIIAMgXIAXgvIgVgKIhMElIAAAAIBikeYADgGgEgHgGgCYgFgCgGADgDAEIAAABIgbAuIgOAWYgEAIgFAIgEAHIgzBcYgFAKAEAMAJAFYAKAFAMgDAFgKYABAAAAgBAAAA");
	this.shape_43.setTransform(336,202.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#332F29").s().p("ADTiqII0geIgEgfIxaEMIgBAAYgDABgCADABADYAAACABACACABIAsATYAPAFAPAFAPAFYAQADAQADAPAEIAwAEIgBgKIpzCSIAAAAIJ1iIYADgBACgCgBgDYAAgCgCgCgCAAIgBAAIgugFYgPgDgPgEgQgDIgsgPIgqgUIgBAMIRej6YAJgCAFgIgCgIYgCgIgGgFgIAAIAAAAIo1AWYgLAAgJAJABALYAAALAJAJALAAYAAAAAAAAABAA");
	this.shape_44.setTransform(349,226.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#332F29").s().p("AiUBLIBUgpYAOgIAOgHANgIIApgVYAHgEAHgEAGgEIAVgMIAogYYANgIANgJAOgJIAngZIgMgSIlcEBIAAAAIFojwYAFgDABgGgDgFYgDgFgGgCgFADIgBABIgoAXYgNAIgOAIgNAHIgpAWIgVALYgHAEgGADgHAEIgpAUYgOAGgOAHgOAGIhWAlYgKAEgFAMAFAKYAEAKAMAFAKgFYAAAAABAAAAAA");
	this.shape_45.setTransform(413.3,183.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#332F29").s().p("AhoCRIAEgkYACgNABgMABgNYABgMABgNABgMIABgTYAAgGAAgHAAgFIABglYAAgHgBgGAAgGIgBgTIAAgSIAAgCYAAABAAgBAAAAIAAAAIAAAAIAAAAIAAgBIAAgBIAAgEIAAgKIACglIgQAIID8CmIAAAAIjwi3YgFgDgGABgDAEYgBACgBABAAACIAAABIgEAkIgBAKIgBAEIAAABIAAABIAAAAIAAACIAAACIgBASIAAATYgBAGAAAGAAAGIgDAkYAAAGgBAGgBAGIgCASYgBAMgCAMgCAMYgCAMgBALgDANIgHAkYgCALAHAKALACYALACAKgHACgKYAAgBAAAAABgB");
	this.shape_46.setTransform(367,193.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(1,1,1).p("AyUBpIBpATIIrBlIkijcIksnLIochaID6geIAwAEIEQAaIBaBuIgUjcIpYmuIiMpsIkiAAIF8haICqJsIEEDEIFPD8IAPAMIDmGaIEYFnIA8rFIgOlRIgao9IEOl8IiWGQIBkNjIAUCtICqGuIFKocIjInCIAUh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoOSgIhyD/ICBBiIBRA+IE8hiIEmhcIAek1IBQgKIgeBGIAPCsIAKBmIDbhfIEPh3IDmmVIEOiRIjrC0IhpEuIgZBJIj6BqIopDqIm/C9ICRLpICgkJICkgwID2hIIlUClIi5HHIBQJOIzEAPICgqeIB4jSIgijHIgkjTIkikiIo6hQIhGgKIpCngIjAifIjShuIEOAlIGME0");
	this.shape_47.setTransform(218.3,213.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#332F29").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_48.setTransform(218.3,213.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#322E28").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_49.setTransform(218.3,213.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#312D28").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_50.setTransform(218.3,213.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#312D27").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_51.setTransform(218.3,213.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#302C26").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_52.setTransform(218.3,213.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2F2B26").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_53.setTransform(218.3,213.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#2F2B25").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_54.setTransform(218.3,213.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2E2A25").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_55.setTransform(218.3,213.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#2E2A24").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_56.setTransform(218.3,213.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#2D2A24").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_57.setTransform(218.3,213.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#2D2924").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_58.setTransform(218.3,213.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2D2923").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_59.setTransform(218.3,213.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#2C2823").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_60.setTransform(218.3,213.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#2C2822").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_61.setTransform(218.3,213.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#2B2822").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_62.setTransform(218.3,213.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#2B2722").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_63.setTransform(218.3,213.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#2A2721").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_64.setTransform(218.3,213.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#2A2621").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_65.setTransform(218.3,213.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#292620").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_66.setTransform(218.3,213.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#292520").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_67.setTransform(218.3,213.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#282520").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_68.setTransform(218.3,213.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#28241F").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_69.setTransform(218.3,213.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#27241E").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_70.setTransform(218.3,213.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#27231E").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_71.setTransform(218.3,213.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#26231E").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_72.setTransform(218.3,213.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#26221D").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_73.setTransform(218.3,213.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#25221D").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_74.setTransform(218.3,213.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#25211C").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_75.setTransform(218.3,213.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#24211C").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_76.setTransform(218.3,213.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#24201B").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_77.setTransform(218.3,213.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#23201B").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_78.setTransform(218.3,213.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#231F1A").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_79.setTransform(218.3,213.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#221F1A").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_80.setTransform(218.3,213.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#221E19").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_81.setTransform(218.3,213.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#211E19").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_82.setTransform(218.3,213.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#211D19").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_83.setTransform(218.3,213.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#201D18").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_84.setTransform(218.3,213.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#201C17").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_85.setTransform(218.3,213.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#1F1C17").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_86.setTransform(218.3,213.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#1F1B17").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_87.setTransform(218.3,213.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#1E1B16").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_88.setTransform(218.3,213.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#1E1A16").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_89.setTransform(218.3,213.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#1D1A15").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_90.setTransform(218.3,213.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#1D1915").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_91.setTransform(218.3,213.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#1C1915").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_92.setTransform(218.3,213.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#1C1914").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_93.setTransform(218.3,213.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#1B1814").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_94.setTransform(218.3,213.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#1B1813").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_95.setTransform(218.3,213.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#1B1713").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_96.setTransform(218.3,213.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#1A1713").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_97.setTransform(218.3,213.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#1A1712").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_98.setTransform(218.3,213.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#191612").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_99.setTransform(218.3,213.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#191611").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_100.setTransform(218.3,213.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#181511").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_101.setTransform(218.3,213.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#171410").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_102.setTransform(218.3,213.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#17140F").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_103.setTransform(218.3,213.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#16130F").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_104.setTransform(218.3,213.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#15120E").s().p("AkQT7IB5jSIgijHIgkjTIkikiIo7hQIhGgKIpCngIi/ifIjShuIENAlIGME0IEmDqIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlRIgao9IEOl8IiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIhxD/ICABiIBSA+IE7hiIEnhcIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIEPh3IDlmVIEOiRIjrC0IhoEuIgZBJIj7BqIooDqIm/C9ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAl+8qIE2huIkOF8QgUitgUhhgAhI+Yg");
	this.shape_105.setTransform(218.3,213.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#15120E").s().p("AkQT7IB5jSIgijHQAWAZAUAdQgUgdgWgZIgkjTIkikiIo7hRIABAAQAfgEAeAAIABAAIAAAAIAGAAIAFAAIgFAAIgGAAIAAAAIgBAAQgeAAgfAEIgBAAIhGgJIpCngQAsAAA/ACQg/gCgsAAIi/ifIjShuIENAlIAVADIKdIbIBqATIIrBlIkjjcIksnLIochaID7geIAvAEIEQAaIBaBuIgUjcIpYmuIiLpsIkiAAIF8haICqJsIEDDEIFPD8IAQAMIDlGaIEYFnIA9rFIgPlSIAyA/Igyg/Igao8IAKgOIEEluIiVGQIBkNjIATCtICqGuIFKocIjJnCIAVh4IAeCCIByDeIBCCAICql3ICql3IBGm4IAUH0IoPSgIgyATIAygTIhxD/ICABiIBSA+IE7hjIEnhbIAdk1IBRgKIgeBGIAPCsIAJBmIDchfIgGAfIAGgfIEPh3IDlmVIEOiRIjrC0IhoEuIgfANIAfgNIgZBJIj7BqIgtACIAtgCIooDpIgbgPIAbAPIm/C+ICQLpIChkJICkgwID1hIIlTClIi6HHIBRJOIzEAPgAPXMgIAEgIIgEAIgAwCCtQgPgWgZgbQAZAbAPAWgAFKCjIAQgUIgQAUgALRCUIAWgqIgWAqgARegdIAPghIgPAhgA9AmUIgGghIAGAhgA0fonIghgTgAiupoIA1g9Ig1A9gAt4qsIABgqIgBAqgAFpspIABgXIgBAXgAzMucIAGg2IgGA2gAJav2QgCgVgCgsQACAsACAVgAk53HIgThjIATBjgAi5NiIAAAAgAPFCqIAAAAgAVSg3IAAAAgAXtg/gA7CjNIAAAAgAFLjSgAcBjygAk8vgIAAAAg");
	this.shape_106.setTransform(218.3,213.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_24},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_23}]},50).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_49},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_49},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_50},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_51},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_51},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_52},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_52},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_53},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_54},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_54},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_55},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_56},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_57},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_58},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_59},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_60},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_61},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_62},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_63},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_64},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_65},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_65},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_66},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_67},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_68},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_69},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_69},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_70},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_71},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_72},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_73},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_73},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_74},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_75},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_76},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_76},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_77},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_78},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_79},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_80},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_80},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_81},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_82},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_83},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_84},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_84},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_85},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_86},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_87},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_88},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_88},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_89},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_90},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_91},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_92},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_93},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_94},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_95},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_96},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_97},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_98},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_99},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_99},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_100},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_101},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_101},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_102},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_102},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_103},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_104},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_104},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_105},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_106},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 5
	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#DD61BE").s().p("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QANgHANAMIACACQAEAFABAEQADAJgOAIQgHAEgGAAQgJAAgFgLgAr8s8QgLgUAUgLQATgLAHATQAGATgPALQgGAFgFAAQgJAAgGgMgADBs8QgIgSAOgIQAIgEAJAEIgDgGQgEgPAIgDQAGgDAFAFIgCgEQgIgTAOgHQAOgIAOAPQAJAJgEAIQACACACAFQAGATgPAMQgQAMgLgUIgBgDIgDACQgEADgEAAIAEAEQAOAOgTALQgHAEgGAAQgJAAgFgLgATdtDQgLAEgGgGQgEgEgDgHQgRAMgLgWIAAAAQgFgIABgHIgBAAQgRALgKgRIgDgIQgKAFgDgNQgEgNAHgDQADgBACABQAFABAEAGIABACIAFgEQASgKAKAQQAEAGAAAFIADgCQAQgJAIAKQAQgHAQAVIACAEQANgBAMANQARASgYAOQgKAGgHAAQgLAAgGgNgA5StBQgKgRARgKQARgJAGAQQAFAQgNAKQgFAEgEAAQgIAAgFgKgAoBtNQgIggAQgIQALgEAMAIIAJAJQAEACAEAFQADAGAAAEIgBAFQgBAFgDAFQgDAEgGAFIgDABQgIAGgHAAQgNAAgGgVgABPtGIgDgFQgDAEgFAEQgQANgNgTIAAAAIgEACIgGAFQgNALgJgSQgJgRARgKIADgCQgGgDgDgMQgGgXAMgGQAMgFANARQAEAFABAFQADAKgMAIIACABQAEgEAGgEQALgGAHACQAJACAEAMIACAJIAHgFQATgLAGASQAGASgPAMQgGAEgEAAQgJAAgGgMgAgktCQgFgMAJgFQAJgFAJAKQAJAJgNAIQgEADgEAAQgHAAgDgIgAqhtHIgDgJQgCAFgIAEQgTAKgHgRIgCgHQgCgJAEgFIAFgFQANgHAOAPQAEAEABADQADgHAIgEQATgLAGASQAGASgPAMQgFAEgFAAQgIAAgHgMgA33tMQgEgHAAgGQgDAEgFADQgTAMgHgXQgGgYAMgFQAMgGAOARQAFAHAAAFQADgEAGgDQASgLAMAQIgCgEQgGgXAMgFQAMgGANARQANARgTALQgNAIgGgIQAFAPgRAKQgHAFgGAAQgKAAgHgMgAB4tQQgOgYAZgOIAIgDQgFgKAKgGQALgGAGAKIABAAQgDgQAJgFQALgFANAQQAMAQgSALQgRAKgGgTQAAADgDADQAGADAEAHQAOAXgZAP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");
	this.shape_107.setTransform(218.6,149.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_107).wait(125));

	// Layer 3
	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#91408C").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_108.setTransform(226.7,150.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#91408C").s().p("ALtW7Qi0gZhdgMQijgUh2AAQm3AAl1h3QkyhimUjnQmrj1jejMQkekHgtkQIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQTKBKI1GGQC2B9BjBZQB9BwA/BxQCKD4hmGIQgbBrgHCzQgIECgEAmQgQCkg1BvQhCCJiIBaQhhA/j1BiQigBAjLBGQhpAkidAAQhpAAh/gQg");
	this.shape_109.setTransform(228.8,150.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#91408C").s().p("ALbXKQi7gmhggRQiqggh1AAQkXAAiSgKQjPgNihgoQlkhYl1kpIkzj1QifiChphiQkEj0iVkMIAAsoQAyijA3hUQBXiFCKggQEQg/I2g8QJchAEDg0QAxgKBHAGQApADBUAIQHTAcHjB/QHUB6F1C7QD2B7BkBBQCUBgA+BnQBGBygLChQgLCmhjD7QgqBrAWCuQAFAiASBzQAQBdADA3QAOCqg9BtQhOCMjWBXQguAShSATQhpAYgrANQjMA8jhChQhZA/iCAIIgpABQhbAAh/gWg");
	this.shape_110.setTransform(232.2,151.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#91408C").s().p("ALVW8IkjgcQixgRhyAAQjpAAipgYQipgYibg4QiNgyi6hgQhug5krinQl6jSjzjdQj/joikknIAAspQAnh8CEiEQCMiKCUgtQE9hhHcggQFYgYAlgEQDdgTCxgkQAxgKBHAGQApADBUAIQGVAZIqCSQE7BTIxCuQD4BIB/BGQCUBQA0BsQA2BygjCsQgjCpiDEGQg0BoA8C9QAPAxAsByQApBqARA4QA0C3hABiQhTB+kiAjQg7AHg3AdQgcAPhVA7QjICKj8BnQh+A0jVAAQhSAAhfgIg");
	this.shape_111.setTransform(234,149.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#91408C").s().p("AKzWaIkhgVQiugNhzAAQjpAAipgYQiogYicg4QiNgyi6hgQhug5krinQl5jSjzjdQj/joilkoIAAsoQAnh8CEiEQCMiKCUgtQDBg7DZgTQCXgNDsADQEtAEBUgDQDbgGC0gkQBDgNBVgJQBigKA6AEQDWAND/BAQCxAsEXBdQFWByBfAcQDwBHCxAVQEQAgCLAvQCjA3A0BeQA2Bkg7CmQg9Cni8EHQhEBeBLC8QAXA4A2BtQA6BzAVAyQBQC9g7BgQhNB9lDAVQg4ADgvAtQg5BAgnAqQilCwk+BdQiCAmjWAAQhSAAhfgFg");
	this.shape_112.setTransform(237,151.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#91408C").s().p("AlLWlQitgNiPgnQiSgnishPQibhIj6iMQmTjgj4jQQkjj0iekcIAkt3QAmh7C8ieQDCiiCagbQDNgjDPgJIABAAIABAAQDAg7DZgTQCXgNDtADQEsAEBUgDQDbgGCzgkQBDgNBWgJQBhgKA6AEQDXAND/BAQCxAsENBkQEMBjDQA1QDPA1AzAMQAzAMAEAmQAEAmCxBqQCxBpioDJQioDIgcDpQgbDoBYBpQBZBqBbAsQBbAtgBBgIgDDcQgDB8hIAmQhIAlguAtQg8A7iTABQiTABjEA9QjEA8jeBuQjfBthFgFQipAUjEANQksAUkaAAQj+AAiRgMg");
	this.shape_113.setTransform(241.5,145.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#91408C").s().p("AnWWlQiugNiOgnQiSgnithPQibhIj6iMQmTjgj3jQQkkj0iekcIAkt3QAmh7EBiKQEBiLB4gyQB5gzBhgGIBigHIAAAAQF0gECwgTQCxgSC6gWQC7gVBTgDQDcgGC0gkQBBgNBWgJQBigKA6AEQDWAND7AuQD6AtFCBlQFBBkApAQQApAQCTgPQCUgQE1CKQE2CKg1B4Qg1B4g0ClQg1Clh9CeQh9CcgJB6QgJB6CZCVQCYCUAsBDQAsBCglBfQgkBfieAsQieAsguAtQg5BAgoAqQilCwk+BdQi0A1lUgUIiggMQipAUjEANQksAUkZAAQj/AAiQgMg");
	this.shape_114.setTransform(255.1,145.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#91408C").s().p("AoUWlQitgNiPgnQiSgnishPQibhIj6iMQmTjgj4jQQkjj0iekcIAkt3QAmh7C8ieQDCiiCagbQDNgjDPgJIABAAIABAAQDAg7DZgTQCXgNDsADQEtAEBUgDQDbgGC0gkQBDgNBUgJQBigKA6AEQDXAND/BAQCxAsEXBdQFWByBfAcQDwBHCxAVQEQAgCLAvQCjA3A0BeQA2Bkg7CmQg9Cni8EHQhEBeBLC8QAXA4A2BtQA6BzAVAyQBQC9g7BgQhNB9lDAVQg4ADgvAtQg5BAgnAqQilCwk+BdQi1A1lUgUIifgMQipAUjEANQksAUkZAAQj/AAiRgMg");
	this.shape_115.setTransform(261.6,145.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#91408C").s().p("AHwW8IkkgcQiwgRhxAAQjrAAiogYQipgYicg4QiMgyi6hgQhug5krinQl6jSjzjdQj/joikknIAAspQAmh8CFiEQCMiKCUgtQE9hhHcggQFYgYAlgEQDcgTCygkQAxgKBHAGQApADBUAIQGVAZHMBlQHNBmH9DIQD4BIC1ATQC1ASB5BcQB5BdA+CpQA/Cpi7DcQi7DaBEBeQBEBeDfCvQDfCvj8CPQj8COhwBaQhvBZkiAjQg7AHg3AdQgcAPhVA7QjICKj8BnQh+A0jVAAQhSAAhfgIg");
	this.shape_116.setTransform(256.9,149.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#91408C").s().p("ApbWlQitgNgzg6Qgyg7jsg8Qjrg9ldiyQlcixj4jQQkjj0iekcIAkt3QAmh7C8ieQDCiiCagbQDNgjDPgJIABAAIAAAAQDBg7DZgTQCXgNDsADQEtAEBUgDQDbgGC0gkQBDgNBUgJQBigKA6AEQDXAND/BAQCxAsEXBdQFWByDQAOQDRAODvAOQDvANBfBkQBgBjCQBuQCPBth9CeQh9CdiaCwQiZCuBLC8QAXA4A2BtQA6BzBCB/QBCB/gnB8QgnB8jqgJQjqgJgvAtQgEBSARCTQARCTmLAaQmLAalUgUIifgMQipAUjEANQksAUkZAAQj/AAiRgMg");
	this.shape_117.setTransform(268.7,145.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#91408C").s().p("AmHWlQiugNiOgnQiSgnithPQibhIj6iMQmTjgj3jQQkkj0iekcIAkt3QAmh7C9ieQDCiiCZgbQDOgjDOgJIACAAIAAAAQDAg7DZgTQCXgNDtADQEtAEBTgDQDcgGCzgkQBCgNBWgJQBigKA6AEQDWANEABAQCwAsCrBJQCrBIA1AdQA1AcCmBGQClBGB4AtQB4AsBNCOQBMCODsCFQDsCElTCPQlSCQCECaQCFCaiUB0QiTB0BsBpQBtBoi6BVQi6BVA3AkQA3Aki1CoQlMCUBwA9QBxA9hZAlQhYAllUgUIiggMQipAUjEANQksAUkaAAQj+AAiQgMg");
	this.shape_118.setTransform(247.6,145.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#903F8B").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_119.setTransform(226.7,150.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#8F3F8A").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_120.setTransform(226.7,150.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#8E3E89").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_121.setTransform(226.7,150.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#8D3E88").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_122.setTransform(226.7,150.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#8B3D87").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_123.setTransform(226.7,150.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#8A3C86").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_124.setTransform(226.7,150.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#893C84").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_125.setTransform(226.7,150.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#883B83").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_126.setTransform(226.7,150.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#873A82").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_127.setTransform(226.7,150.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#863A81").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_128.setTransform(226.7,150.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#853980").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_129.setTransform(226.7,150.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#84397F").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_130.setTransform(226.7,150.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#83387E").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_131.setTransform(226.7,150.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#81377D").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_132.setTransform(226.7,150.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#80377C").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_133.setTransform(226.7,150.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#7F367B").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_134.setTransform(226.7,150.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#7E357A").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_135.setTransform(226.7,150.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#7D3579").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_136.setTransform(226.7,150.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#7C3477").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_137.setTransform(226.7,150.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#7B3476").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_138.setTransform(226.7,150.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#7A3375").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_139.setTransform(226.7,150.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#793274").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_140.setTransform(226.7,150.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#783273").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_141.setTransform(226.7,150.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#763172").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_142.setTransform(226.7,150.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#753071").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_143.setTransform(226.7,150.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#743070").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_144.setTransform(226.7,150.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#732F6F").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_145.setTransform(226.7,150.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#722F6E").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_146.setTransform(226.7,150.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#712E6D").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_147.setTransform(226.7,150.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#702D6C").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_148.setTransform(226.7,150.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#6F2D6A").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_149.setTransform(226.7,150.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#6E2C69").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_150.setTransform(226.7,150.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#6C2B68").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_151.setTransform(226.7,150.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#6B2B67").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_152.setTransform(226.7,150.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#6A2A66").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_153.setTransform(226.7,150.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#692A65").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_154.setTransform(226.7,150.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#682964").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_155.setTransform(226.7,150.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#672863").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_156.setTransform(226.7,150.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#662862").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_157.setTransform(226.7,150.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#652761").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_158.setTransform(226.7,150.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#642760").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_159.setTransform(226.7,150.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#62265F").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_160.setTransform(226.7,150.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#61255E").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_161.setTransform(226.7,150.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#60255C").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_162.setTransform(226.7,150.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#5F245B").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_163.setTransform(226.7,150.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#5E235A").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_164.setTransform(226.7,150.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#5D2359").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_165.setTransform(226.7,150.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#5C2258").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_166.setTransform(226.7,150.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#5B2257").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_167.setTransform(226.7,150.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#5A2156").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_168.setTransform(226.7,150.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#582055").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_169.setTransform(226.7,150.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#572054").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_170.setTransform(226.7,150.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#561F53").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_171.setTransform(226.7,150.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#551E52").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_172.setTransform(226.7,150.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#541E51").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_173.setTransform(226.7,150.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#531D4F").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_174.setTransform(226.7,150.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#521D4E").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_175.setTransform(226.7,150.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#511C4D").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_176.setTransform(226.7,150.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#501B4C").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_177.setTransform(226.7,150.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#4F1B4B").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_178.setTransform(226.7,150.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#4D1A4A").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_179.setTransform(226.7,150.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#4C1949").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_180.setTransform(226.7,150.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#4B1948").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_181.setTransform(226.7,150.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#4A1847").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_182.setTransform(226.7,150.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#491846").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_183.setTransform(226.7,150.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#481745").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_184.setTransform(226.7,150.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#471644").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_185.setTransform(226.7,150.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#461642").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_186.setTransform(226.7,150.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#451541").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_187.setTransform(226.7,150.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#431440").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_188.setTransform(226.7,150.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#42143F").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_189.setTransform(226.7,150.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#41133E").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_190.setTransform(226.7,150.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#40133D").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_191.setTransform(226.7,150.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#3F123C").s().p("AMCW7Qi0gZhdgMQijgUh2AAQuqgBrbmiQrimmhfpPIAAspQBTkFD3iXQEEifISgzQEvgeJgABQB4gBB9AIQO4A5KjHSQKGG9AXI/QAWIzpPGDQgwAfg8BEIhsCBQiLCnhiAiQhoAkieAAQhoAAiAgQg");
	this.shape_192.setTransform(226.7,150.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_108}]}).to({state:[{t:this.shape_109}]},37).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).wait(1));

	// Layer 6
	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#546B3C").ss(2,1,1).p("EgrgAEkQEkikI2iJQSQkaZyAAQQTAANSBx");
	this.shape_193.setTransform(276.5,352.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#7CA552").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_194.setTransform(276.5,367);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#536A3B").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_195.setTransform(276.5,367);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#7BA351").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_196.setTransform(276.5,367);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#52683A").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_197.setTransform(276.5,367);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#79A250").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_198.setTransform(276.5,367);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#51673A").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_199.setTransform(276.5,367);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#78A04F").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_200.setTransform(276.5,367);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#4F6539").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_201.setTransform(276.5,367);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#779E4E").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_202.setTransform(276.5,367);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#4E6438").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_203.setTransform(276.5,367);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#769D4E").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_204.setTransform(276.5,367);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#4D6237").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_205.setTransform(276.5,367);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#749B4D").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_206.setTransform(276.5,367);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#4C6136").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_207.setTransform(276.5,367);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#73994C").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_208.setTransform(276.5,367);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#4B5F36").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_209.setTransform(276.5,367);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#72984B").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_210.setTransform(276.5,367);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#4A5E35").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_211.setTransform(276.5,367);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#70964A").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_212.setTransform(276.5,367);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#495D34").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_213.setTransform(276.5,367);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#6F9449").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_214.setTransform(276.5,367);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#485B33").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_215.setTransform(276.5,367);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#6E9348").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_216.setTransform(276.5,367);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#465A32").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_217.setTransform(276.5,367);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#6D9147").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_218.setTransform(276.5,367);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#455831").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_219.setTransform(276.5,367);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#6B8F47").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_220.setTransform(276.5,367);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#445731").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_221.setTransform(276.5,367);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#6A8E46").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_222.setTransform(276.5,367);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#435530").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_223.setTransform(276.5,367);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#698C45").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_224.setTransform(276.5,367);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#42542F").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_225.setTransform(276.5,367);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#678A44").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_226.setTransform(276.5,367);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#41522E").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_227.setTransform(276.5,367);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#668943").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_228.setTransform(276.5,367);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#40512D").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_229.setTransform(276.5,367);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#658742").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_230.setTransform(276.5,367);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#3E502D").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_231.setTransform(276.5,367);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#648541").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_232.setTransform(276.5,367);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#3D4E2C").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_233.setTransform(276.5,367);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#628440").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_234.setTransform(276.5,367);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#3C4D2B").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_235.setTransform(276.5,367);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#618240").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_236.setTransform(276.5,367);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#3B4B2A").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_237.setTransform(276.5,367);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#60803F").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_238.setTransform(276.5,367);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#3A4A29").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_239.setTransform(276.5,367);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#5E7F3E").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_240.setTransform(276.5,367);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#394829").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_241.setTransform(276.5,367);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#5D7D3D").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_242.setTransform(276.5,367);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#384728").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_243.setTransform(276.5,367);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#5C7B3C").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_244.setTransform(276.5,367);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#364527").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_245.setTransform(276.5,367);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#5B7A3B").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_246.setTransform(276.5,367);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#354426").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_247.setTransform(276.5,367);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#59783A").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_248.setTransform(276.5,367);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#344325").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_249.setTransform(276.5,367);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#587639").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_250.setTransform(276.5,367);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#334124").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_251.setTransform(276.5,367);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#577539").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_252.setTransform(276.5,367);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#324024").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_253.setTransform(276.5,367);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#557338").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_254.setTransform(276.5,367);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#313E23").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_255.setTransform(276.5,367);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#547137").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_256.setTransform(276.5,367);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#303D22").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_257.setTransform(276.5,367);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#537036").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_258.setTransform(276.5,367);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#2F3B21").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_259.setTransform(276.5,367);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#526E35").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_260.setTransform(276.5,367);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#2D3A20").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_261.setTransform(276.5,367);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#506C34").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_262.setTransform(276.5,367);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#2C3820").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_263.setTransform(276.5,367);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#4F6B33").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_264.setTransform(276.5,367);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#2B371F").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_265.setTransform(276.5,367);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#4E6932").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_266.setTransform(276.5,367);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#2A361E").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_267.setTransform(276.5,367);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#4D6832").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_268.setTransform(276.5,367);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#29341D").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_269.setTransform(276.5,367);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#4B6631").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_270.setTransform(276.5,367);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#28331C").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_271.setTransform(276.5,367);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#4A6430").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_272.setTransform(276.5,367);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#27311C").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_273.setTransform(276.5,367);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#49632F").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_274.setTransform(276.5,367);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#25301B").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_275.setTransform(276.5,367);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#47612E").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_276.setTransform(276.5,367);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#242E1A").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_277.setTransform(276.5,367);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#465F2D").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_278.setTransform(276.5,367);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#232D19").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_279.setTransform(276.5,367);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#455E2C").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_280.setTransform(276.5,367);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#222B18").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_281.setTransform(276.5,367);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#445C2B").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_282.setTransform(276.5,367);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#212A18").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_283.setTransform(276.5,367);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#425A2A").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_284.setTransform(276.5,367);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#202817").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_285.setTransform(276.5,367);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#41592A").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_286.setTransform(276.5,367);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#1F2716").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_287.setTransform(276.5,367);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#405729").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_288.setTransform(276.5,367);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#1E2615").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_289.setTransform(276.5,367);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#3E5528").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_290.setTransform(276.5,367);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#1C2414").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_291.setTransform(276.5,367);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#3D5427").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_292.setTransform(276.5,367);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#1B2313").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_293.setTransform(276.5,367);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#3C5226").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_294.setTransform(276.5,367);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#1A2113").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_295.setTransform(276.5,367);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#3B5025").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_296.setTransform(276.5,367);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#192012").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_297.setTransform(276.5,367);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#394F24").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_298.setTransform(276.5,367);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#181E11").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_299.setTransform(276.5,367);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#384D23").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_300.setTransform(276.5,367);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#171D10").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_301.setTransform(276.5,367);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#374B23").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_302.setTransform(276.5,367);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#161B0F").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_303.setTransform(276.5,367);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#354A22").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_304.setTransform(276.5,367);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#141A0F").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_305.setTransform(276.5,367);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#344821").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_306.setTransform(276.5,367);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#13190E").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_307.setTransform(276.5,367);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#334620").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_308.setTransform(276.5,367);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#12170D").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_309.setTransform(276.5,367);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#32451F").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_310.setTransform(276.5,367);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#11160C").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_311.setTransform(276.5,367);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#30431E").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_312.setTransform(276.5,367);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#10140B").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_313.setTransform(276.5,367);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#2F411D").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_314.setTransform(276.5,367);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#0F130B").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_315.setTransform(276.5,367);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#2E401C").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_316.setTransform(276.5,367);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#0E110A").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_317.setTransform(276.5,367);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#2C3E1C").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_318.setTransform(276.5,367);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#0C1009").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_319.setTransform(276.5,367);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#2B3C1B").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_320.setTransform(276.5,367);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#0B0E08").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_321.setTransform(276.5,367);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#2A3B1A").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_322.setTransform(276.5,367);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#0A0D07").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_323.setTransform(276.5,367);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#293919").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_324.setTransform(276.5,367);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#090C06").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_325.setTransform(276.5,367);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#273718").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_326.setTransform(276.5,367);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#080A06").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_327.setTransform(276.5,367);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#263617").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_328.setTransform(276.5,367);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#070905").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_329.setTransform(276.5,367);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#253416").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_330.setTransform(276.5,367);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#060704").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_331.setTransform(276.5,367);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#233215").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_332.setTransform(276.5,367);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#050603").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_333.setTransform(276.5,367);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#223115").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_334.setTransform(276.5,367);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#030402").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_335.setTransform(276.5,367);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#212F14").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_336.setTransform(276.5,367);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#020302").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_337.setTransform(276.5,367);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#202D13").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_338.setTransform(276.5,367);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#010101").ss(2,1,1).p("EgrgACRQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+MhXBAAAg");
	this.shape_339.setTransform(276.5,367);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#1E2C12").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_340.setTransform(276.5,367);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#000000").ss(2,1,1).p("EgrgAEkQEkikI2iJQSQkaZyAAQQTAANSBx");
	this.shape_341.setTransform(276.5,352.3);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#1D2A11").s().p("EgrgAG4IAAknQEkikI2iJQSQkbZyAAQQTAANSBxIAAL+g");
	this.shape_342.setTransform(276.5,367);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_194},{t:this.shape_193}]}).to({state:[{t:this.shape_194},{t:this.shape_193}]},50).to({state:[{t:this.shape_196},{t:this.shape_195}]},1).to({state:[{t:this.shape_198},{t:this.shape_197}]},1).to({state:[{t:this.shape_200},{t:this.shape_199}]},1).to({state:[{t:this.shape_202},{t:this.shape_201}]},1).to({state:[{t:this.shape_204},{t:this.shape_203}]},1).to({state:[{t:this.shape_206},{t:this.shape_205}]},1).to({state:[{t:this.shape_208},{t:this.shape_207}]},1).to({state:[{t:this.shape_210},{t:this.shape_209}]},1).to({state:[{t:this.shape_212},{t:this.shape_211}]},1).to({state:[{t:this.shape_214},{t:this.shape_213}]},1).to({state:[{t:this.shape_216},{t:this.shape_215}]},1).to({state:[{t:this.shape_218},{t:this.shape_217}]},1).to({state:[{t:this.shape_220},{t:this.shape_219}]},1).to({state:[{t:this.shape_222},{t:this.shape_221}]},1).to({state:[{t:this.shape_224},{t:this.shape_223}]},1).to({state:[{t:this.shape_226},{t:this.shape_225}]},1).to({state:[{t:this.shape_228},{t:this.shape_227}]},1).to({state:[{t:this.shape_230},{t:this.shape_229}]},1).to({state:[{t:this.shape_232},{t:this.shape_231}]},1).to({state:[{t:this.shape_234},{t:this.shape_233}]},1).to({state:[{t:this.shape_236},{t:this.shape_235}]},1).to({state:[{t:this.shape_238},{t:this.shape_237}]},1).to({state:[{t:this.shape_240},{t:this.shape_239}]},1).to({state:[{t:this.shape_242},{t:this.shape_241}]},1).to({state:[{t:this.shape_244},{t:this.shape_243}]},1).to({state:[{t:this.shape_246},{t:this.shape_245}]},1).to({state:[{t:this.shape_248},{t:this.shape_247}]},1).to({state:[{t:this.shape_250},{t:this.shape_249}]},1).to({state:[{t:this.shape_252},{t:this.shape_251}]},1).to({state:[{t:this.shape_254},{t:this.shape_253}]},1).to({state:[{t:this.shape_256},{t:this.shape_255}]},1).to({state:[{t:this.shape_258},{t:this.shape_257}]},1).to({state:[{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_262},{t:this.shape_261}]},1).to({state:[{t:this.shape_264},{t:this.shape_263}]},1).to({state:[{t:this.shape_266},{t:this.shape_265}]},1).to({state:[{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_270},{t:this.shape_269}]},1).to({state:[{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_274},{t:this.shape_273}]},1).to({state:[{t:this.shape_276},{t:this.shape_275}]},1).to({state:[{t:this.shape_278},{t:this.shape_277}]},1).to({state:[{t:this.shape_280},{t:this.shape_279}]},1).to({state:[{t:this.shape_282},{t:this.shape_281}]},1).to({state:[{t:this.shape_284},{t:this.shape_283}]},1).to({state:[{t:this.shape_286},{t:this.shape_285}]},1).to({state:[{t:this.shape_288},{t:this.shape_287}]},1).to({state:[{t:this.shape_290},{t:this.shape_289}]},1).to({state:[{t:this.shape_292},{t:this.shape_291}]},1).to({state:[{t:this.shape_294},{t:this.shape_293}]},1).to({state:[{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_298},{t:this.shape_297}]},1).to({state:[{t:this.shape_300},{t:this.shape_299}]},1).to({state:[{t:this.shape_302},{t:this.shape_301}]},1).to({state:[{t:this.shape_304},{t:this.shape_303}]},1).to({state:[{t:this.shape_306},{t:this.shape_305}]},1).to({state:[{t:this.shape_308},{t:this.shape_307}]},1).to({state:[{t:this.shape_310},{t:this.shape_309}]},1).to({state:[{t:this.shape_312},{t:this.shape_311}]},1).to({state:[{t:this.shape_314},{t:this.shape_313}]},1).to({state:[{t:this.shape_316},{t:this.shape_315}]},1).to({state:[{t:this.shape_318},{t:this.shape_317}]},1).to({state:[{t:this.shape_320},{t:this.shape_319}]},1).to({state:[{t:this.shape_322},{t:this.shape_321}]},1).to({state:[{t:this.shape_324},{t:this.shape_323}]},1).to({state:[{t:this.shape_326},{t:this.shape_325}]},1).to({state:[{t:this.shape_328},{t:this.shape_327}]},1).to({state:[{t:this.shape_330},{t:this.shape_329}]},1).to({state:[{t:this.shape_332},{t:this.shape_331}]},1).to({state:[{t:this.shape_334},{t:this.shape_333}]},1).to({state:[{t:this.shape_336},{t:this.shape_335}]},1).to({state:[{t:this.shape_338},{t:this.shape_337}]},1).to({state:[{t:this.shape_340},{t:this.shape_339}]},1).to({state:[{t:this.shape_342},{t:this.shape_341}]},1).wait(1));

	// sun
	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#F3B94B").s().p("Ai4C5QhNhNAAhsQAAhrBNhOQBNhMBrAAQBsAABNBMQBNBOAABrQAABshNBNQhNBNhsAAQhrAAhNhNg");
	this.shape_343.setTransform(531,-45.8);

	this.instance_4 = new lib.sun();
	this.instance_4.parent = this;
	this.instance_4.setTransform(531,-45.8,1,1,0,0,0,26.2,26.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_343}]}).to({state:[{t:this.instance_4}]},50).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50).to({_off:false},0).wait(1).to({x:525.8,y:-34.4},0).wait(1).to({x:520.6,y:-23},0).wait(1).to({x:515.4,y:-11.6},0).wait(1).to({x:510.2,y:-0.3},0).wait(1).to({x:505,y:11.1},0).wait(1).to({x:499.9,y:22.5},0).wait(1).to({x:494.7,y:33.9},0).wait(1).to({x:489.6,y:45.3},0).wait(1).to({x:484.5,y:56.7},0).wait(1).to({x:479.4,y:68.1},0).wait(1).to({x:474.4,y:79.6},0).wait(1).to({x:469.3,y:91},0).wait(1).to({x:464.3,y:102.5},0).wait(1).to({x:459.3,y:113.9},0).wait(1).to({x:454.4,y:125.4},0).wait(1).to({x:449.5,y:136.9},0).wait(1).to({x:444.6,y:148.4},0).wait(1).to({x:439.7,y:159.9},0).wait(1).to({x:434.9,y:171.5},0).wait(1).to({x:430,y:183},0).wait(1).to({x:425.3,y:194.6},0).wait(1).to({x:420.6,y:206.2},0).wait(1).to({x:415.9,y:217.8},0).wait(1).to({x:411.2,y:229.4},0).wait(1).to({x:406.6,y:241},0).wait(1).to({x:402,y:252.6},0).wait(1).to({x:397.5,y:264.3},0).wait(1).to({x:393,y:275.9},0).wait(1).to({x:388.5,y:287.6},0).wait(1).to({x:384.1,y:299.3},0).wait(1).to({x:379.7,y:311},0).wait(1).to({x:375.3,y:322.8},0).wait(1).to({x:371,y:334.5},0).wait(1).to({x:366.8,y:346.3},0).wait(1).to({x:362.5,y:358},0).wait(1).to({x:358.4,y:369.8},0).wait(1).to({x:354.2,y:381.6},0).wait(1).to({x:350.1,y:393.4},0).wait(1).to({x:346,y:405.2},0).wait(1).to({x:342,y:417.1},0).wait(1).to({x:338,y:428.9},0).wait(1).to({x:334,y:440.8},0).wait(32).to({x:326},0).wait(1));

	// Layer 7
	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.lf(["#2EA6C4","#3A5083","#3A5083","#C2AB7C","#C2AB7C"],[0,0.91,1,1,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_344.setTransform(274.6,200.6);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.lf(["#32A1BE","#405483","#405483","#C2AB7C","#C2AB7C"],[0,0.914,1,1,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_345.setTransform(274.6,200.6);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.lf(["#359DB9","#455882","#455882","#C2AB7C","#C2AB7C"],[0,0.918,1,1,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_346.setTransform(274.6,200.6);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.lf(["#3999B3","#4B5B82","#4B5B82","#C2AB7C","#C2AB7C"],[0,0.922,1,1,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_347.setTransform(274.6,200.6);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.lf(["#3C94AD","#515F82","#515F82","#C2AB7C","#C2AB7C"],[0,0.925,1,1,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_348.setTransform(274.6,200.6);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.lf(["#4090A7","#566382","#566382","#C2AB7C","#C2AB7C"],[0,0.929,1,1,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_349.setTransform(274.6,200.6);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.lf(["#438BA2","#5C6781","#5C6781","#C2AB7C","#C2AB7C"],[0,0.933,1,1,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_350.setTransform(274.6,200.6);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.lf(["#47869C","#626B81","#626B81","#C2AB7C","#C2AB7C"],[0,0.937,1,1,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_351.setTransform(274.6,200.6);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.lf(["#4A8296","#676E81","#676E81","#C2AB7C","#C2AB7C"],[0,0.941,1,1,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_352.setTransform(274.6,200.6);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.lf(["#4E7E90","#6D7280","#6D7280","#C2AB7C","#C2AB7C"],[0,0.945,1,1,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_353.setTransform(274.6,200.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.lf(["#51798A","#737680","#737680","#C2AB7C","#C2AB7C"],[0,0.949,1,1,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_354.setTransform(274.6,200.6);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.lf(["#557585","#787A80","#787A80","#C2AB7C","#C2AB7C"],[0,0.953,1,1,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_355.setTransform(274.6,200.6);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.lf(["#59707F","#7E7E80","#7E7E80","#C2AB7C","#C2AB7C"],[0,0.957,1,1,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_356.setTransform(274.6,200.6);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.lf(["#5C6B79","#84817F","#84817F","#C2AB7C","#C2AB7C"],[0,0.957,1,1,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_357.setTransform(274.6,200.6);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.lf(["#606774","#89857F","#89857F","#C2AB7C","#C2AB7C"],[0,0.961,1,1,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_358.setTransform(274.6,200.6);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.lf(["#63636E","#8F897F","#8F897F","#C2AB7C","#C2AB7C"],[0,0.965,1,1,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_359.setTransform(274.6,200.6);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.lf(["#675E68","#958D7E","#958D7E","#C2AB7C","#C2AB7C"],[0,0.969,1,1,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_360.setTransform(274.6,200.6);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.lf(["#6A5A62","#9A907E","#9A907E","#C2AB7C","#C2AB7C"],[0,0.973,1,1,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_361.setTransform(274.6,200.6);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.lf(["#6E555D","#A0947E","#A0947E","#C2AB7C","#C2AB7C"],[0,0.976,1,1,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_362.setTransform(274.6,200.6);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.lf(["#715057","#A6987D","#A6987D","#C2AB7C","#C2AB7C"],[0,0.98,1,1,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_363.setTransform(274.6,200.6);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.lf(["#754C51","#AB9C7D","#AB9C7D","#C2AB7C","#C2AB7C"],[0,0.984,1,1,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_364.setTransform(274.6,200.6);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.lf(["#78484B","#B1A07D","#B1A07D","#C2AB7C","#C2AB7C"],[0,0.988,1,1,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_365.setTransform(274.6,200.6);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.lf(["#7C4345","#B7A37D","#B7A37D","#C2AB7C","#C2AB7C"],[0,0.992,1,1,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_366.setTransform(274.6,200.6);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.lf(["#7F3F40","#BCA77C","#BCA77C","#C2AB7C","#C2AB7C"],[0,0.996,1,1,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_367.setTransform(274.6,200.6);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.lf(["#833A3A","#C2AB7C"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_368.setTransform(274.6,200.6);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.lf(["#813939","#BFA87A"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_369.setTransform(274.6,200.6);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.lf(["#7E3838","#BCA577"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_370.setTransform(274.6,200.6);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.lf(["#7C3737","#B8A275"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_371.setTransform(274.6,200.6);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.lf(["#7A3636","#B59F73"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_372.setTransform(274.6,200.6);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.lf(["#773535","#B29C70"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_373.setTransform(274.6,200.6);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.lf(["#753434","#AF996E"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_374.setTransform(274.6,200.6);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.lf(["#733333","#AB976C"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_375.setTransform(274.6,200.6);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.lf(["#713232","#A8946A"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_376.setTransform(274.6,200.6);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.lf(["#6E3232","#A59167"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_377.setTransform(274.6,200.6);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.lf(["#6C3131","#A28E65"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_378.setTransform(274.6,200.6);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.lf(["#6A3030","#9E8B63"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_379.setTransform(274.6,200.6);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.lf(["#672F2F","#9B8860"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_380.setTransform(274.6,200.6);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.lf(["#652E2E","#98855E"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_381.setTransform(274.6,200.6);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.lf(["#632D2D","#95825C"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_382.setTransform(274.6,200.6);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.lf(["#602C2C","#917F59"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_383.setTransform(274.6,200.6);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.lf(["#5E2B2B","#8E7C57"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_384.setTransform(274.6,200.6);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.lf(["#5C2A2A","#8B7955"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_385.setTransform(274.6,200.6);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.lf(["#5A2929","#887653"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_386.setTransform(274.6,200.6);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.lf(["#572828","#847450"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_387.setTransform(274.6,200.6);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.lf(["#552727","#81714E"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_388.setTransform(274.6,200.6);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.lf(["#532626","#7E6E4C"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_389.setTransform(274.6,200.6);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.lf(["#502525","#7B6B49"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_390.setTransform(274.6,200.6);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.lf(["#4E2424","#776847"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_391.setTransform(274.6,200.6);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.lf(["#4C2323","#746545"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_392.setTransform(274.6,200.6);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.lf(["#4A2323","#716243"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_393.setTransform(274.6,200.6);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.lf(["#472222","#6E5F40"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_394.setTransform(274.6,200.6);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.lf(["#452121","#6B5C3E"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_395.setTransform(274.6,200.6);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.lf(["#432020","#67593C"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_396.setTransform(274.6,200.6);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.lf(["#401F1F","#645639"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_397.setTransform(274.6,200.6);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.lf(["#3E1E1E","#615337"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_398.setTransform(274.6,200.6);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.lf(["#3C1D1D","#5E5035"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_399.setTransform(274.6,200.6);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.lf(["#391C1C","#5A4E32"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_400.setTransform(274.6,200.6);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.lf(["#371B1B","#574B30"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_401.setTransform(274.6,200.6);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.lf(["#351A1A","#54482E"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_402.setTransform(274.6,200.6);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.lf(["#331919","#51452C"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_403.setTransform(274.6,200.6);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.lf(["#301818","#4D4229"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_404.setTransform(274.6,200.6);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.lf(["#2E1717","#4A3F27"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_405.setTransform(274.6,200.6);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.lf(["#2C1616","#473C25"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_406.setTransform(274.6,200.6);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.lf(["#291515","#443922"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_407.setTransform(274.6,200.6);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.lf(["#271414","#403620"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_408.setTransform(274.6,200.6);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.lf(["#251313","#3D331E"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_409.setTransform(274.6,200.6);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.lf(["#221313","#3A301B"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_410.setTransform(274.6,200.6);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.lf(["#201212","#372D19"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_411.setTransform(274.6,200.6);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.lf(["#1E1111","#332B17"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_412.setTransform(274.6,200.6);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.lf(["#1C1010","#302815"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_413.setTransform(274.6,200.6);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.lf(["#190F0F","#2D2512"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_414.setTransform(274.6,200.6);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.lf(["#170E0E","#2A2210"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_415.setTransform(274.6,200.6);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.lf(["#150D0D","#261F0E"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_416.setTransform(274.6,200.6);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.lf(["#120C0C","#231C0B"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_417.setTransform(274.6,200.6);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.lf(["#100B0B","#201909"],[0,1],-141.2,212.4,141.3,-212.4).s().p("EgrDAfgMAAAg++MBWHAAAMAAAA++g");
	this.shape_418.setTransform(274.6,200.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_344}]}).to({state:[{t:this.shape_344}]},50).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(272,128,560.2,483);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;