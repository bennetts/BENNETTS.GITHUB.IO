
function Widget(_o, _cl, _up, _hi) {
  var o = _o;
  var aclick = _cl;
  var aupdate = _up;
  var hi = _hi;

  this._click = function(e) {
    aclick.call(o,e);
  };

  this._update = function() {
    aupdate.call(o);
  };

  this._hide = function(c) {
    hi.call(o,c);
  };
}

function Barchitect(nruler) {
  var _index = []; //array of widgets
  var _length = 0;
  var _ruler = nruler; //the page size div

  this.addWidget = function(io,jc,iu,hi) {
  	_index.push(new Widget(io,jc,iu,hi));

  	_length+=1;
	};

  this.update = function() {
    if(window.innerWidth>960) {
      $(_ruler).css({width:960,left:((window.innerWidth-960)/2)});
    } else $(_ruler).css({width:window.innerWidth,left:0});

		for(var i = 0; i<_length; i++) {
			_index[i]._update();
		}
  };

  this._click = function(e) {
		for(var i = 0; i<_length; i++) {
			_index[i]._click(e);
		}
  };

  this.changestate = function(c) {
		for(var i = 0; i<_length; i++) {
			_index[i]._hide(c);
		}
  };
  //TODO:Add a click() function that traverses 2d space
}
