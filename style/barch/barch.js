
function Widget(_d, _o, _cl, _up) {
  var d = _d;
  var o = _o;
  var aclick = _cl;
  var aupdate = _up;

  this._click = function(o, e) {
    o.apply(aclick,e);
  };

  this.update = function(o) {
    o.apply(aupdate, null);
  };
}

function Barchitect(nruler) {
  var _index = []; //array of widgets
  var _length = 0;

  var _ruler = nruler; //the page size div
  var _curselect = 0;  //which button is currently selected

  var _container = new Dimensions(0,0,0,0);

  this.addWidget = function(id,io,jc,iu) {
  	_index.push(new Widget(id,io,jc,iu));

  	_length+=1;
	};

  this.update = function() {
		for(var i = 0; i<_length; i++) {
			_index[i].update(_index[i]);
		}
  }

  this._click = function(e) {
		for(var i = 0; i<_length; i++) {
			_index[i]._click(_index[i], e);
		}
  }
  //TODO:Add a click() function that traverses 2d space
}
