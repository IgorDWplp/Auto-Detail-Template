(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
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


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(1,1,1).p("AI1AAQAADqilCmQimCljqAAQjpAAimilQilimAAjqQAAjpClimQCmilDpAAQDqAACmClQClCmAADpg");
	this.shape.setTransform(56.5,56.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmOGQQimimAAjqQAAjpCmilQClimDpAAQDqAACmCmQClClAADpQAADqilCmQimCljqAAQjpAAililg");
	this.shape_1.setTransform(56.5,56.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-1,-1,115,115), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0099").s().p("AnzH0IAAvnIPnAAIAAPng");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,100,100), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(1,1,1).p("AIzGkIrlDJImmqCIHipXILPERg");
	this.shape.setTransform(60.1,62.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3333FF").s().p("ApYgVIHipXILPERIgmL/IrlDJg");
	this.shape_1.setTransform(60.1,62.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-1,-1,122.2,126.3), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(1,1,1).p("AFwAAQAACYhsBsQhsBsiYAAQiXAAhshsQhshsAAiYQAAiXBshsQBshsCXAAQCYAABsBsQBsBsAACXg");
	this.shape.setTransform(36.8,36.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AkDEEQhshsAAiYQAAiXBshsQBshsCXAAQCYAABsBsQBsBsAACXQAACYhsBsQhsBsiYAAQiXAAhshsg");
	this.shape_1.setTransform(36.8,36.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-1,-1,75.5,75.5), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("AhuCoIAAgFQBZhdAfgsQAggqAAgpQAAgkgUgTQgTgTgaAAQghAAgVAYQgLAOgLAcIgLgDQAMg4AegWQAdgVAiAAQAnAAAaAZQAZAbAAAlQABAogcAlQgbAkhcBfIBvAAQAYAAAJgFQAKgGALgWIAHADIgbBEg");
	this.shape.setTransform(145.9,328.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC00").s().p("AhHClIAAgJQAfgCAJgJQAHgIAAgfIAAj5IgcAAQgqgBgPAMQgOAMgIApIgMAAIADhVIEZAAIADBVIgMAAQgJgpgNgMQgOgMgrABIgcAAIAAD+QAAAdAJAHQAJAHAfACIAAAJg");
	this.shape_1.setTransform(117.9,328.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC00").s().p("AgpCkIgdgJQgJAAgCAFIgFAMIgLAAIgOhrIALAAQANAiARAUQAeAjAqAAQAYAAASgPQARgPAAgcQAAgYgRgSQgMgMgjgWIgrgaQgTgMgMgNQgVgXAAgdQAAgmAZgZQAZgZAqAAQAQAAAYAIIAbAJQAKAAADgFIAGgMIAKAAIALBqIgMAAQgMgwgbgTQgbgTgaAAQgUAAgPAMQgQAMAAAWQAAATAMAOQAMAOAYAPIArAbQApAYASAWQAQAVAAAdQAAAogdAaQgeAaguAAQgXAAgZgIg");
	this.shape_2.setTransform(88.3,328.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("AiRClIAAgJQAbgCAJgIQAHgGAAgdIAAjdQAAgagHgJQgIgIgcgCIAAgJIEIAAIACBHIgMAAQgHghgNgJQgMgKgtAAIhCAAQgMAAgCADQgCAEgBAKIAABvIBNAAQAgAAAIgJQAJgKAGgcIALAAIAAByIgLAAQgGgdgJgKQgJgJgfAAIhNAAIAAB8QAAAPAKADQAJACAuAAQAzAAAYgLQAYgLAUgrIANAAIgWBUg");
	this.shape_3.setTransform(59.7,328.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CC00").s().p("AhHClIAAgJQAggCAHgJQAIgIAAgfIAAj5IgcAAQgqgBgOAMQgQAMgHApIgMAAIADhVIEaAAIACBVIgMAAQgJgpgNgMQgOgMgrABIgcAAIAAD+QAAAdAJAHQAJAHAfACIAAAJg");
	this.shape_4.setTransform(29.1,328.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0000").s().p("AhuCoIAAgFQBZhdAfgsQAggqAAgpQAAgkgUgTQgTgTgaAAQghAAgVAYQgLAOgLAcIgLgDQAMg4AegWQAdgVAiAAQAnAAAaAZQAZAbAAAlQABAogcAlQgbAkhcBfIBvAAQAYAAAJgFQAKgGALgWIAHADIgbBEg");
	this.shape_5.setTransform(182.4,178.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC0000").s().p("AhVBnQgPgPAAgXQAAgjAjgXQAWgOBDgaIAAgUQAAgZgFgKQgJgQgZAAQgMAAgLAGQgMAGAAAMIACAKIABAJQAAANgJAGQgFADgHAAQgLAAgGgHQgGgHAAgJQAAgRAVgTQAVgSApgBQAuAAARAfQAJARAAAhIAABhIACATQADAKAKAAIAKgCIAMgIIAAAMQgIAJgJAGQgNAKgOAAQgRAAgHgLQgIgKgBgQQgSAQgMAJQgXANgUgBQgVAAgPgOgAgWAAQgjAVAAAbQAAAXAPAKQAJAHAMAAQAQAAAOgJQAPgJAAgOIAAhMQgcAJgSALg");
	this.shape_6.setTransform(147.1,184.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC0000").s().p("AhDBXQgdgeAAgzQAAgyAggkQAggkAwAAQAeAAAWAPQAWAQAAATQAAAIgFAHQgGAHgMAAQgIAAgHgGQgGgGgDgLIgDgMQgDgNgIgFQgIgGgNAAQgbAAgTAZQgTAYAAAoQAAAkAVAeQAVAdAjAAQAZAAAUgRQALgJAOgVIAHAEQgOAegPARQgeAggmAAQgmAAgdgeg");
	this.shape_7.setTransform(123.8,184.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC0000").s().p("Ag6CqIAAgHQAagCAGgGQAHgGAAgdIAAh0QAAgQgCgGQgEgKgLAAIgFABIgPAEIAAgIIAKgEIA7gUIAJgDIAAADIAACvQAAAcAHAGQAGAIAYABIAAAHgAgUh+QgHgIAAgKQAAgKAHgIQAIgIAKAAQAKAAAHAIQAIAHAAALQAAAKgIAIQgHAHgKABQgKgBgIgHg");
	this.shape_8.setTransform(106,178.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC0000").s().p("AANBzIAAgHQASgDAHgGQAHgIAAgZIAAhnQAAgWgIgNQgIgOgUAAQgOAAgPAKIgVASIAACIQAAARAIAHQAIAFAQABIAAAHIhqAAIAAgHQARgCAHgHQAHgGAAgWIAAh8QAAgPgDgGQgFgKgOABIgEAAIgGABIAAgJIAvgPIAXgIIACABIABAEIAAAkQAWgVANgIQASgMAUAAQARAAANAJQAbATAAAwIAABwQAAATAHAHQAHAIAQAAIAAAHg");
	this.shape_9.setTransform(86.6,184);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC0000").s().p("AhVBnQgPgPAAgXQAAgjAjgXQAWgOBDgaIAAgUQAAgZgFgKQgJgQgZAAQgMAAgLAGQgMAGAAAMIACAKIABAJQAAANgJAGQgFADgHAAQgLAAgGgHQgGgHAAgJQAAgRAVgTQAVgSApgBQAuAAARAfQAJARAAAhIAABhIACATQADAKAKAAIAKgCIAMgIIAAAMQgIAJgJAGQgNAKgOAAQgRAAgHgLQgIgKgBgQQgSAQgMAJQgXANgUgBQgVAAgPgOgAgWAAQgjAVAAAbQAAAXAPAKQAJAHAMAAQAQAAAOgJQAPgJAAgOIAAhMQgcAJgSALg");
	this.shape_10.setTransform(63.9,184.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC0000").s().p("AhSBzIAAgIQAWgCAIgGQAHgGAAgUIAAhsQAAgZgEgKQgEgKgMAAIgHAAIgJABIAAgIIAdgKIAUgHIAZgKIADABIAAAFIAAAoQAOgWAPgMQAPgMAPAAQANAAAIAHQAHAIAAALQAAAKgFAHQgHAHgJAAQgJAAgKgIQgJgKgFABQgJgBgMAOQgLAOAAAPIAABtQAAAVAIAIQAKAJAWgBIAAAIg");
	this.shape_11.setTransform(43.8,184);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC0000").s().p("AgfB6QgGgOAAgZIAAiTIgaAAIgCgCIgBgBIACgEIAGgGIAZgXIAiguIAEAAIAAAFIAAA7IAxAAIAAASIgxAAIgBCMQAAASADAKQAGAQARABQAJAAAHgFIAOgNIAHAFIgGAIQgMARgPAHQgOAHgNAAQgcAAgKgZg");
	this.shape_12.setTransform(28.7,181.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC0000").s().p("AgkBxIgWgFIgFACIgDAFIgHAAIAAhPIAIAAQAGAcAKAPQARAbAgAAQASAAAKgKQALgKAAgQQAAgKgGgKQgGgJgQgJIgagQQgegQgOgQQgOgQAAgWQAAgbATgSQAUgSAdAAQAMABAQAEIARAFIAGgBIAEgEIAGAAIABBEIgHAAQgFgXgIgOQgPgYgcAAQgRAAgKALQgKAKAAAOQAAAWAiASIAfASQA0AbAAAlQAAAdgVASQgWATgigBQgOABgTgFg");
	this.shape_13.setTransform(12,184.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00CC00").s().p("AhuCoIAAgFQBZhdAfgsQAggqAAgpQAAgkgUgTQgTgTgaAAQghAAgVAYQgLAOgLAcIgLgDQAMg4AegWQAdgVAiAAQAnAAAaAZQAZAbAAAlQABAogcAlQgbAkhcBfIBvAAQAYAAAJgFQAKgGALgWIAHADIgbBEg");
	this.shape_14.setTransform(96.4,22.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00CC00").s().p("AgfB6QgGgOAAgZIAAiTIgaAAIgCgBIgBgDIACgDIAGgHIAZgWIAiguIAEABIAAADIAAA9IAxAAIAAARIgxAAIgBCLQAAATADAKQAGAQARAAQAJAAAHgEIAOgNIAHAFIgGAIQgMARgPAHQgOAHgNAAQgcAAgKgZg");
	this.shape_15.setTransform(64.7,25.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00CC00").s().p("AgkBxIgWgFIgFACIgDAFIgHAAIAAhPIAIAAQAGAcAKAPQARAbAgAAQASAAAKgKQALgKAAgQQAAgKgGgKQgGgKgQgJIgagPQgegQgOgQQgOgQAAgWQAAgbATgSQAUgRAdAAQAMgBAQAFIARAFIAGgBIAEgEIAGAAIABBEIgHAAQgFgXgIgOQgPgYgcAAQgRAAgKAKQgKALAAAOQAAAXAiARIAfARQA0AbAAAmQAAAdgVATQgWARgiABQgOgBgTgEg");
	this.shape_16.setTransform(48,28.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00CC00").s().p("AhKBTQgZgjAAgtQAAgwAdgkQAdgkAtAAQAjAAAaAYQAZAYAAAsIiaAAQADA3AXAaQAXAaAfAAQAaAAARgOQASgNAPgYIAIACQgKAggbAaQgcAbgnAAQgtgBgZgigAAngpQgCgYgHgMQgMgVgbgBQgcAAgOAZQgIANgEAUIBmAAIAAAAg");
	this.shape_17.setTransform(26.9,28.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00CC00").s().p("AgfB6QgGgOAAgZIAAiTIgaAAIgCgBIgBgDIACgDIAGgHIAZgWIAiguIAEABIAAADIAAA9IAxAAIAAARIgxAAIgBCLQAAATADAKQAGAQARAAQAJAAAHgEIAOgNIAHAFIgGAIQgMARgPAHQgOAHgNAAQgcAAgKgZg");
	this.shape_18.setTransform(9.3,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,197,360), null);


// stage content:
(lib.Безымянный1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(-101,76.6,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-96.7,y:79.2},0).wait(1).to({x:-92.4,y:81.9},0).wait(1).to({x:-88.2,y:84.6},0).wait(1).to({x:-83.9,y:87.2},0).wait(1).to({x:-79.7,y:89.9},0).wait(1).to({x:-75.4,y:92.6},0).wait(1).to({x:-71.1,y:95.2},0).wait(1).to({x:-66.9,y:97.9},0).wait(1).to({x:-62.6,y:100.6},0).wait(1).to({x:-58.4,y:103.3},0).wait(1).to({x:-54.1,y:105.9},0).wait(1).to({x:-49.8,y:108.6},0).wait(1).to({x:-45.6,y:111.3},0).wait(1).to({x:-41.3,y:113.9},0).wait(1).to({x:-37.1,y:116.6},0).wait(1).to({x:-32.8,y:119.3},0).wait(1).to({x:-28.5,y:122},0).wait(1).to({x:-24.3,y:124.6},0).wait(1).to({x:-20,y:127.3},0).wait(1).to({x:-15.8,y:130},0).wait(1).to({x:-11.5,y:132.6},0).wait(1).to({x:-7.2,y:135.3},0).wait(1).to({x:-3,y:138},0).wait(1).to({x:1.3,y:140.6},0).wait(1).to({x:5.5,y:143.3},0).wait(1).to({x:9.8,y:146},0).wait(1).to({x:14.1,y:148.7},0).wait(1).to({x:18.3,y:151.3},0).wait(1).to({x:22.6,y:154},0).wait(1).to({x:26.8,y:156.7},0).wait(1).to({x:31.1,y:159.3},0).wait(1).to({x:35.4,y:162},0).wait(1).to({x:39.6,y:164.7},0).wait(1).to({x:43.9,y:167.4},0).wait(1).to({x:48.1,y:170},0).wait(1).to({x:52.3,y:172.7},0).wait(1).to({x:56.6,y:175.4},0).wait(1).to({x:60.9,y:178},0).wait(1).to({x:65.1,y:180.7},0).wait(1).to({x:69.4,y:183.4},0).wait(1).to({x:73.6,y:186},0).wait(1).to({x:77.9,y:188.7},0).wait(1).to({x:82.2,y:191.4},0).wait(1).to({x:86.4,y:194.1},0).wait(1).to({x:90.7,y:196.7},0).wait(1).to({x:94.9,y:199.4},0).wait(1).to({x:99.2,y:202.1},0).wait(1).to({x:103.5,y:204.7},0).wait(1).to({x:107.7,y:207.4},0).wait(1).to({x:112,y:210.1},0).wait(1).to({x:116.2,y:212.8},0).wait(1).to({x:120.5,y:215.4},0).wait(1).to({x:124.8,y:218.1},0).wait(1).to({x:129,y:220.8},0).wait(1).to({x:133.3,y:223.4},0).wait(1).to({x:137.5,y:226.1},0).wait(1).to({x:141.8,y:228.8},0).wait(1).to({x:146.1,y:231.4},0).wait(1).to({x:150.3,y:234.1},0).wait(1).to({x:154.6,y:236.8},0).wait(1).to({x:158.8,y:239.5},0).wait(1).to({x:163.1,y:242.1},0).wait(1).to({x:167.4,y:244.8},0).wait(1).to({x:171.6,y:247.5},0).wait(1).to({x:175.9,y:250.1},0).wait(1).to({x:180.1,y:252.8},0).wait(1).to({x:184.4,y:255.5},0).wait(1).to({x:188.6,y:258.2},0).wait(1).to({x:192.9,y:260.8},0).wait(1).to({x:197.2,y:263.5},0).wait(1).to({x:201.4,y:266.2},0).wait(1).to({x:205.7,y:268.8},0).wait(1).to({x:209.9,y:271.5},0).wait(1).to({x:214.2,y:274.2},0).wait(1).to({x:218.5,y:276.8},0).wait(1).to({x:222.7,y:279.5},0).wait(1).to({x:227,y:282.2},0).wait(1).to({x:231.2,y:284.9},0).wait(1).to({x:235.5,y:287.5},0).wait(1).to({x:239.8,y:290.2},0).wait(1).to({x:244,y:292.9},0).wait(1).to({x:248.3,y:295.5},0).wait(1).to({x:252.5,y:298.2},0).wait(1).to({x:256.8,y:300.9},0).wait(1).to({x:261.1,y:303.6},0).wait(1).to({x:265.3,y:306.2},0).wait(1).to({x:269.6,y:308.9},0).wait(1).to({x:273.8,y:311.6},0).wait(1).to({x:278.1,y:314.2},0).wait(1).to({x:282.4,y:316.9},0).wait(1).to({x:286.6,y:319.6},0).wait(1).to({x:290.9,y:322.2},0).wait(1).to({x:295.1,y:324.9},0).wait(1).to({x:299.4,y:327.6},0).wait(1).to({x:303.7,y:330.3},0).wait(1).to({x:307.9,y:332.9},0).wait(1).to({x:312.2,y:335.6},0).wait(1).to({x:316.4,y:338.3},0).wait(1).to({x:320.7,y:340.9},0).wait(1).to({x:325,y:343.6},0).wait(1).to({x:329.2,y:346.3},0).wait(1).to({x:333.5,y:349},0).wait(1).to({x:337.7,y:351.6},0).wait(1).to({x:342,y:354.3},0).wait(1).to({x:346.3,y:357},0).wait(1).to({x:350.5,y:359.6},0).wait(1).to({x:354.8,y:362.3},0).wait(1).to({x:359,y:365},0).wait(1).to({x:363.3,y:367.6},0).wait(1).to({x:367.5,y:370.3},0).wait(1).to({x:371.8,y:373},0).wait(1).to({x:376.1,y:375.7},0).wait(1).to({x:380.3,y:378.3},0).wait(1).to({x:384.6,y:381},0).wait(1).to({x:388.8,y:383.7},0).wait(1).to({x:393.1,y:386.3},0).wait(1).to({x:397.4,y:389},0).wait(1).to({x:401.6,y:391.7},0).wait(1).to({x:405.9,y:394.4},0).wait(1).to({x:410.1,y:397},0).wait(1).to({x:414.4,y:399.7},0).wait(1).to({x:418.7,y:402.4},0).wait(1).to({x:422.9,y:405},0).wait(1).to({x:427.2,y:407.7},0).wait(1).to({x:431.4,y:410.4},0).wait(1).to({x:435.7,y:413},0).wait(1).to({x:440,y:415.7},0).wait(1).to({x:444.2,y:418.4},0).wait(1).to({x:448.5,y:421.1},0).wait(1).to({x:452.7,y:423.7},0).wait(1).to({x:457,y:426.4},0).to({_off:true},1).wait(257));

	// Слой 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(1,1,1).p("AnznzIPnAAIAAPnIvnAAg");
	this.shape.setTransform(-54,167.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},132).wait(256));

	// Слой 2
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(96.8,148.9,1,1,0,0,0,36.8,36.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).wait(1).to({x:99.1,y:152.2},0).wait(1).to({x:101.4,y:155.5},0).wait(1).to({x:103.7,y:158.9},0).wait(1).to({x:106,y:162.2},0).wait(1).to({x:108.2,y:165.6},0).wait(1).to({x:110.5,y:168.9},0).wait(1).to({x:112.8,y:172.2},0).wait(1).to({x:115.1,y:175.6},0).wait(1).to({x:117.4,y:178.9},0).wait(1).to({x:119.7,y:182.3},0).wait(1).to({x:122,y:185.6},0).wait(1).to({x:124.3,y:189},0).wait(1).to({x:126.6,y:192.3},0).wait(1).to({x:128.9,y:195.6},0).wait(1).to({x:131.1,y:199},0).wait(1).to({x:133.4,y:202.3},0).wait(1).to({x:135.7,y:205.7},0).wait(1).to({x:138,y:209},0).wait(1).to({x:140.3,y:212.3},0).wait(1).to({x:142.6,y:215.7},0).wait(1).to({x:144.9,y:219},0).wait(1).to({x:147.2,y:222.4},0).wait(1).to({x:149.5,y:225.7},0).wait(1).to({x:151.7,y:229.1},0).wait(1).to({x:154,y:232.4},0).wait(1).to({x:156.3,y:235.7},0).wait(1).to({x:158.6,y:239.1},0).wait(1).to({x:160.9,y:242.4},0).wait(1).to({x:163.2,y:245.8},0).wait(1).to({x:165.5,y:249.1},0).wait(1).to({x:167.8,y:252.4},0).wait(1).to({x:170.1,y:255.8},0).wait(1).to({x:172.4,y:259.1},0).wait(1).to({x:174.6,y:262.5},0).wait(1).to({x:176.9,y:265.8},0).wait(1).to({x:179.2,y:269.2},0).wait(1).to({x:181.5,y:272.5},0).wait(1).to({x:183.8,y:275.8},0).wait(1).to({x:186.1,y:279.2},0).wait(1).to({x:188.4,y:282.5},0).wait(1).to({x:190.7,y:285.9},0).wait(1).to({x:193,y:289.2},0).wait(1).to({x:195.2,y:292.5},0).wait(1).to({x:197.5,y:295.9},0).wait(1).to({x:199.8,y:299.2},0).wait(1).to({x:202.1,y:302.6},0).wait(1).to({x:204.4,y:305.9},0).wait(1).to({x:206.7,y:309.3},0).wait(1).to({x:209,y:312.6},0).wait(1).to({x:211.3,y:315.9},0).wait(1).to({x:213.6,y:319.3},0).wait(1).to({x:215.9,y:322.6},0).wait(1).to({x:218.1,y:326},0).wait(1).to({x:220.4,y:329.3},0).wait(1).to({x:222.7,y:332.6},0).wait(1).to({x:225,y:336},0).wait(1).to({x:227.3,y:339.3},0).wait(1).to({x:229.6,y:342.7},0).wait(1).to({x:231.9,y:346},0).wait(1).to({x:234.2,y:349.4},0).wait(1).to({x:236.5,y:352.7},0).wait(1).to({x:238.7,y:356},0).wait(1).to({x:241,y:359.4},0).wait(1).to({x:243.3,y:362.7},0).wait(1).to({x:245.6,y:366.1},0).wait(1).to({x:247.9,y:369.4},0).wait(1).to({x:250.2,y:372.7},0).wait(1).to({x:252.5,y:376.1},0).wait(1).to({x:254.8,y:379.4},0).wait(1).to({x:257.1,y:382.8},0).wait(1).to({x:259.4,y:386.1},0).wait(1).to({x:261.6,y:389.5},0).wait(1).to({x:263.9,y:392.8},0).wait(1).to({x:266.2,y:396.1},0).wait(1).to({x:268.5,y:399.5},0).wait(1).to({x:270.8,y:402.8},0).wait(1).to({x:273.1,y:406.2},0).wait(1).to({x:275.4,y:409.5},0).wait(1).to({x:277.7,y:412.8},0).wait(1).to({x:280,y:416.2},0).wait(1).to({x:282.2,y:419.5},0).wait(1).to({x:284.5,y:422.9},0).wait(1).to({x:286.8,y:426.2},0).wait(1).to({x:289.1,y:429.6},0).wait(1).to({x:291.4,y:432.9},0).wait(1).to({x:293.7,y:436.2},0).wait(1).to({x:296,y:439.6},0).wait(1).to({x:298.3,y:442.9},0).wait(1).to({x:300.6,y:446.3},0).wait(1).to({x:302.9,y:449.6},0).wait(1).to({x:305.1,y:452.9},0).wait(1).to({x:307.4,y:456.3},0).wait(1).to({x:309.7,y:459.6},0).wait(1).to({x:312,y:463},0).wait(1).to({x:314.3,y:466.3},0).wait(1).to({x:316.6,y:469.7},0).wait(1).to({x:318.9,y:473},0).wait(1).to({x:321.2,y:476.3},0).wait(1).to({x:323.5,y:479.7},0).wait(1).to({x:325.7,y:483},0).wait(1).to({x:328,y:486.4},0).wait(1).to({x:330.3,y:489.7},0).wait(1).to({x:332.6,y:493},0).wait(1).to({x:334.9,y:496.4},0).wait(1).to({x:337.2,y:499.7},0).wait(1).to({x:339.5,y:503.1},0).wait(1).to({x:341.8,y:506.4},0).wait(1).to({x:344.1,y:509.8},0).wait(1).to({x:346.4,y:513.1},0).wait(1).to({x:348.6,y:516.4},0).wait(1).to({x:350.9,y:519.8},0).wait(1).to({x:353.2,y:523.1},0).wait(1).to({x:355.5,y:526.5},0).wait(1).to({x:357.8,y:529.8},0).to({_off:true},1).wait(256));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC00").s().p("AhCCoIAAgIQAdgBAJgHQAJgGAAgWIAAjhQAAgMgDgGQgDgGgJAAIgRADIgTAIIAAgHIBZguIADAAIABACIAAADIAAElQAAATAKAFQAKAFAcABIAAAHg");
	this.shape_1.setTransform(212.5,392.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC00").s().p("AhHClIAAgJQAggCAHgJQAIgHAAggIAAj5IgcAAQgqgBgOAMQgQAMgHAoIgMAAIADhUIEaAAIACBUIgMAAQgJgogNgMQgNgMgsABIgcAAIAAD+QAAAdAJAHQAJAHAeACIAAAJg");
	this.shape_2.setTransform(184.5,392.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("AgpCkIgdgJQgJAAgCAFIgFAMIgLAAIgOhrIALAAQANAiARAUQAeAjAqAAQAYAAASgPQARgPAAgcQAAgYgRgSQgMgMgjgWIgrgaQgTgMgMgNQgVgXAAgdQAAgmAZgZQAZgZAqAAQAQAAAYAIIAbAJQAKAAADgFIAGgMIAKAAIALBqIgMAAQgMgwgbgTQgbgTgaAAQgUAAgPAMQgQAMAAAWQAAATAMAOQAMAOAYAPIArAbQApAYASAWQAQAVAAAdQAAAogdAaQgeAaguAAQgXAAgZgIg");
	this.shape_3.setTransform(154.9,392.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CC00").s().p("AiSClIAAgJQAcgCAIgIQAJgGAAgdIAAjdQAAgbgJgIQgIgIgcgCIAAgJIEJAAIACBHIgNAAQgGgggNgKQgNgLgrABIhEAAQgKAAgDADQgCAEAAAKIAABvIBLAAQAgAAAKgKQAIgJAFgcIAMAAIAAByIgMAAQgFgdgJgKQgJgJggAAIhLAAIAAB8QgBAPAKACQAJADAuAAQAzAAAYgLQAYgLAUgrIAOAAIgXBUg");
	this.shape_4.setTransform(126.3,392.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00CC00").s().p("AhHClIAAgJQAfgCAJgJQAHgHAAggIAAj5IgcAAQgqgBgPAMQgOAMgIAoIgMAAIADhUIEZAAIADBUIgMAAQgIgogOgMQgOgMgrABIgcAAIAAD+QAAAdAJAHQAJAHAeACIAAAJg");
	this.shape_5.setTransform(95.7,392.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC0000").s().p("AhCCoIAAgIQAdgBAJgHQAJgGAAgWIAAjhQAAgMgDgGQgDgGgJAAIgRADIgTAIIAAgHIBZguIADAAIABACIAAADIAAElQAAATAKAFQAKAFAcABIAAAHg");
	this.shape_6.setTransform(248.9,242.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC0000").s().p("AhVBnQgPgPAAgXQAAgjAjgXQAWgOBDgaIAAgUQAAgZgFgKQgJgQgZAAQgMAAgLAGQgMAGAAAMIACAKIABAJQAAANgJAGQgFADgHAAQgLAAgGgHQgGgHAAgJQAAgRAVgTQAVgSApgBQAuAAARAgQAJAQAAAgIAABiIACATQADAJAKAAIAKgBIAMgIIAAAMQgIAKgJAFQgNAKgOAAQgRAAgHgLQgIgKgBgQQgSAQgMAJQgXANgUgBQgVAAgPgOgAgWAAQgjAVAAAcQAAAWAPAKQAJAHAMAAQAQAAAOgJQAPgJAAgOIAAhMQgcAJgSALg");
	this.shape_7.setTransform(213.6,247.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC0000").s().p("AhDBXQgdgeAAgzQAAgyAggkQAggkAwAAQAeAAAWAPQAWAQAAATQAAAIgFAHQgGAHgMAAQgIAAgHgGQgGgGgDgLIgDgMQgDgNgIgFQgIgGgNAAQgbAAgTAZQgTAYAAAoQAAAkAVAeQAVAdAjAAQAZAAAUgRQALgJAOgVIAHAEQgOAegPARQgeAggmAAQgmAAgdgeg");
	this.shape_8.setTransform(190.4,247.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC0000").s().p("Ag6CqIAAgGQAagDAGgGQAHgGAAgdIAAh0QAAgPgCgHQgEgJgLgBIgFABIgPAEIAAgIIAKgEIA7gVIAJgCIAAADIAACvQAAAbAHAIQAGAGAYADIAAAGgAgUh+QgHgIAAgKQAAgKAHgIQAIgIAKAAQAKAAAHAIQAIAIAAAKQAAAKgIAIQgHAHgKAAQgKAAgIgHg");
	this.shape_9.setTransform(172.6,242);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC0000").s().p("AANBzIAAgHQASgDAHgHQAHgHAAgZIAAhnQAAgWgIgNQgIgOgUAAQgOAAgPAKIgVATIAACHQAAASAIAGQAIAFAQABIAAAHIhqAAIAAgHQARgCAHgHQAHgGAAgWIAAh8QAAgPgDgGQgFgJgOAAIgEAAIgGABIAAgJIAvgPIAXgIIACABIABAEIAAAkQAWgVANgIQASgMAUAAQARAAANAJQAbATAAAwIAABwQAAATAHAHQAHAIAQAAIAAAHg");
	this.shape_10.setTransform(153.2,247.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC0000").s().p("AhVBnQgPgPAAgXQAAgjAjgXQAWgOBDgaIAAgUQAAgZgFgKQgJgQgZAAQgMAAgLAGQgMAGAAAMIACAKIABAJQAAANgJAGQgFADgHAAQgLAAgGgHQgGgHAAgJQAAgRAVgTQAVgSApgBQAuAAARAgQAJAQAAAgIAABiIACATQADAJAKAAIAKgBIAMgIIAAAMQgIAKgJAFQgNAKgOAAQgRAAgHgLQgIgKgBgQQgSAQgMAJQgXANgUgBQgVAAgPgOgAgWAAQgjAVAAAcQAAAWAPAKQAJAHAMAAQAQAAAOgJQAPgJAAgOIAAhMQgcAJgSALg");
	this.shape_11.setTransform(130.5,247.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC0000").s().p("AhSBzIAAgIQAXgCAHgGQAIgGAAgUIAAhtQAAgYgFgKQgFgLgMAAIgGABIgIABIAAgIIAcgKIAUgHIAZgKIACABIAAAFIAAAoQAPgWAPgMQAOgMAQAAQAMAAAJAHQAHAIAAALQAAAKgGAHQgFAHgKAAQgJAAgKgIQgJgKgFABQgJgBgMAOQgMAOAAAPIAABtQAAAVAJAIQAKAJAXgBIAAAIg");
	this.shape_12.setTransform(110.4,247.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC0000").s().p("AgfB5QgGgNAAgZIAAiTIgaAAIgCgCIgBgBIACgEIAGgGIAZgXIAiguIAEAAIAAAFIAAA7IAxAAIAAASIgxAAIgBCMQAAASADAJQAGARARABQAJAAAHgFIAOgNIAHAGIgGAHQgMARgPAHQgOAHgNAAQgcAAgKgag");
	this.shape_13.setTransform(95.3,244.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC0000").s().p("AgkBxIgWgFIgFACIgDAFIgHAAIAAhPIAIAAQAGAcAKAPQARAbAgAAQASAAAKgKQALgKAAgQQAAgKgGgKQgGgKgQgIIgagQQgegQgOgQQgOgQAAgWQAAgbATgSQAUgSAdAAQAMABAQAEIARAFIAGgBIAEgEIAGAAIABBEIgHAAQgFgXgIgOQgPgYgcAAQgRAAgKALQgKAKAAAOQAAAXAiARIAfASQA0AbAAAlQAAAdgVASQgWATgigBQgOABgTgFg");
	this.shape_14.setTransform(78.5,247.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00CC00").s().p("AhCCoIAAgIQAdgBAJgHQAJgGAAgWIAAjhQAAgMgDgGQgDgGgJAAIgRADIgTAIIAAgHIBZguIADAAIABACIAAADIAAElQAAATAKAFQAKAFAcABIAAAHg");
	this.shape_15.setTransform(163,86.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00CC00").s().p("AgfB6QgGgOAAgZIAAiTIgaAAIgCgBIgBgCIACgEIAGgHIAZgWIAiguIAEABIAAADIAAA8IAxAAIAAASIgxAAIgBCMQAAASADAKQAGARARAAQAJgBAHgEIAOgNIAHAFIgGAIQgMARgPAHQgOAHgNAAQgcAAgKgZg");
	this.shape_16.setTransform(131.3,88.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00CC00").s().p("AgkBxIgWgFIgFACIgDAFIgHAAIAAhPIAIAAQAGAcAKAPQARAbAgAAQASAAAKgKQALgKAAgQQAAgLgGgJQgGgKgQgJIgagPQgegQgOgQQgOgQAAgWQAAgbATgSQAUgRAdAAQAMAAAQAEIARAFIAGgBIAEgEIAGAAIABBEIgHAAQgFgXgIgOQgPgYgcAAQgRAAgKAKQgKALAAAOQAAAWAiASIAfARQA0AcAAAlQAAAdgVASQgWASgiABQgOgBgTgEg");
	this.shape_17.setTransform(114.5,91.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00CC00").s().p("AhKBTQgZgjAAgtQAAgwAdgkQAdgkAtABQAjgBAaAYQAZAYAAAsIiaAAQADA3AXAaQAXAaAfAAQAaAAARgOQASgNAPgZIAIADQgKAggbAaQgcAbgnAAQgtgBgZgigAAngpQgCgYgHgMQgMgVgbAAQgcAAgOAYQgIANgEAUIBmAAIAAAAg");
	this.shape_18.setTransform(93.4,91.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00CC00").s().p("AgfB6QgGgOAAgZIAAiTIgaAAIgCgBIgBgCIACgEIAGgHIAZgWIAiguIAEABIAAADIAAA8IAxAAIAAASIgxAAIgBCMQAAASADAKQAGARARAAQAJgBAHgEIAOgNIAHAFIgGAIQgMARgPAHQgOAHgNAAQgcAAgKgZg");
	this.shape_19.setTransform(75.8,88.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00CC00").s().p("AhCCoIAAgIQAdgBAJgHQAJgGAAgWIAAjhQAAgMgDgGQgDgGgJAAIgRADIgTAIIAAgHIBZguIADAAIABACIAAADIAAElQAAATAKAFQAKAFAcABIAAAHg");
	this.shape_20.setTransform(198.9,355.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00CC00").s().p("AhHClIAAgJQAfgCAJgJQAHgHAAggIAAj5IgcAAQgqgBgPAMQgOAMgIAoIgMAAIADhUIEZAAIADBUIgMAAQgJgogNgMQgOgMgrABIgcAAIAAD+QAAAdAJAHQAJAHAfACIAAAJg");
	this.shape_21.setTransform(170.9,355.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00CC00").s().p("AgpCkIgdgJQgJAAgCAFIgFAMIgLAAIgOhrIALAAQANAiARAUQAeAjAqAAQAYAAASgPQARgPAAgcQAAgYgRgSQgMgMgjgWIgrgaQgTgMgMgNQgVgXAAgdQAAgmAZgZQAZgZAqAAQAQAAAYAIIAbAJQAKAAADgFIAGgMIAKAAIALBqIgMAAQgMgwgbgTQgbgTgaAAQgUAAgPAMQgQAMAAAWQAAATAMAOQAMAOAYAPIArAbQApAYASAWQAQAVAAAdQAAAogdAaQgeAaguAAQgXAAgZgIg");
	this.shape_22.setTransform(141.3,355.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00CC00").s().p("AiSClIAAgJQAcgCAIgIQAIgGAAgdIAAjdQAAgagIgJQgHgIgdgCIAAgJIEJAAIACBHIgMAAQgHgggNgKQgMgKgtAAIhCAAQgMAAgCADQgCAEgBAKIAABvIBNAAQAfAAAJgJQAJgKAGgcIALAAIAAByIgLAAQgGgdgJgKQgJgJgfAAIhNAAIAAB8QAAAPAKADQAJACAuAAQAzAAAYgLQAZgLASgrIAOAAIgWBUg");
	this.shape_23.setTransform(112.7,355.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00CC00").s().p("AhHClIAAgJQAggCAHgJQAIgHAAggIAAj5IgcAAQgpgBgPAMQgQAMgHAoIgMAAIADhUIEZAAIADBUIgMAAQgJgogNgMQgOgMgrABIgcAAIAAD+QAAAdAJAHQAJAHAfACIAAAJg");
	this.shape_24.setTransform(82.1,355.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC0000").s().p("AhCCoIAAgIQAdgBAJgHQAJgGAAgWIAAjhQAAgMgDgGQgDgGgJAAIgRADIgTAIIAAgHIBZguIADAAIABACIAAADIAAElQAAATAKAFQAKAFAcABIAAAHg");
	this.shape_25.setTransform(235.4,205.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CC0000").s().p("AhVBnQgPgPAAgXQAAgjAjgXQAWgOBDgaIAAgUQAAgZgFgKQgJgQgZAAQgMAAgLAGQgMAGAAAMIACAKIABAJQAAANgJAGQgFADgHAAQgLAAgGgHQgGgHAAgJQAAgRAVgTQAVgSApgBQAuAAARAfQAJARAAAhIAABhIACATQADAJAKAAIAKgBIAMgIIAAAMQgIAJgJAGQgNAKgOAAQgRAAgHgLQgIgKgBgQQgSAQgMAJQgXANgUgBQgVAAgPgOgAgWAAQgjAVAAAbQAAAXAPAKQAJAHAMAAQAQAAAOgJQAPgJAAgOIAAhMQgcAJgSALg");
	this.shape_26.setTransform(200.1,210.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CC0000").s().p("AhDBXQgdgeAAgzQAAgyAggkQAggkAwAAQAeAAAWAPQAWAQAAATQAAAIgFAHQgGAHgMAAQgIAAgHgGQgGgGgDgLIgDgMQgDgNgIgFQgIgGgNAAQgbAAgTAZQgTAYAAAoQAAAkAVAeQAVAdAjAAQAZAAAUgRQALgJAOgVIAHAEQgOAegPARQgeAggmAAQgmAAgdgeg");
	this.shape_27.setTransform(176.8,210.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CC0000").s().p("Ag6CqIAAgHQAagCAGgGQAHgGAAgdIAAh0QAAgQgCgGQgEgKgLAAIgFABIgPAEIAAgIIAKgEIA7gVIAJgCIAAADIAACvQAAAcAHAGQAGAIAYABIAAAHgAgUh+QgHgIAAgKQAAgKAHgIQAIgIAKAAQAKAAAHAIQAIAHAAALQAAAKgIAIQgHAHgKABQgKgBgIgHg");
	this.shape_28.setTransform(159,205);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CC0000").s().p("AANBzIAAgHQASgDAHgGQAHgIAAgZIAAhnQAAgWgIgNQgIgOgUAAQgOAAgPAKIgVASIAACIQAAARAIAHQAIAFAQABIAAAHIhqAAIAAgHQARgCAHgHQAHgGAAgWIAAh8QAAgPgDgGQgFgKgOABIgEAAIgGABIAAgJIAvgPIAXgIIACABIABAEIAAAkQAWgVANgIQASgMAUAAQARAAANAJQAbATAAAwIAABwQAAATAHAHQAHAIAQAAIAAAHg");
	this.shape_29.setTransform(139.6,210.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CC0000").s().p("AhVBnQgPgPAAgXQAAgjAjgXQAWgOBDgaIAAgUQAAgZgFgKQgJgQgZAAQgMAAgLAGQgMAGAAAMIACAKIABAJQAAANgJAGQgFADgHAAQgLAAgGgHQgGgHAAgJQAAgRAVgTQAVgSApgBQAuAAARAfQAJARAAAhIAABhIACATQADAJAKAAIAKgBIAMgIIAAAMQgIAJgJAGQgNAKgOAAQgRAAgHgLQgIgKgBgQQgSAQgMAJQgXANgUgBQgVAAgPgOgAgWAAQgjAVAAAbQAAAXAPAKQAJAHAMAAQAQAAAOgJQAPgJAAgOIAAhMQgcAJgSALg");
	this.shape_30.setTransform(116.9,210.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CC0000").s().p("AhSBzIAAgIQAWgCAIgGQAHgGABgUIAAhsQgBgZgEgKQgEgKgMAAIgHAAIgIABIAAgIIAcgKIAUgHIAZgKIACABIAAAFIAAAoQAPgWAPgMQAPgMAPAAQANAAAHAIQAIAHAAALQAAAKgFAHQgHAHgJAAQgJAAgJgIQgKgKgFABQgJgBgMAOQgLAOAAAPIAABtQgBAVAJAIQAKAJAWgBIAAAIg");
	this.shape_31.setTransform(96.8,210.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CC0000").s().p("AgfB6QgGgOAAgZIAAiTIgaAAIgCgCIgBgBIACgEIAGgGIAZgXIAiguIAEAAIAAAFIAAA7IAxAAIAAASIgxAAIgBCMQAAASADAKQAGAQARABQAJAAAHgFIAOgNIAHAFIgGAIQgMARgPAHQgOAHgNAAQgcAAgKgZg");
	this.shape_32.setTransform(81.7,207.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CC0000").s().p("AgkBxIgWgFIgFACIgDAFIgHAAIAAhPIAIAAQAGAcAKAPQARAbAgAAQASAAAKgKQALgKAAgQQAAgKgGgKQgGgJgQgJIgagQQgegQgOgQQgOgQAAgWQAAgbATgSQAUgSAdAAQAMABAQAEIARAFIAGgBIAEgEIAGAAIABBEIgHAAQgFgXgIgOQgPgYgcAAQgRAAgKALQgKAKAAAOQAAAWAiASIAfASQA0AbAAAlQAAAdgVASQgWATgigBQgOABgTgFg");
	this.shape_33.setTransform(65,210.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00CC00").s().p("AhCCoIAAgIQAdgBAJgHQAJgGAAgWIAAjhQAAgMgDgGQgDgGgJAAIgRADIgTAIIAAgHIBZguIADAAIABACIAAADIAAElQAAATAKAFQAKAFAcABIAAAHg");
	this.shape_34.setTransform(149.4,49.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00CC00").s().p("AgfB6QgGgOAAgZIAAiTIgaAAIgCgBIgBgDIACgDIAGgHIAZgWIAiguIAEABIAAADIAAA9IAxAAIAAARIgxAAIgBCLQAAATADAKQAGAQARAAQAJAAAHgDIAOgOIAHAFIgGAIQgMARgPAHQgOAHgNAAQgcAAgKgZg");
	this.shape_35.setTransform(117.7,51.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00CC00").s().p("AgkBxIgWgFIgFACIgDAFIgHAAIAAhPIAIAAQAGAcAKAPQARAbAgAAQASAAAKgKQALgKAAgQQAAgKgGgKQgGgKgQgJIgagPQgegQgOgQQgOgQAAgWQAAgbATgSQAUgRAdAAQAMgBAQAFIARAFIAGgBIAEgEIAGAAIABBEIgHAAQgFgXgIgOQgPgYgcAAQgRAAgKAKQgKALAAAOQAAAXAiARIAfARQA0AbAAAmQAAAdgVATQgWARgiABQgOgBgTgEg");
	this.shape_36.setTransform(101,54.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00CC00").s().p("AhKBTQgZgjAAgtQAAgwAdgkQAdgkAtAAQAjAAAaAYQAZAYAAAsIiaAAQADA3AXAaQAXAaAfAAQAaAAARgOQASgNAPgYIAIACQgKAggbAaQgcAbgnAAQgtgBgZgigAAngpQgCgYgHgMQgMgVgbgBQgcAAgOAZQgIANgEAUIBmAAIAAAAg");
	this.shape_37.setTransform(79.9,54.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00CC00").s().p("AgfB6QgGgOAAgZIAAiTIgaAAIgCgBIgBgDIACgDIAGgHIAZgWIAiguIAEABIAAADIAAA9IAxAAIAAARIgxAAIgBCLQAAATADAKQAGAQARAAQAJAAAHgDIAOgOIAHAFIgGAIQgMARgPAHQgOAHgNAAQgcAAgKgZg");
	this.shape_38.setTransform(62.3,51.8);

	this.instance_2 = new lib.Символ1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(151.5,206.6,1,1,0,0,0,98.5,180);
	this.instance_2._off = true;

	this.instance_3 = new lib.Символ5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-61.5,413.5,1,1,0,0,0,56.5,56.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.instance_2}]},14).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).wait(1).to({regX:98,regY:176,x:148.7,y:204},0).wait(1).to({x:146.5,y:205.5},0).wait(1).to({x:144.2,y:207},0).wait(1).to({x:141.9,y:208.4},0).wait(1).to({x:139.6,y:209.9},0).wait(1).to({x:137.4,y:211.4},0).wait(1).to({x:135.1,y:212.8},0).wait(1).to({x:132.8,y:214.3},0).wait(1).to({x:130.6,y:215.8},0).wait(1).to({x:128.3,y:217.2},0).wait(1).to({x:126,y:218.7},0).wait(1).to({x:123.7,y:220.2},0).wait(1).to({x:121.5,y:221.6},0).wait(1).to({x:119.2,y:223.1},0).wait(1).to({x:116.9,y:224.6},0).wait(1).to({x:114.6,y:226},0).wait(1).to({x:112.4,y:227.5},0).wait(1).to({x:110.1,y:229},0).wait(1).to({x:107.8,y:230.5},0).wait(1).to({x:105.6,y:231.9},0).wait(1).to({x:103.3,y:233.4},0).wait(1).to({x:101,y:234.9},0).wait(1).to({x:98.7,y:236.3},0).wait(1).to({x:96.5,y:237.8},0).wait(1).to({x:94.3,y:239.3},0).wait(1).to({x:92,y:240.7},0).wait(1).to({x:89.7,y:242.2},0).wait(1).to({x:87.4,y:243.7},0).wait(1).to({x:85.2,y:245.1},0).wait(1).to({x:82.9,y:246.6},0).wait(1).to({x:80.6,y:248.1},0).wait(1).to({x:78.3,y:249.5},0).wait(1).to({x:76.1,y:251},0).wait(1).to({x:73.8,y:252.5},0).wait(1).to({x:71.5,y:253.9},0).wait(1).to({x:69.3,y:255.4},0).wait(1).to({x:67,y:256.9},0).wait(1).to({x:64.7,y:258.4},0).wait(1).to({x:62.4,y:259.8},0).wait(1).to({x:60.2,y:261.3},0).wait(1).to({x:57.9,y:262.8},0).wait(1).to({x:55.6,y:264.2},0).wait(1).to({x:53.4,y:265.7},0).wait(1).to({x:51.1,y:267.2},0).wait(1).to({x:48.8,y:268.6},0).wait(1).to({x:46.5,y:270.1},0).wait(1).to({x:44.3,y:271.6},0).wait(1).to({x:42,y:273},0).wait(1).to({x:39.7,y:274.5},0).wait(1).to({x:37.5,y:276},0).wait(1).to({x:35.2,y:277.4},0).wait(1).to({x:32.9,y:278.9},0).wait(1).to({x:30.6,y:280.4},0).wait(1).to({x:28.4,y:281.8},0).wait(1).to({x:26.1,y:283.3},0).wait(1).to({x:23.8,y:284.8},0).wait(1).to({x:21.5,y:286.3},0).wait(1).to({x:19.3,y:287.7},0).wait(1).to({x:17,y:289.2},0).wait(1).to({x:14.7,y:290.7},0).wait(1).to({x:12.5,y:292.1},0).wait(1).to({x:10.2,y:293.6},0).wait(1).to({x:7.9,y:295.1},0).wait(1).to({x:5.6,y:296.5},0).wait(1).to({x:3.4,y:298},0).wait(1).to({x:1.1,y:299.5},0).wait(1).to({x:-1.2,y:300.9},0).wait(1).to({x:-3.4,y:302.4},0).wait(1).to({x:-5.7,y:303.9},0).wait(1).to({x:-8,y:305.3},0).wait(1).to({x:-10.3,y:306.8},0).wait(1).to({x:-12.5,y:308.3},0).wait(1).to({x:-14.8,y:309.7},0).wait(1).to({x:-17.1,y:311.2},0).wait(1).to({x:-19.3,y:312.7},0).wait(1).to({x:-21.6,y:314.2},0).wait(1).to({x:-23.9,y:315.6},0).wait(1).to({x:-26.2,y:317.1},0).wait(1).to({x:-28.4,y:318.6},0).wait(1).to({x:-30.7,y:320},0).wait(1).to({x:-33,y:321.5},0).wait(1).to({x:-35.2,y:323},0).wait(1).to({x:-37.5,y:324.4},0).wait(1).to({x:-39.8,y:325.9},0).wait(1).to({x:-42.1,y:327.4},0).wait(1).to({x:-44.3,y:328.8},0).wait(1).to({x:-46.6,y:330.3},0).wait(1).to({x:-48.9,y:331.8},0).wait(1).to({x:-51.2,y:333.2},0).wait(1).to({x:-53.4,y:334.7},0).wait(1).to({x:-55.7,y:336.2},0).wait(1).to({x:-58,y:337.6},0).wait(1).to({x:-60.2,y:339.1},0).wait(1).to({x:-62.5,y:340.6},0).wait(1).to({x:-64.8,y:342.1},0).wait(1).to({x:-67.1,y:343.5},0).wait(1).to({x:-69.3,y:345},0).wait(1).to({x:-71.6,y:346.5},0).wait(1).to({x:-73.9,y:347.9},0).wait(1).to({x:-76.1,y:349.4},0).wait(1).to({x:-78.4,y:350.9},0).wait(1).to({x:-80.7,y:352.3},0).wait(1).to({x:-83,y:353.8},0).wait(1).to({x:-85.2,y:355.3},0).wait(1).to({x:-87.5,y:356.7},0).wait(1).to({x:-89.8,y:358.2},0).wait(1).to({x:-92,y:359.7},0).wait(1).to({x:-94.3,y:361.1},0).wait(1).to({x:-96.6,y:362.6},0).wait(1).to({x:-98.9,y:364.1},0).wait(1).to({x:-101.1,y:365.5},0).wait(1).to({x:-103.4,y:367},0).wait(1).to({x:-105.7,y:368.5},0).wait(1).to({x:-108,y:370},0).wait(1).to({x:172.5,y:292.5},0).wait(1).to({x:453,y:215},0).wait(1).to({_off:true},1).wait(255));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(134).to({_off:false},0).wait(1).to({x:-59.6,y:412},0).wait(1).to({x:-57.7,y:410.4},0).wait(1).to({x:-55.9,y:408.9},0).wait(1).to({x:-54,y:407.4},0).wait(1).to({x:-52.2,y:405.8},0).wait(1).to({x:-50.3,y:404.3},0).wait(1).to({x:-48.5,y:402.8},0).wait(1).to({x:-46.6,y:401.2},0).wait(1).to({x:-44.8,y:399.7},0).wait(1).to({x:-42.9,y:398.1},0).wait(1).to({x:-41.1,y:396.6},0).wait(1).to({x:-39.2,y:395.1},0).wait(1).to({x:-37.3,y:393.5},0).wait(1).to({x:-35.5,y:392},0).wait(1).to({x:-33.6,y:390.5},0).wait(1).to({x:-31.8,y:388.9},0).wait(1).to({x:-29.9,y:387.4},0).wait(1).to({x:-28.1,y:385.9},0).wait(1).to({x:-26.2,y:384.3},0).wait(1).to({x:-24.4,y:382.8},0).wait(1).to({x:-22.5,y:381.3},0).wait(1).to({x:-20.7,y:379.7},0).wait(1).to({x:-18.8,y:378.2},0).wait(1).to({x:-16.9,y:376.7},0).wait(1).to({x:-15.1,y:375.1},0).wait(1).to({x:-13.2,y:373.6},0).wait(1).to({x:-11.4,y:372},0).wait(1).to({x:-9.5,y:370.5},0).wait(1).to({x:-7.7,y:369},0).wait(1).to({x:-5.8,y:367.4},0).wait(1).to({x:-4,y:365.9},0).wait(1).to({x:-2.1,y:364.4},0).wait(1).to({x:-0.3,y:362.8},0).wait(1).to({x:1.6,y:361.3},0).wait(1).to({x:3.5,y:359.8},0).wait(1).to({x:5.3,y:358.2},0).wait(1).to({x:7.2,y:356.7},0).wait(1).to({x:9,y:355.2},0).wait(1).to({x:10.9,y:353.6},0).wait(1).to({x:12.7,y:352.1},0).wait(1).to({x:14.6,y:350.6},0).wait(1).to({x:16.4,y:349},0).wait(1).to({x:18.3,y:347.5},0).wait(1).to({x:20.1,y:345.9},0).wait(1).to({x:22,y:344.4},0).wait(1).to({x:23.8,y:342.9},0).wait(1).to({x:25.7,y:341.3},0).wait(1).to({x:27.6,y:339.8},0).wait(1).to({x:29.4,y:338.3},0).wait(1).to({x:31.3,y:336.7},0).wait(1).to({x:33.1,y:335.2},0).wait(1).to({x:35,y:333.7},0).wait(1).to({x:36.8,y:332.1},0).wait(1).to({x:38.7,y:330.6},0).wait(1).to({x:40.5,y:329.1},0).wait(1).to({x:42.4,y:327.5},0).wait(1).to({x:44.2,y:326},0).wait(1).to({x:46.1,y:324.5},0).wait(1).to({x:48,y:322.9},0).wait(1).to({x:49.8,y:321.4},0).wait(1).to({x:51.7,y:319.9},0).wait(1).to({x:53.5,y:318.3},0).wait(1).to({x:55.4,y:316.8},0).wait(1).to({x:57.2,y:315.2},0).wait(1).to({x:59,y:313.7},0).wait(1).to({x:60.9,y:312.2},0).wait(1).to({x:62.7,y:310.6},0).wait(1).to({x:64.6,y:309.1},0).wait(1).to({x:66.4,y:307.6},0).wait(1).to({x:68.3,y:306},0).wait(1).to({x:70.2,y:304.5},0).wait(1).to({x:72,y:303},0).wait(1).to({x:73.9,y:301.4},0).wait(1).to({x:75.7,y:299.9},0).wait(1).to({x:77.6,y:298.4},0).wait(1).to({x:79.4,y:296.8},0).wait(1).to({x:81.3,y:295.3},0).wait(1).to({x:83.1,y:293.8},0).wait(1).to({x:85,y:292.2},0).wait(1).to({x:86.8,y:290.7},0).wait(1).to({x:88.7,y:289.1},0).wait(1).to({x:90.6,y:287.6},0).wait(1).to({x:92.4,y:286.1},0).wait(1).to({x:94.3,y:284.5},0).wait(1).to({x:96.1,y:283},0).wait(1).to({x:98,y:281.5},0).wait(1).to({x:99.8,y:279.9},0).wait(1).to({x:101.7,y:278.4},0).wait(1).to({x:103.5,y:276.9},0).wait(1).to({x:105.4,y:275.3},0).wait(1).to({x:107.2,y:273.8},0).wait(1).to({x:109.1,y:272.3},0).wait(1).to({x:111,y:270.7},0).wait(1).to({x:112.8,y:269.2},0).wait(1).to({x:114.7,y:267.7},0).wait(1).to({x:116.5,y:266.1},0).wait(1).to({x:118.4,y:264.6},0).wait(1).to({x:120.2,y:263},0).wait(1).to({x:122.1,y:261.5},0).wait(1).to({x:123.9,y:260},0).wait(1).to({x:125.8,y:258.4},0).wait(1).to({x:127.6,y:256.9},0).wait(1).to({x:129.5,y:255.4},0).wait(1).to({x:131.4,y:253.8},0).wait(1).to({x:133.2,y:252.3},0).wait(1).to({x:135.1,y:250.8},0).wait(1).to({x:136.9,y:249.2},0).wait(1).to({x:138.8,y:247.7},0).wait(1).to({x:140.6,y:246.2},0).wait(1).to({x:142.5,y:244.6},0).wait(1).to({x:144.3,y:243.1},0).wait(1).to({x:146.2,y:241.6},0).wait(1).to({x:148,y:240},0).wait(1).to({x:149.9,y:238.5},0).wait(1).to({x:151.7,y:236.9},0).wait(1).to({x:153.6,y:235.4},0).wait(1).to({x:155.5,y:233.9},0).wait(1).to({x:157.3,y:232.3},0).wait(1).to({x:159.2,y:230.8},0).wait(1).to({x:161,y:229.3},0).wait(1).to({x:162.9,y:227.7},0).wait(1).to({x:164.7,y:226.2},0).wait(1).to({x:166.6,y:224.7},0).wait(1).to({x:168.4,y:223.1},0).wait(1).to({x:170.3,y:221.6},0).wait(1).to({x:172.1,y:220.1},0).wait(1).to({x:174,y:218.5},0).wait(1).to({x:175.9,y:217},0).wait(1).to({x:177.7,y:215.5},0).wait(1).to({x:179.6,y:213.9},0).wait(1).to({x:181.4,y:212.4},0).wait(1).to({x:183.3,y:210.8},0).wait(1).to({x:185.1,y:209.3},0).wait(1).to({x:187,y:207.8},0).wait(1).to({x:188.8,y:206.2},0).wait(1).to({x:190.7,y:204.7},0).wait(1).to({x:192.5,y:203.2},0).wait(1).to({x:194.4,y:201.6},0).wait(1).to({x:196.3,y:200.1},0).wait(1).to({x:198.1,y:198.6},0).wait(1).to({x:200,y:197},0).wait(1).to({x:201.8,y:195.5},0).wait(1).to({x:203.7,y:194},0).wait(1).to({x:205.5,y:192.4},0).wait(1).to({x:207.4,y:190.9},0).wait(1).to({x:209.2,y:189.4},0).wait(1).to({x:211.1,y:187.8},0).wait(1).to({x:212.9,y:186.3},0).wait(1).to({x:214.8,y:184.7},0).wait(1).to({x:216.6,y:183.2},0).wait(1).to({x:218.5,y:181.7},0).wait(1).to({x:220.4,y:180.1},0).wait(1).to({x:222.2,y:178.6},0).wait(1).to({x:224.1,y:177.1},0).wait(1).to({x:225.9,y:175.5},0).wait(1).to({x:227.8,y:174},0).wait(1).to({x:229.6,y:172.5},0).wait(1).to({x:231.5,y:170.9},0).wait(1).to({x:233.3,y:169.4},0).wait(1).to({x:235.2,y:167.9},0).wait(1).to({x:237,y:166.3},0).wait(1).to({x:238.9,y:164.8},0).wait(1).to({x:240.8,y:163.3},0).wait(1).to({x:242.6,y:161.7},0).wait(1).to({x:244.5,y:160.2},0).wait(1).to({x:246.3,y:158.7},0).wait(1).to({x:248.2,y:157.1},0).wait(1).to({x:250,y:155.6},0).wait(1).to({x:251.9,y:154},0).wait(1).to({x:253.7,y:152.5},0).wait(1).to({x:255.6,y:151},0).wait(1).to({x:257.4,y:149.4},0).wait(1).to({x:259.3,y:147.9},0).wait(1).to({x:261.2,y:146.4},0).wait(1).to({x:263,y:144.8},0).wait(1).to({x:264.9,y:143.3},0).wait(1).to({x:266.7,y:141.8},0).wait(1).to({x:268.6,y:140.2},0).wait(1).to({x:270.4,y:138.7},0).wait(1).to({x:272.3,y:137.2},0).wait(1).to({x:274.1,y:135.6},0).wait(1).to({x:276,y:134.1},0).wait(1).to({x:277.8,y:132.6},0).wait(1).to({x:279.7,y:131},0).wait(1).to({x:281.6,y:129.5},0).wait(1).to({x:283.4,y:127.9},0).wait(1).to({x:285.3,y:126.4},0).wait(1).to({x:287.1,y:124.9},0).wait(1).to({x:289,y:123.3},0).wait(1).to({x:290.8,y:121.8},0).wait(1).to({x:292.7,y:120.3},0).wait(1).to({x:294.5,y:118.7},0).wait(1).to({x:296.4,y:117.2},0).wait(1).to({x:298.2,y:115.7},0).wait(1).to({x:300.1,y:114.1},0).wait(1).to({x:301.9,y:112.6},0).wait(1).to({x:303.8,y:111.1},0).wait(1).to({x:305.7,y:109.5},0).wait(1).to({x:307.5,y:108},0).wait(1).to({x:309.4,y:106.5},0).wait(1).to({x:311.2,y:104.9},0).wait(1).to({x:313.1,y:103.4},0).wait(1).to({x:314.9,y:101.8},0).wait(1).to({x:316.8,y:100.3},0).wait(1).to({x:318.6,y:98.8},0).wait(1).to({x:320.5,y:97.2},0).wait(1).to({x:322.3,y:95.7},0).wait(1).to({x:324.2,y:94.2},0).wait(1).to({x:326.1,y:92.6},0).wait(1).to({x:327.9,y:91.1},0).wait(1).to({x:329.8,y:89.6},0).wait(1).to({x:331.6,y:88},0).wait(1).to({x:333.5,y:86.5},0).wait(1).to({x:335.3,y:85},0).wait(1).to({x:337.2,y:83.4},0).wait(1).to({x:339,y:81.9},0).wait(1).to({x:340.9,y:80.4},0).wait(1).to({x:342.7,y:78.8},0).wait(1).to({x:344.6,y:77.3},0).wait(1).to({x:346.5,y:75.7},0).wait(1).to({x:348.3,y:74.2},0).wait(1).to({x:350.2,y:72.7},0).wait(1).to({x:352,y:71.1},0).wait(1).to({x:353.9,y:69.6},0).wait(1).to({x:355.7,y:68.1},0).wait(1).to({x:357.6,y:66.5},0).wait(1).to({x:359.4,y:65},0).wait(1).to({x:361.3,y:63.5},0).wait(1).to({x:363.1,y:61.9},0).wait(1).to({x:365,y:60.4},0).wait(1).to({x:366.9,y:58.9},0).wait(1).to({x:368.7,y:57.3},0).wait(1).to({x:370.6,y:55.8},0).wait(1).to({x:372.4,y:54.3},0).wait(1).to({x:374.3,y:52.8},0).wait(1).to({x:376.1,y:51.2},0).wait(1).to({x:378,y:49.7},0).wait(1).to({x:379.8,y:48.2},0).wait(1).to({x:381.7,y:46.6},0).wait(1).to({x:383.5,y:45.1},0).wait(1).to({x:385.4,y:43.6},0).wait(1).to({x:387.2,y:42},0).wait(1).to({x:389.1,y:40.5},0).wait(1).to({x:391,y:39},0).wait(1).to({x:392.8,y:37.4},0).wait(1).to({x:394.7,y:35.9},0).wait(1).to({x:396.5,y:34.3},0).wait(1).to({x:398.4,y:32.8},0).wait(1).to({x:400.2,y:31.3},0).wait(1).to({x:402.1,y:29.7},0).wait(1).to({x:403.9,y:28.2},0).wait(1).to({x:405.8,y:26.7},0).wait(1).to({x:407.6,y:25.1},0).wait(1).to({x:409.5,y:23.6},0).wait(1));

	// Слой 3
	this.instance_4 = new lib.Символ3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-21.3,558,1,1,0,0,0,60.1,62.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(1).to({x:-17.8,y:552.7},0).wait(1).to({x:-14.4,y:547.4},0).wait(1).to({x:-11,y:542.1},0).wait(1).to({x:-7.6,y:536.8},0).wait(1).to({x:-4.2,y:531.5},0).wait(1).to({x:-0.8,y:526.2},0).wait(1).to({x:2.6,y:520.9},0).wait(1).to({x:6,y:515.6},0).wait(1).to({x:9.4,y:510.3},0).wait(1).to({x:12.8,y:505},0).wait(1).to({x:16.2,y:499.7},0).wait(1).to({x:19.6,y:494.4},0).wait(1).to({x:23,y:489.1},0).wait(1).to({x:26.4,y:483.8},0).wait(1).to({x:29.8,y:478.5},0).wait(1).to({x:33.2,y:473.2},0).wait(1).to({x:36.6,y:467.9},0).wait(1).to({x:40,y:462.6},0).wait(1).to({x:43.4,y:457.3},0).wait(1).to({x:46.8,y:452},0).wait(1).to({x:50.2,y:446.7},0).wait(1).to({x:53.6,y:441.4},0).wait(1).to({x:57,y:436.1},0).wait(1).to({x:60.4,y:430.8},0).wait(1).to({x:63.8,y:425.6},0).wait(1).to({x:67.2,y:420.3},0).wait(1).to({x:70.6,y:415},0).wait(1).to({x:74,y:409.7},0).wait(1).to({x:77.4,y:404.4},0).wait(1).to({x:80.8,y:399.1},0).wait(1).to({x:84.2,y:393.8},0).wait(1).to({x:87.6,y:388.5},0).wait(1).to({x:91,y:383.2},0).wait(1).to({x:94.4,y:377.9},0).wait(1).to({x:97.8,y:372.6},0).wait(1).to({x:101.2,y:367.3},0).wait(1).to({x:104.6,y:362},0).wait(1).to({x:108,y:356.7},0).wait(1).to({x:111.4,y:351.4},0).wait(1).to({x:114.8,y:346.1},0).wait(1).to({x:118.2,y:340.8},0).wait(1).to({x:121.6,y:335.5},0).wait(1).to({x:125,y:330.2},0).wait(1).to({x:128.4,y:324.9},0).wait(1).to({x:131.8,y:319.6},0).wait(1).to({x:135.2,y:314.3},0).wait(1).to({x:138.7,y:309},0).wait(1).to({x:142.1,y:303.7},0).wait(1).to({x:145.5,y:298.4},0).wait(1).to({x:148.9,y:293.1},0).wait(1).to({x:152.3,y:287.8},0).wait(1).to({x:155.7,y:282.5},0).wait(1).to({x:159.1,y:277.2},0).wait(1).to({x:162.5,y:271.9},0).wait(1).to({x:165.9,y:266.6},0).wait(1).to({x:169.3,y:261.3},0).wait(1).to({x:172.7,y:256},0).wait(1).to({x:176.1,y:250.7},0).wait(1).to({x:179.5,y:245.4},0).wait(1).to({x:182.9,y:240.1},0).wait(1).to({x:186.3,y:234.8},0).wait(1).to({x:189.7,y:229.5},0).wait(1).to({x:193.1,y:224.2},0).wait(1).to({x:196.5,y:218.9},0).wait(1).to({x:199.9,y:213.6},0).wait(1).to({x:203.3,y:208.3},0).wait(1).to({x:206.7,y:203},0).wait(1).to({x:210.1,y:197.7},0).wait(1).to({x:213.5,y:192.4},0).wait(1).to({x:216.9,y:187.1},0).wait(1).to({x:220.3,y:181.8},0).wait(1).to({x:223.7,y:176.5},0).wait(1).to({x:227.1,y:171.2},0).wait(1).to({x:230.5,y:165.9},0).wait(1).to({x:233.9,y:160.7},0).wait(1).to({x:237.3,y:155.4},0).wait(1).to({x:240.7,y:150.1},0).wait(1).to({x:244.2,y:144.8},0).wait(1).to({x:247.6,y:139.5},0).wait(1).to({x:251,y:134.2},0).wait(1).to({x:254.4,y:128.9},0).wait(1).to({x:257.8,y:123.6},0).wait(1).to({x:261.2,y:118.3},0).wait(1).to({x:264.6,y:113},0).wait(1).to({x:268,y:107.7},0).wait(1).to({x:271.4,y:102.4},0).wait(1).to({x:274.8,y:97.1},0).wait(1).to({x:278.2,y:91.8},0).wait(1).to({x:281.6,y:86.5},0).wait(1).to({x:285,y:81.2},0).wait(1).to({x:288.4,y:75.9},0).wait(1).to({x:291.8,y:70.6},0).wait(1).to({x:295.2,y:65.3},0).wait(1).to({x:298.6,y:60},0).wait(1).to({x:302,y:54.7},0).wait(1).to({x:305.4,y:49.4},0).wait(1).to({x:308.8,y:44.1},0).wait(1).to({x:312.2,y:38.8},0).wait(1).to({x:315.6,y:33.5},0).wait(1).to({x:319,y:28.3},0).wait(1).to({x:322.4,y:23},0).wait(1).to({x:325.8,y:17.7},0).wait(1).to({x:329.2,y:12.4},0).wait(1).to({x:332.6,y:7.1},0).wait(1).to({x:336,y:1.8},0).wait(1).to({x:339.4,y:-3.5},0).wait(1).to({x:342.8,y:-8.8},0).wait(1).to({x:346.2,y:-14.1},0).wait(1).to({x:349.7,y:-19.4},0).wait(1).to({x:353.1,y:-24.7},0).wait(1).to({x:356.5,y:-30},0).wait(1).to({x:359.9,y:-35.3},0).wait(1).to({x:363.3,y:-40.6},0).wait(1).to({x:366.7,y:-45.9},0).wait(1).to({x:370.1,y:-51.2},0).wait(1).to({x:373.5,y:-56.5},0).wait(1).to({x:376.9,y:-61.8},0).wait(1).to({x:380.3,y:-67.1},0).wait(1).to({x:383.7,y:-72.4},0).wait(1).to({x:387.1,y:-77.7},0).wait(1).to({x:390.5,y:-83},0).wait(1).to({x:393.9,y:-88.3},0).wait(1).to({x:397.3,y:-93.6},0).wait(1).to({x:400.7,y:-98.9},0).wait(7).to({_off:true},1).wait(256));

	// Слой 4
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#444444").ss(1,1,1).p("EgaAgmbMA0BAAAMAAABM3Mg0BAAAg");
	this.shape_39.setTransform(163.5,244);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CC0099").s().p("EgaAAmcMAAAhM3MA0BAAAMAAABM3g");
	this.shape_40.setTransform(163.5,244);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#33FF00").s().p("EgaAAmcMAAAhM3MA0BAAAMAAABM3g");
	this.shape_41.setTransform(163.5,244);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39}]}).to({state:[{t:this.shape_40},{t:this.shape_39}]},134).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14,239.6,482,494);
// library properties:
lib.properties = {
	width: 330,
	height: 485,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;