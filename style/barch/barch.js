
function Widget(_o, _cl, _up) {
  var o = _o;
  var aclick = _cl;
  var aupdate = _up;

  this._click = function(e) {
    aclick.call(o,e);
  };

  this._update = function() {
    aupdate.call(o);
  };
}

function Barchitect(nruler) {
  var _index = []; //array of widgets
  var _length = 0;

  var _ruler = nruler; //the page size div
  var _curselect = 0;  //which button is currently selected


  this.addWidget = function(io,jc,iu) {
  	_index.push(new Widget(io,jc,iu));

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
  }
  //TODO:Add a click() function that traverses 2d space
}
