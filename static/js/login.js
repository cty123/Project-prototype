(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"login_atlas_", frames: [[520,2002,550,380],[2002,0,1600,1600],[2002,1602,1920,1200],[0,2002,518,518],[0,0,2000,2000]]}
];


// symbols:



(lib.c = function() {
	this.spriteSheet = ss["login_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cprogramming = function() {
	this.spriteSheet = ss["login_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.graygradient = function() {
	this.spriteSheet = ss["login_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.java = function() {
	this.spriteSheet = ss["login_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.python = function() {
	this.spriteSheet = ss["login_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
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


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cprogramming();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.07,0.073);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,112.1,116.1), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.229,0.216);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,126,82), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.python();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.059,0.053);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,118.1,106.2), null);


(lib.java_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.java();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.216,0.259);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.java_1, new cjs.Rectangle(0,0,112,134), null);


// stage content:
(lib.login = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// java
	this.instance = new lib.java_1();
	this.instance.parent = this;
	this.instance.setTransform(136.1,302.2,0.301,0.283,-29.9,0,0,48.8,58.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:56,regY:67,scaleX:0.31,scaleY:0.29,rotation:-33,x:139.2,y:303},0).wait(1).to({scaleX:0.33,scaleY:0.3,rotation:-36,x:139.4,y:302.8},0).wait(1).to({scaleX:0.34,scaleY:0.31,rotation:-39.1,x:139.6,y:302.7},0).wait(1).to({scaleX:0.35,scaleY:0.32,rotation:-42.1,x:139.7,y:302.4},0).wait(1).to({scaleX:0.36,scaleY:0.33,rotation:-45.1,x:139.8,y:302.2},0).wait(1).to({scaleX:0.37,scaleY:0.33,rotation:-48.2,x:139.9,y:302},0).wait(1).to({scaleX:0.39,scaleY:0.34,rotation:-51.2,x:140,y:301.8},0).wait(1).to({scaleX:0.4,scaleY:0.35,rotation:-54.2,x:140.1,y:301.5},0).wait(1).to({scaleX:0.41,scaleY:0.36,rotation:-57.2,y:301.3},0).wait(1).to({scaleX:0.42,scaleY:0.37,rotation:-60.3,x:140.2,y:301.1},0).wait(1).to({scaleX:0.43,scaleY:0.38,rotation:-63.3,x:140.3,y:300.8},0).wait(1).to({scaleX:0.45,scaleY:0.38,rotation:-66.3,x:140.2,y:300.5},0).wait(1).to({scaleX:0.46,scaleY:0.39,rotation:-69.3,y:300.3},0).wait(1).to({scaleX:0.47,scaleY:0.4,rotation:-72.4,y:300},0).wait(1).to({scaleX:0.48,scaleY:0.41,rotation:-75.4,y:299.7},0).wait(1).to({scaleX:0.5,scaleY:0.42,rotation:-78.4,x:140.1,y:299.4},0).wait(1).to({scaleX:0.51,scaleY:0.43,rotation:-81.4,y:299.1},0).wait(1).to({scaleX:0.52,scaleY:0.43,rotation:-84.5,x:140,y:298.8},0).wait(1).to({scaleX:0.53,scaleY:0.44,rotation:-87.5,x:139.9,y:298.5},0).wait(1).to({scaleX:0.54,scaleY:0.45,rotation:-90.5,x:139.8,y:298.3},0).wait(1).to({scaleX:0.55,scaleY:0.46,rotation:-93.5,x:139.7,y:298},0).wait(1).to({scaleX:0.56,scaleY:0.48,rotation:-96.6,x:139.5,y:297.7},0).wait(1).to({scaleX:0.57,scaleY:0.49,rotation:-99.6,x:139.4,y:297.4},0).wait(1).to({scaleX:0.58,scaleY:0.5,rotation:-102.6,x:139.2,y:297.2},0).wait(1).to({scaleX:0.59,scaleY:0.52,rotation:-105.6,x:139.1,y:296.9},0).wait(1).to({scaleX:0.61,scaleY:0.53,rotation:-108.7,x:138.8,y:296.7},0).wait(1).to({scaleX:0.62,scaleY:0.54,rotation:-111.7,x:138.6,y:296.4},0).wait(1).to({scaleX:0.63,scaleY:0.56,rotation:-114.7,x:138.3,y:296.2},0).wait(1).to({scaleX:0.64,scaleY:0.57,rotation:-117.7,x:138.1,y:296},0).wait(1).to({scaleX:0.65,scaleY:0.59,rotation:-120.8,x:137.8,y:295.7},0).wait(1).to({scaleX:0.66,scaleY:0.6,rotation:-123.8,x:137.5,y:295.5},0).wait(1).to({scaleX:0.67,scaleY:0.61,rotation:-126.8,x:137.2,y:295.4},0).wait(1).to({scaleX:0.68,scaleY:0.63,rotation:-129.8,x:136.9,y:295.1},0).wait(1).to({scaleX:0.69,scaleY:0.64,rotation:-132.9,x:136.6,y:295},0).wait(1).to({scaleX:0.7,scaleY:0.65,rotation:-135.9,x:136.2,y:294.8},0).wait(1).to({scaleX:0.71,scaleY:0.67,rotation:-138.9,x:135.8,y:294.7},0).wait(1).to({scaleX:0.72,scaleY:0.68,rotation:-141.9,x:135.4,y:294.6},0).wait(1).to({scaleX:0.73,scaleY:0.69,rotation:-145,x:135,y:294.5},0).wait(1).to({scaleX:0.74,scaleY:0.71,rotation:-148,x:134.6,y:294.4},0).wait(1).to({scaleX:0.75,scaleY:0.72,rotation:-151,x:134.2},0).wait(1).to({scaleX:0.77,scaleY:0.74,rotation:-154,x:133.7,y:294.3},0).wait(1).to({scaleX:0.79,scaleY:0.75,rotation:-157.1,x:133.2},0).wait(1).to({scaleX:0.81,scaleY:0.77,rotation:-160.1,x:132.8},0).wait(1).to({scaleX:0.83,scaleY:0.78,rotation:-163.1,x:132.2},0).wait(1).to({scaleX:0.85,scaleY:0.8,rotation:-166.1,x:131.7,y:294.4},0).wait(1).to({scaleX:0.87,scaleY:0.81,rotation:-169.2,x:131.2},0).wait(1).to({scaleX:0.88,scaleY:0.83,rotation:-172.2,x:130.7,y:294.6},0).wait(1).to({scaleX:0.9,scaleY:0.84,rotation:-175.2,x:130.1,y:294.7},0).wait(1).to({scaleX:0.92,scaleY:0.86,rotation:-178.2,x:129.6,y:294.9},0).wait(1).to({scaleX:0.94,scaleY:0.87,rotation:-181.3,x:129.1,y:295.1},0).wait(1).to({scaleX:0.96,scaleY:0.89,rotation:-184.3,x:128.6,y:295.4},0).wait(1).to({scaleX:0.98,scaleY:0.9,rotation:-187.3,x:128.1,y:295.7},0).wait(1).to({scaleX:1,scaleY:0.92,rotation:-190.3,x:127.6,y:296},0).wait(1).to({scaleX:1.02,scaleY:0.94,rotation:-193.4,x:127.2,y:296.4},0).wait(1).to({scaleX:1.04,scaleY:0.95,rotation:-196.4,x:126.7,y:296.8},0).wait(1).to({scaleX:1.06,scaleY:0.97,rotation:-199.4,x:126.2,y:297.2},0).wait(1).to({scaleX:1.08,scaleY:0.98,rotation:-202.4,x:125.8,y:297.7},0).wait(1).to({scaleX:1.1,scaleY:1,rotation:-205.5,x:125.4,y:298.2},0).wait(1).to({scaleX:1.12,scaleY:1.01,rotation:-208.5,x:125,y:298.7},0).wait(1).to({scaleX:1.14,scaleY:1.03,rotation:-211.5,x:124.7,y:299.2},0).wait(1).to({scaleX:1.16,scaleY:1.04,rotation:-214.5,x:124.3,y:299.8},0).wait(1).to({scaleX:1.18,scaleY:1.06,rotation:-217.6,x:124,y:300.4},0).wait(1).to({scaleX:1.2,scaleY:1.07,rotation:-220.6,x:123.8,y:301.1},0).wait(1).to({scaleX:1.22,scaleY:1.09,rotation:-223.6,x:123.5,y:301.7},0).wait(1).to({scaleX:1.24,scaleY:1.1,rotation:-226.6,x:123.3,y:302.4},0).wait(1).to({scaleX:1.25,scaleY:1.12,rotation:-229.7,x:123.2,y:303.1},0).wait(1).to({scaleX:1.23,scaleY:1.1,rotation:-232.7,x:123.4,y:303.7},0).wait(1).to({scaleX:1.2,scaleY:1.09,rotation:-235.7,x:123.8,y:304.3},0).wait(1).to({scaleX:1.18,scaleY:1.07,rotation:-238.7,x:124.1,y:304.9},0).wait(1).to({scaleX:1.15,scaleY:1.06,rotation:-241.8,x:124.5,y:305.4},0).wait(1).to({scaleX:1.13,scaleY:1.04,rotation:-244.8,x:124.8,y:305.9},0).wait(1).to({scaleX:1.1,scaleY:1.02,rotation:-247.8,x:125.2,y:306.3},0).wait(1).to({scaleX:1.08,scaleY:1.01,rotation:-250.8,x:125.7,y:306.8},0).wait(1).to({scaleX:1.05,scaleY:0.99,rotation:-253.9,x:126.1,y:307.2},0).wait(1).to({scaleX:1.03,scaleY:0.98,rotation:-256.9,x:126.5,y:307.6},0).wait(1).to({scaleX:1,scaleY:0.96,rotation:-259.9,x:127,y:307.9},0).wait(1).to({scaleX:0.98,scaleY:0.94,rotation:-262.9,x:127.5,y:308.3},0).wait(1).to({scaleX:0.95,scaleY:0.93,rotation:-266,x:127.9,y:308.5},0).wait(1).to({scaleX:0.93,scaleY:0.91,rotation:-269,x:128.4,y:308.7},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-272,x:128.9,y:308.9},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:-275,x:129.4,y:309.1},0).wait(1).to({scaleX:0.85,scaleY:0.86,rotation:-278.1,x:129.9,y:309.2},0).wait(1).to({scaleX:0.83,scaleY:0.85,rotation:-281.1,x:130.3,y:309.4},0).wait(1).to({scaleX:0.8,scaleY:0.83,rotation:-284.1,x:130.8,y:309.5},0).wait(1).to({scaleX:0.79,scaleY:0.82,rotation:-287.1,x:131.3,y:309.6},0).wait(1).to({scaleX:0.77,scaleY:0.8,rotation:-290.2,x:131.8,y:309.7},0).wait(1).to({scaleX:0.76,scaleY:0.78,rotation:-293.2,x:132.3,y:309.8},0).wait(1).to({scaleX:0.74,scaleY:0.76,rotation:-296.2,x:132.8},0).wait(1).to({scaleX:0.73,scaleY:0.75,rotation:-299.2,x:133.3},0).wait(1).to({scaleX:0.72,scaleY:0.73,rotation:-302.3,x:133.7,y:309.7},0).wait(1).to({scaleX:0.7,scaleY:0.71,rotation:-305.3,x:134.2},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-308.3,x:134.6,y:309.6},0).wait(1).to({scaleX:0.67,scaleY:0.68,rotation:-311.3,x:135.1,y:309.5},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:-314.4,x:135.5,y:309.4},0).wait(1).to({scaleX:0.65,scaleY:0.64,rotation:-317.4,x:135.9,y:309.3},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:-320.4,x:136.3,y:309.1},0).wait(1).to({scaleX:0.62,scaleY:0.61,rotation:-323.4,x:136.6,y:308.8},0).wait(1).to({scaleX:0.6,scaleY:0.59,rotation:-326.5,x:137,y:308.7},0).wait(1).to({scaleX:0.59,scaleY:0.57,rotation:-329.5,x:137.3,y:308.4},0).wait(1).to({scaleX:0.57,scaleY:0.56,rotation:-332.5,x:137.6,y:308.2},0).wait(1).to({scaleX:0.56,scaleY:0.54,rotation:-335.5,x:137.9,y:307.9},0).wait(1).to({scaleX:0.55,scaleY:0.53,rotation:-338.6,x:138.1,y:307.6},0).wait(1).to({scaleX:0.53,scaleY:0.51,rotation:-341.6,x:138.4,y:307.4},0).wait(1).to({scaleX:0.52,scaleY:0.5,rotation:-344.6,x:138.6,y:307.1},0).wait(1).to({scaleX:0.5,scaleY:0.48,rotation:-347.6,x:138.7,y:306.8},0).wait(1).to({scaleX:0.49,scaleY:0.47,rotation:-350.7,x:138.9,y:306.6},0).wait(1).to({scaleX:0.47,scaleY:0.45,rotation:-353.7,x:139,y:306.3},0).wait(1).to({scaleX:0.46,scaleY:0.44,rotation:-356.7,x:139.1,y:306},0).wait(1).to({scaleX:0.45,scaleY:0.43,rotation:-359.7,x:139.2,y:305.7},0).wait(1).to({scaleX:0.43,scaleY:0.41,rotation:-362.8,x:139.3,y:305.4},0).wait(1).to({scaleX:0.42,scaleY:0.4,rotation:-365.8,x:139.4,y:305.2},0).wait(1).to({scaleX:0.4,scaleY:0.38,rotation:-368.8,y:304.9},0).wait(1).to({scaleX:0.39,scaleY:0.37,rotation:-371.8,y:304.6},0).wait(1).to({scaleX:0.37,scaleY:0.35,rotation:-374.9,y:304.4},0).wait(1).to({scaleX:0.36,scaleY:0.34,rotation:-377.9,y:304.1},0).wait(1).to({scaleX:0.35,scaleY:0.33,rotation:-380.9,x:139.3,y:303.8},0).wait(1).to({scaleX:0.33,scaleY:0.31,rotation:-383.9,y:303.6},0).wait(1).to({scaleX:0.32,scaleY:0.3,rotation:-387,x:139.2,y:303.4},0).wait(1).to({scaleX:0.3,scaleY:0.28,rotation:-390,x:139.1,y:303.1},0).wait(1));

	// c
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(404.1,318.1,1.497,1.571,29.9,0,0,55,57);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:56,regY:58,scaleX:1.48,scaleY:1.55,rotation:33,x:404.5,y:320.2},0).wait(1).to({scaleX:1.47,scaleY:1.53,rotation:36,x:404.4},0).wait(1).to({scaleX:1.45,scaleY:1.51,rotation:39.1,x:404.3},0).wait(1).to({scaleX:1.43,scaleY:1.49,rotation:42.1,x:404.2},0).wait(1).to({scaleX:1.42,scaleY:1.47,rotation:45.1,x:404},0).wait(1).to({scaleX:1.4,scaleY:1.45,rotation:48.2,x:403.9,y:320.1},0).wait(1).to({scaleX:1.38,scaleY:1.43,rotation:51.2,x:403.8},0).wait(1).to({scaleX:1.37,scaleY:1.41,rotation:54.2,x:403.7},0).wait(1).to({scaleX:1.35,scaleY:1.38,rotation:57.2,x:403.6,y:320},0).wait(1).to({scaleX:1.33,scaleY:1.36,rotation:60.3},0).wait(1).to({scaleX:1.32,scaleY:1.34,rotation:63.3,x:403.4,y:319.9},0).wait(1).to({scaleX:1.3,scaleY:1.32,rotation:66.3,x:403.3,y:319.8},0).wait(1).to({scaleX:1.28,scaleY:1.3,rotation:69.3,x:403.2},0).wait(1).to({scaleX:1.27,scaleY:1.28,rotation:72.4,y:319.7},0).wait(1).to({scaleX:1.25,scaleY:1.26,rotation:75.4,x:403.1},0).wait(1).to({scaleX:1.23,scaleY:1.24,rotation:78.4,y:319.6},0).wait(1).to({scaleX:1.22,scaleY:1.22,rotation:81.4,x:403,y:319.5},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:84.5,x:402.9,y:319.4},0).wait(1).to({scaleX:1.18,scaleY:1.18,rotation:87.5,y:319.3},0).wait(1).to({scaleX:1.17,scaleY:1.15,rotation:90.5},0).wait(1).to({scaleX:1.15,scaleY:1.14,rotation:93.5,x:402.8,y:319.2},0).wait(1).to({scaleX:1.13,scaleY:1.13,rotation:96.6,y:319.1},0).wait(1).to({scaleX:1.11,scaleY:1.12,rotation:99.6,x:402.7,y:319},0).wait(1).to({scaleX:1.09,scaleY:1.1,rotation:102.6,y:318.9},0).wait(1).to({scaleX:1.08,scaleY:1.09,rotation:105.6,x:402.6},0).wait(1).to({scaleX:1.06,scaleY:1.08,rotation:108.7,y:318.8},0).wait(1).to({scaleX:1.04,scaleY:1.06,rotation:111.7,y:318.7},0).wait(1).to({scaleX:1.02,scaleY:1.05,rotation:114.7,y:318.6},0).wait(1).to({scaleX:1,scaleY:1.04,rotation:117.7,y:318.5},0).wait(1).to({scaleX:0.98,scaleY:1.02,rotation:120.8,y:318.4},0).wait(1).to({scaleX:0.97,scaleY:1.01,rotation:123.8,y:318.3},0).wait(1).to({scaleX:0.95,scaleY:1,rotation:126.8,y:318.2},0).wait(1).to({scaleX:0.93,scaleY:0.98,rotation:129.8,y:318.1},0).wait(1).to({scaleX:0.91,scaleY:0.97,rotation:132.9,x:402.7},0).wait(1).to({scaleX:0.89,scaleY:0.96,rotation:135.9,y:318},0).wait(1).to({scaleX:0.88,scaleY:0.94,rotation:138.9},0).wait(1).to({scaleX:0.86,scaleY:0.93,rotation:141.9,y:317.9},0).wait(1).to({scaleX:0.84,scaleY:0.92,rotation:145,x:402.8,y:317.8},0).wait(1).to({scaleX:0.82,scaleY:0.91,rotation:148,y:317.7},0).wait(1).to({scaleX:0.8,scaleY:0.89,rotation:151,x:402.9},0).wait(1).to({scaleX:0.78,scaleY:0.88,rotation:154,y:317.6},0).wait(1).to({scaleX:0.78,scaleY:0.87,rotation:157.1},0).wait(1).to({scaleX:0.78,scaleY:0.86,rotation:160.1,x:403,y:317.5},0).wait(1).to({scaleX:0.77,scaleY:0.86,rotation:163.1},0).wait(1).to({scaleX:0.77,scaleY:0.85,rotation:166.1,y:317.4},0).wait(1).to({scaleX:0.76,scaleY:0.84,rotation:169.2,x:403.1},0).wait(1).to({scaleX:0.76,scaleY:0.83,rotation:172.2},0).wait(1).to({scaleX:0.76,scaleY:0.83,rotation:175.2,x:403.2,y:317.3},0).wait(1).to({scaleX:0.75,scaleY:0.82,rotation:178.2},0).wait(1).to({scaleX:0.75,scaleY:0.81,rotation:181.3,x:403.3,y:317.2},0).wait(1).to({scaleX:0.74,scaleY:0.8,rotation:184.3},0).wait(1).to({scaleX:0.74,scaleY:0.8,rotation:187.3,x:403.4},0).wait(1).to({scaleX:0.73,scaleY:0.79,rotation:190.3},0).wait(1).to({scaleX:0.73,scaleY:0.78,rotation:193.4,y:317.1},0).wait(1).to({scaleX:0.73,scaleY:0.77,rotation:196.4,x:403.5},0).wait(1).to({scaleX:0.72,scaleY:0.77,rotation:199.4},0).wait(1).to({scaleX:0.72,scaleY:0.76,rotation:202.4,x:403.6,y:317},0).wait(1).to({scaleX:0.71,scaleY:0.75,rotation:205.5,x:403.7,y:317.1},0).wait(1).to({scaleX:0.71,scaleY:0.74,rotation:208.5},0).wait(1).to({scaleX:0.71,scaleY:0.74,rotation:211.5,x:403.8,y:317},0).wait(1).to({scaleX:0.7,scaleY:0.73,rotation:214.5},0).wait(1).to({scaleX:0.7,scaleY:0.72,rotation:217.6,x:403.9},0).wait(1).to({scaleX:0.69,scaleY:0.71,rotation:220.6},0).wait(1).to({scaleX:0.69,scaleY:0.71,rotation:223.6,x:404,y:317.1},0).wait(1).to({scaleX:0.68,scaleY:0.7,rotation:226.6},0).wait(1).to({scaleX:0.68,scaleY:0.69,rotation:229.7,x:404.1},0).wait(1).to({scaleX:0.7,scaleY:0.71,rotation:232.7,x:404.2},0).wait(1).to({scaleX:0.72,scaleY:0.73,rotation:235.7},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:238.7,x:404.3,y:317},0).wait(1).to({scaleX:0.75,scaleY:0.76,rotation:241.8},0).wait(1).to({scaleX:0.77,scaleY:0.78,rotation:244.8,x:404.4},0).wait(1).to({scaleX:0.79,scaleY:0.8,rotation:247.8},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:250.8,x:404.5},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:253.9,x:404.6},0).wait(1).to({scaleX:0.84,scaleY:0.85,rotation:256.9},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:259.9,x:404.7},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:262.9,x:404.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:266,y:317.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:269,x:404.9,y:317},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:272,x:405,y:317.1},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:275,x:405.1,y:317.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:278.1},0).wait(1).to({scaleX:0.99,scaleY:0.98,rotation:281.1,x:405.2,y:317.3},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:284.1},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:287.1,x:405.3},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:290.2,x:405.4,y:317.4},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:293.2,y:317.5},0).wait(1).to({scaleX:1.06,scaleY:1.07,rotation:296.2},0).wait(1).to({scaleX:1.07,scaleY:1.09,rotation:299.2,x:405.5,y:317.6},0).wait(1).to({scaleX:1.07,scaleY:1.1,rotation:302.3,y:317.7},0).wait(1).to({scaleX:1.08,scaleY:1.12,rotation:305.3,x:405.6,y:317.8},0).wait(1).to({scaleX:1.09,scaleY:1.14,rotation:308.3,y:317.9},0).wait(1).to({scaleX:1.1,scaleY:1.16,rotation:311.3,x:405.7,y:318},0).wait(1).to({scaleX:1.1,scaleY:1.17,rotation:314.4,y:318.1},0).wait(1).to({scaleX:1.11,scaleY:1.19,rotation:317.4,y:318.2},0).wait(1).to({scaleX:1.12,scaleY:1.21,rotation:320.4},0).wait(1).to({scaleX:1.12,scaleY:1.22,rotation:323.4,y:318.3},0).wait(1).to({scaleX:1.13,scaleY:1.24,rotation:326.5,y:318.5},0).wait(1).to({scaleX:1.14,scaleY:1.26,rotation:329.5},0).wait(1).to({scaleX:1.15,scaleY:1.28,rotation:332.5,y:318.6},0).wait(1).to({scaleX:1.15,scaleY:1.29,rotation:335.5,y:318.7},0).wait(1).to({scaleX:1.16,scaleY:1.31,rotation:338.6,x:405.6,y:318.9},0).wait(1).to({scaleX:1.18,scaleY:1.33,rotation:341.6,x:405.7},0).wait(1).to({scaleX:1.2,scaleY:1.34,rotation:344.6,x:405.6,y:319},0).wait(1).to({scaleX:1.22,scaleY:1.36,rotation:347.6,y:319.1},0).wait(1).to({scaleX:1.24,scaleY:1.37,rotation:350.7,x:405.5,y:319.2},0).wait(1).to({scaleX:1.26,scaleY:1.39,rotation:353.7,y:319.3},0).wait(1).to({scaleX:1.28,scaleY:1.4,rotation:356.7,x:405.4,y:319.4},0).wait(1).to({scaleX:1.3,scaleY:1.42,rotation:359.7,y:319.5},0).wait(1).to({scaleX:1.32,scaleY:1.43,rotation:362.8,x:405.3,y:319.6},0).wait(1).to({scaleX:1.34,scaleY:1.45,rotation:365.8,x:405.2,y:319.7},0).wait(1).to({scaleX:1.36,scaleY:1.47,rotation:368.8},0).wait(1).to({scaleX:1.38,scaleY:1.48,rotation:371.8,x:405.1,y:319.8},0).wait(1).to({scaleX:1.4,scaleY:1.5,rotation:374.9,y:319.9},0).wait(1).to({scaleX:1.42,scaleY:1.51,rotation:377.9,x:405,y:320},0).wait(1).to({scaleX:1.44,scaleY:1.53,rotation:380.9,x:404.9},0).wait(1).to({scaleX:1.46,scaleY:1.54,rotation:383.9,x:404.8,y:320.1},0).wait(1).to({scaleX:1.48,scaleY:1.56,rotation:387,x:404.7,y:320.2},0).wait(1).to({scaleX:1.5,scaleY:1.57,rotation:390,x:404.6},0).wait(1));

	// c++
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(437.9,76.9,1,1,-150,0,0,62.8,40.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:63,regY:41,scaleX:0.99,scaleY:0.99,rotation:-153,x:437.8,y:76.6},0).wait(1).to({scaleX:0.97,scaleY:0.98,rotation:-156.1},0).wait(1).to({scaleX:0.96,scaleY:0.97,rotation:-159.1,y:76.7},0).wait(1).to({scaleX:0.95,scaleY:0.96,rotation:-162.1},0).wait(1).to({scaleX:0.93,scaleY:0.95,rotation:-165.1},0).wait(1).to({scaleX:0.92,scaleY:0.94,rotation:-168.2},0).wait(1).to({scaleX:0.91,scaleY:0.93,rotation:-171.2,x:437.7,y:76.8},0).wait(1).to({scaleX:0.89,scaleY:0.92,rotation:-174.2,x:437.8,y:76.7},0).wait(1).to({scaleX:0.88,scaleY:0.91,rotation:-177.2,x:437.7},0).wait(1).to({scaleX:0.87,scaleY:0.9,rotation:-180.3,y:76.8},0).wait(1).to({scaleX:0.85,scaleY:0.88,rotation:-183.3,y:76.7},0).wait(1).to({scaleX:0.84,scaleY:0.87,rotation:-186.3,y:76.8},0).wait(1).to({scaleX:0.83,scaleY:0.86,rotation:-189.3},0).wait(1).to({scaleX:0.81,scaleY:0.85,rotation:-192.4},0).wait(1).to({scaleX:0.8,scaleY:0.84,rotation:-195.4},0).wait(1).to({scaleX:0.79,scaleY:0.83,rotation:-198.4,y:76.9},0).wait(1).to({scaleX:0.77,scaleY:0.82,rotation:-201.4},0).wait(1).to({scaleX:0.76,scaleY:0.81,rotation:-204.5},0).wait(1).to({scaleX:0.75,scaleY:0.8,rotation:-207.5,x:437.6},0).wait(1).to({scaleX:0.73,scaleY:0.79,rotation:-210.5,x:437.7},0).wait(1).to({scaleX:0.72,scaleY:0.77,rotation:-213.5,x:437.6},0).wait(1).to({scaleX:0.7,scaleY:0.75,rotation:-216.6,x:437.7},0).wait(1).to({scaleX:0.68,scaleY:0.73,rotation:-219.6,y:77},0).wait(1).to({scaleX:0.67,scaleY:0.71,rotation:-222.6},0).wait(1).to({scaleX:0.65,scaleY:0.68,rotation:-225.6},0).wait(1).to({scaleX:0.63,scaleY:0.66,rotation:-228.7},0).wait(1).to({scaleX:0.62,scaleY:0.64,rotation:-231.7},0).wait(1).to({scaleX:0.6,scaleY:0.62,rotation:-234.7},0).wait(1).to({scaleX:0.58,scaleY:0.6,rotation:-237.7,x:437.8},0).wait(1).to({scaleX:0.56,scaleY:0.58,rotation:-240.8,x:437.7},0).wait(1).to({scaleX:0.55,scaleY:0.56,rotation:-243.8,x:437.8},0).wait(1).to({scaleX:0.53,scaleY:0.54,rotation:-246.8,x:437.7,y:77.1},0).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:-249.8,x:437.8,y:77},0).wait(1).to({scaleX:0.5,scaleY:0.5,rotation:-252.9},0).wait(1).to({scaleX:0.48,scaleY:0.47,rotation:-255.9,y:77.1},0).wait(1).to({scaleX:0.47,scaleY:0.45,rotation:-258.9},0).wait(1).to({scaleX:0.45,scaleY:0.43,rotation:-261.9,y:77},0).wait(1).to({scaleX:0.43,scaleY:0.41,rotation:-265,y:77.1},0).wait(1).to({scaleX:0.44,scaleY:0.42,rotation:-268},0).wait(1).to({scaleX:0.45,scaleY:0.43,rotation:-271},0).wait(1).to({scaleX:0.46,scaleY:0.43,rotation:-274},0).wait(1).to({scaleX:0.48,scaleY:0.44,rotation:-277.1,x:437.9},0).wait(1).to({scaleX:0.49,scaleY:0.45,rotation:-280.1,x:437.8},0).wait(1).to({scaleX:0.5,scaleY:0.46,rotation:-283.1,y:77.2},0).wait(1).to({scaleX:0.51,scaleY:0.46,rotation:-286.1,x:437.9,y:77.1},0).wait(1).to({scaleX:0.52,scaleY:0.47,rotation:-289.2,y:77.2},0).wait(1).to({scaleX:0.53,scaleY:0.48,rotation:-292.2,y:77.1},0).wait(1).to({scaleX:0.54,scaleY:0.49,rotation:-295.2,y:77.2},0).wait(1).to({scaleX:0.55,scaleY:0.49,rotation:-298.2},0).wait(1).to({scaleX:0.56,scaleY:0.5,rotation:-301.3},0).wait(1).to({scaleX:0.57,scaleY:0.51,rotation:-304.3},0).wait(1).to({scaleX:0.58,scaleY:0.52,rotation:-307.3},0).wait(1).to({scaleX:0.59,scaleY:0.52,rotation:-310.3,x:438},0).wait(1).to({scaleX:0.61,scaleY:0.53,rotation:-313.4,x:437.9},0).wait(1).to({scaleX:0.62,scaleY:0.54,rotation:-316.4},0).wait(1).to({scaleX:0.63,scaleY:0.54,rotation:-319.4,x:438},0).wait(1).to({scaleX:0.64,scaleY:0.55,rotation:-322.4},0).wait(1).to({scaleX:0.65,scaleY:0.56,rotation:-325.5},0).wait(1).to({scaleX:0.66,scaleY:0.57,rotation:-328.5},0).wait(1).to({scaleX:0.67,scaleY:0.57,rotation:-331.5},0).wait(1).to({scaleX:0.68,scaleY:0.58,rotation:-334.5},0).wait(1).to({scaleX:0.69,scaleY:0.59,rotation:-337.6,x:438.1},0).wait(1).to({scaleX:0.73,scaleY:0.62,rotation:-340.6,x:438},0).wait(1).to({scaleX:0.76,scaleY:0.66,rotation:-343.6},0).wait(1).to({scaleX:0.79,scaleY:0.7,rotation:-346.6,x:438.1},0).wait(1).to({scaleX:0.83,scaleY:0.73,rotation:-349.7},0).wait(1).to({scaleX:0.86,scaleY:0.77,rotation:-352.7},0).wait(1).to({scaleX:0.9,scaleY:0.8,rotation:-355.7,x:438.2},0).wait(1).to({scaleX:0.93,scaleY:0.84,rotation:-358.7,x:438.1},0).wait(1).to({scaleX:0.96,scaleY:0.87,rotation:-361.8,x:438.2},0).wait(1).to({scaleX:1,scaleY:0.91,rotation:-364.8},0).wait(1).to({scaleX:1.03,scaleY:0.94,rotation:-367.8},0).wait(1).to({scaleX:1.07,scaleY:0.98,rotation:-370.8,y:77.1},0).wait(1).to({scaleX:1.1,scaleY:1.01,rotation:-373.9,x:438.3},0).wait(1).to({scaleX:1.13,scaleY:1.05,rotation:-376.9,y:77.2},0).wait(1).to({scaleX:1.17,scaleY:1.09,rotation:-379.9},0).wait(1).to({scaleX:1.2,scaleY:1.12,rotation:-382.9,y:77.1},0).wait(1).to({scaleX:1.24,scaleY:1.16,rotation:-386},0).wait(1).to({scaleX:1.27,scaleY:1.19,rotation:-389,x:438.4},0).wait(1).to({scaleX:1.3,scaleY:1.23,rotation:-392,x:438.3},0).wait(1).to({scaleX:1.34,scaleY:1.26,rotation:-395,x:438.4},0).wait(1).to({scaleX:1.35,scaleY:1.29,rotation:-398.1,y:77},0).wait(1).to({scaleX:1.36,scaleY:1.31,rotation:-401.1},0).wait(1).to({scaleX:1.37,scaleY:1.34,rotation:-404.1},0).wait(1).to({scaleX:1.39,scaleY:1.36,rotation:-407.1},0).wait(1).to({scaleX:1.4,scaleY:1.39,rotation:-410.2,y:76.9},0).wait(1).to({scaleX:1.41,scaleY:1.41,rotation:-413.2},0).wait(1).to({scaleX:1.42,scaleY:1.44,rotation:-416.2},0).wait(1).to({scaleX:1.43,scaleY:1.46,rotation:-419.2},0).wait(1).to({scaleX:1.45,scaleY:1.49,rotation:-422.3,y:76.8},0).wait(1).to({scaleX:1.46,scaleY:1.52,rotation:-425.3},0).wait(1).to({scaleX:1.47,scaleY:1.54,rotation:-428.3},0).wait(1).to({scaleX:1.48,scaleY:1.57,rotation:-431.3},0).wait(1).to({scaleX:1.49,scaleY:1.59,rotation:-434.4,y:76.7},0).wait(1).to({scaleX:1.51,scaleY:1.62,rotation:-437.4},0).wait(1).to({scaleX:1.52,scaleY:1.64,rotation:-440.4},0).wait(1).to({scaleX:1.53,scaleY:1.67,rotation:-443.4},0).wait(1).to({scaleX:1.54,scaleY:1.69,rotation:-446.5,y:76.6},0).wait(1).to({scaleX:1.55,scaleY:1.72,rotation:-449.5,x:438.3},0).wait(1).to({scaleX:1.57,scaleY:1.74,rotation:-452.5,x:438.4,y:76.5},0).wait(1).to({scaleX:1.53,scaleY:1.71,rotation:-455.5,x:438.3,y:76.6},0).wait(1).to({scaleX:1.5,scaleY:1.67,rotation:-458.6},0).wait(1).to({scaleX:1.47,scaleY:1.64,rotation:-461.6,y:76.5},0).wait(1).to({scaleX:1.44,scaleY:1.6,rotation:-464.6},0).wait(1).to({scaleX:1.41,scaleY:1.57,rotation:-467.6,x:438.2},0).wait(1).to({scaleX:1.37,scaleY:1.53,rotation:-470.7},0).wait(1).to({scaleX:1.34,scaleY:1.49,rotation:-473.7},0).wait(1).to({scaleX:1.31,scaleY:1.46,rotation:-476.7,x:438.1},0).wait(1).to({scaleX:1.28,scaleY:1.42,rotation:-479.7},0).wait(1).to({scaleX:1.25,scaleY:1.39,rotation:-482.8},0).wait(1).to({scaleX:1.21,scaleY:1.35,rotation:-485.8,x:438},0).wait(1).to({scaleX:1.18,scaleY:1.32,rotation:-488.8},0).wait(1).to({scaleX:1.15,scaleY:1.28,rotation:-491.8,y:76.6},0).wait(1).to({scaleX:1.12,scaleY:1.25,rotation:-494.9},0).wait(1).to({scaleX:1.08,scaleY:1.21,rotation:-497.9,x:437.9,y:76.5},0).wait(1).to({scaleX:1.05,scaleY:1.18,rotation:-500.9,y:76.6},0).wait(1).to({scaleX:1.02,scaleY:1.14,rotation:-504},0).wait(1).to({scaleX:0.99,scaleY:1.1,rotation:-507},0).wait(1).to({scaleX:0.96,scaleY:1.07,rotation:-510,x:437.8},0).wait(1));

	// python
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(132,89.1,1,1,150,0,0,59,52.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:53.1,scaleX:1.01,scaleY:1.02,rotation:153,x:131.8,y:88.9},0).wait(1).to({scaleX:1.02,scaleY:1.04,rotation:156.1},0).wait(1).to({scaleX:1.03,scaleY:1.05,rotation:159.1,y:88.8},0).wait(1).to({scaleX:1.04,scaleY:1.07,rotation:162.1},0).wait(1).to({scaleX:1.05,scaleY:1.09,rotation:165.1},0).wait(1).to({scaleX:1.06,scaleY:1.11,rotation:168.2},0).wait(1).to({scaleX:1.07,scaleY:1.13,rotation:171.2,x:131.9},0).wait(1).to({scaleX:1.08,scaleY:1.14,rotation:174.2},0).wait(1).to({scaleX:1.09,scaleY:1.16,rotation:177.2},0).wait(1).to({scaleX:1.1,scaleY:1.18,rotation:180.3,x:132,y:88.7},0).wait(1).to({scaleX:1.1,scaleY:1.2,rotation:183.3},0).wait(1).to({scaleX:1.11,scaleY:1.22,rotation:186.3},0).wait(1).to({scaleX:1.12,scaleY:1.23,rotation:189.3},0).wait(1).to({scaleX:1.13,scaleY:1.25,rotation:192.4},0).wait(1).to({scaleX:1.14,scaleY:1.27,rotation:195.4},0).wait(1).to({scaleX:1.15,scaleY:1.29,rotation:198.4,x:132.1},0).wait(1).to({scaleX:1.16,scaleY:1.31,rotation:201.4},0).wait(1).to({scaleX:1.17,scaleY:1.32,rotation:204.5},0).wait(1).to({scaleX:1.18,scaleY:1.34,rotation:207.5},0).wait(1).to({scaleX:1.19,scaleY:1.36,rotation:210.5,x:132.2},0).wait(1).to({scaleX:1.21,scaleY:1.38,rotation:213.5},0).wait(1).to({scaleX:1.22,scaleY:1.41,rotation:216.6,y:88.8},0).wait(1).to({scaleX:1.24,scaleY:1.43,rotation:219.6,y:88.7},0).wait(1).to({scaleX:1.26,scaleY:1.45,rotation:222.6,x:132.3},0).wait(1).to({scaleX:1.28,scaleY:1.47,rotation:225.6,y:88.8},0).wait(1).to({scaleX:1.29,scaleY:1.5,rotation:228.7},0).wait(1).to({scaleX:1.31,scaleY:1.52,rotation:231.7},0).wait(1).to({scaleX:1.33,scaleY:1.54,rotation:234.7},0).wait(1).to({scaleX:1.34,scaleY:1.57,rotation:237.7,x:132.4},0).wait(1).to({scaleX:1.36,scaleY:1.59,rotation:240.8},0).wait(1).to({scaleX:1.38,scaleY:1.61,rotation:243.8},0).wait(1).to({scaleX:1.4,scaleY:1.63,rotation:246.8,y:88.9},0).wait(1).to({scaleX:1.41,scaleY:1.66,rotation:249.8},0).wait(1).to({scaleX:1.43,scaleY:1.68,rotation:252.9,x:132.5},0).wait(1).to({scaleX:1.45,scaleY:1.7,rotation:255.9},0).wait(1).to({scaleX:1.47,scaleY:1.73,rotation:258.9},0).wait(1).to({scaleX:1.48,scaleY:1.75,rotation:261.9},0).wait(1).to({scaleX:1.5,scaleY:1.77,rotation:265,y:89},0).wait(1).to({scaleX:1.52,scaleY:1.8,rotation:268,x:132.6},0).wait(1).to({scaleX:1.53,scaleY:1.82,rotation:271},0).wait(1).to({scaleX:1.5,scaleY:1.78,rotation:274,x:132.5,y:89.1},0).wait(1).to({scaleX:1.47,scaleY:1.75,rotation:277.1},0).wait(1).to({scaleX:1.44,scaleY:1.71,rotation:280.1},0).wait(1).to({scaleX:1.41,scaleY:1.67,rotation:283.1,y:89.2},0).wait(1).to({scaleX:1.37,scaleY:1.64,rotation:286.1},0).wait(1).to({scaleX:1.34,scaleY:1.6,rotation:289.2},0).wait(1).to({scaleX:1.31,scaleY:1.57,rotation:292.2,x:132.4},0).wait(1).to({scaleX:1.28,scaleY:1.53,rotation:295.2,y:89.3},0).wait(1).to({scaleX:1.24,scaleY:1.49,rotation:298.2,y:89.2},0).wait(1).to({scaleX:1.21,scaleY:1.46,rotation:301.3,y:89.3},0).wait(1).to({scaleX:1.18,scaleY:1.42,rotation:304.3},0).wait(1).to({scaleX:1.15,scaleY:1.39,rotation:307.3},0).wait(1).to({scaleX:1.12,scaleY:1.35,rotation:310.3},0).wait(1).to({scaleX:1.08,scaleY:1.31,rotation:313.4,x:132.3,y:89.4},0).wait(1).to({scaleX:1.05,scaleY:1.28,rotation:316.4,y:89.3},0).wait(1).to({scaleX:1.02,scaleY:1.24,rotation:319.4},0).wait(1).to({scaleX:0.99,scaleY:1.21,rotation:322.4,y:89.4},0).wait(1).to({scaleX:0.96,scaleY:1.17,rotation:325.5,x:132.2,y:89.3},0).wait(1).to({scaleX:0.92,scaleY:1.13,rotation:328.5},0).wait(1).to({scaleX:0.89,scaleY:1.1,rotation:331.5,y:89.4},0).wait(1).to({scaleX:0.86,scaleY:1.06,rotation:334.5},0).wait(1).to({scaleX:0.83,scaleY:1.03,rotation:337.6},0).wait(1).to({scaleX:0.79,scaleY:0.99,rotation:340.6,x:132.1},0).wait(1).to({scaleX:0.78,scaleY:0.96,rotation:343.6},0).wait(1).to({scaleX:0.76,scaleY:0.94,rotation:346.6,y:89.3},0).wait(1).to({scaleX:0.75,scaleY:0.91,rotation:349.7,y:89.4},0).wait(1).to({scaleX:0.73,scaleY:0.89,rotation:352.7,x:132},0).wait(1).to({scaleX:0.71,scaleY:0.86,rotation:355.7,y:89.3},0).wait(1).to({scaleX:0.7,scaleY:0.84,rotation:358.7,y:89.4},0).wait(1).to({scaleX:0.68,scaleY:0.81,rotation:361.8,y:89.3},0).wait(1).to({scaleX:0.66,scaleY:0.79,rotation:364.8},0).wait(1).to({scaleX:0.65,scaleY:0.76,rotation:367.8,y:89.4},0).wait(1).to({scaleX:0.63,scaleY:0.74,rotation:370.8,y:89.3},0).wait(1).to({scaleX:0.61,scaleY:0.71,rotation:373.9},0).wait(1).to({scaleX:0.6,scaleY:0.69,rotation:376.9,x:131.9},0).wait(1).to({scaleX:0.58,scaleY:0.66,rotation:379.9,x:132},0).wait(1).to({scaleX:0.56,scaleY:0.64,rotation:382.9,x:131.9,y:89.2},0).wait(1).to({scaleX:0.55,scaleY:0.61,rotation:386,y:89.3},0).wait(1).to({scaleX:0.53,scaleY:0.59,rotation:389},0).wait(1).to({scaleX:0.52,scaleY:0.56,rotation:392},0).wait(1).to({scaleX:0.5,scaleY:0.53,rotation:395,y:89.2},0).wait(1).to({scaleX:0.48,scaleY:0.51,rotation:398.1},0).wait(1).to({scaleX:0.47,scaleY:0.48,rotation:401.1},0).wait(1).to({scaleX:0.48,scaleY:0.5,rotation:404.1},0).wait(1).to({scaleX:0.49,scaleY:0.53,rotation:407.1},0).wait(1).to({scaleX:0.51,scaleY:0.55,rotation:410.2,y:89.3},0).wait(1).to({scaleX:0.52,scaleY:0.57,rotation:413.2,y:89.2},0).wait(1).to({scaleX:0.53,scaleY:0.59,rotation:416.2},0).wait(1).to({scaleX:0.55,scaleY:0.61,rotation:419.2,x:131.8},0).wait(1).to({scaleX:0.56,scaleY:0.63,rotation:422.3,x:131.9},0).wait(1).to({scaleX:0.57,scaleY:0.65,rotation:425.3,x:131.8},0).wait(1).to({scaleX:0.59,scaleY:0.67,rotation:428.3},0).wait(1).to({scaleX:0.6,scaleY:0.69,rotation:431.3},0).wait(1).to({scaleX:0.62,scaleY:0.71,rotation:434.4},0).wait(1).to({scaleX:0.63,scaleY:0.74,rotation:437.4},0).wait(1).to({scaleX:0.64,scaleY:0.76,rotation:440.4},0).wait(1).to({scaleX:0.66,scaleY:0.78,rotation:443.4,x:131.7},0).wait(1).to({scaleX:0.67,scaleY:0.8,rotation:446.5,x:131.8,y:89.1},0).wait(1).to({scaleX:0.68,scaleY:0.82,rotation:449.5,y:89.2},0).wait(1).to({scaleX:0.7,scaleY:0.84,rotation:452.5,x:131.7,y:89.1},0).wait(1).to({scaleX:0.71,scaleY:0.85,rotation:455.5,x:131.8},0).wait(1).to({scaleX:0.73,scaleY:0.86,rotation:458.6},0).wait(1).to({scaleX:0.74,scaleY:0.87,rotation:461.6,x:131.7,y:89},0).wait(1).to({scaleX:0.76,scaleY:0.87,rotation:464.6,y:89.1},0).wait(1).to({scaleX:0.78,scaleY:0.88,rotation:467.6},0).wait(1).to({scaleX:0.79,scaleY:0.89,rotation:470.7,y:89},0).wait(1).to({scaleX:0.81,scaleY:0.9,rotation:473.7,x:131.8},0).wait(1).to({scaleX:0.82,scaleY:0.91,rotation:476.7,x:131.7},0).wait(1).to({scaleX:0.84,scaleY:0.92,rotation:479.7},0).wait(1).to({scaleX:0.86,scaleY:0.92,rotation:482.8},0).wait(1).to({scaleX:0.87,scaleY:0.93,rotation:485.8,x:131.8},0).wait(1).to({scaleX:0.89,scaleY:0.94,rotation:488.8},0).wait(1).to({scaleX:0.9,scaleY:0.95,rotation:491.8,x:131.7,y:88.9},0).wait(1).to({scaleX:0.92,scaleY:0.96,rotation:494.9,x:131.8},0).wait(1).to({scaleX:0.94,scaleY:0.97,rotation:497.9,x:131.7,y:89},0).wait(1).to({scaleX:0.95,scaleY:0.98,rotation:500.9,x:131.8,y:88.9},0).wait(1).to({scaleX:0.97,scaleY:0.98,rotation:504},0).wait(1).to({scaleX:0.98,scaleY:0.99,rotation:507},0).wait(1).to({scaleX:1,scaleY:1,rotation:510},0).wait(1));

	// background
	this.instance_4 = new lib.graygradient();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-25,-19,0.32,0.373);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(250,181,613.9,460.1);
// library properties:
lib.properties = {
	id: '2157F7CDF813434A9307DB9EED2BED28',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/login_atlas_.png", id:"login_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2157F7CDF813434A9307DB9EED2BED28'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;