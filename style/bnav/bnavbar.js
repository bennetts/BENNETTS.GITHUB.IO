function Button(name, index, _clickedOn = function(){}, _clickedOff = function(){}, _clickedAgain = function(){}) {
    var _name = name;
    var _index = index;
    var aclickedOn = _clickedOn;
    var aclickedOff = _clickedOff;
    var aclickedAgain = _clickedAgain;
    var clicked = true;
    var clickedAgainSwitch = false;

	  this.draw = function(hpos) {
			if(_index===hpos){
				$(_name).css({backgroundPosition:'0px -10px'});
		  } else {
				  $(_name).css({backgroundPosition:'-64px -10px'});
		    }
    };

    this.update = function(x,y, spacing) {
        $(_name).css({top:y});
				$(_name).css({left:(x+(spacing*(_index)))});
    };

    this.clickedOff = function() {
      if(clicked === true){
        clicked = false;
        aclickedOff.call();
      }
    };

    this.clickedOn = function() {
      if(clicked===false){
        clicked = true;
        aclickedOn.call();
      }
    };

    this.clickedAgain = function() {
      if(clickedAgainSwitch==false){
      aclickedAgain.call();
      clickedAgainSwitch = true;
    } else {
      aclickedOn.call();
      clickedAgainSwitch = false;
    }
    };

};


function Navbar(nname, ntrack, nruler, nright) {



  ////////////////////////////////////
    //////////////////////////////////////

        var _buttonspacing = 90;
        var _buttonwidth = 64;
        var _trackerwidth = 94;
        var _length = 0;  //number of buttons
        var _ruleroffset = 0;


              //Define how far to the right you want the navbar
              this.navleft = function(pwidth, nwidth) {
                  if(pwidth<960) {
                      return (pwidth-nwidth+(nwidth-((_length+1)*_buttonspacing)));
                  } else return (pwidth-nwidth+_ruleroffset.left);
              };

              //define how far down you want the navbar
              this.navtop = function() {
                return 50;
              };

        //////////////////////////////////////
    ////////////////////////////////////





  var _index = [];  //holds all button divs
  var _name = nname; //the navbar div
  var _track = ntrack; //the tracker div (that little thing under the navbar)
  var _bright = nright; //the thing on the bottom right of the navbar

  var _nwidth = 0;
  var _nheight = 0;

  var _ruler = nruler; //the page size div
  var _pageheight = 0;
  var _pagewidth = 0;
  var _left = 0;
  var _top = 0;

  var _curselect = 0;  //which button is currently selected

  this._findcenterleft = function() {
    return (this.navleft(_pagewidth, _nwidth)+16+(_nwidth-(_buttonspacing*_index.length))/2);
  };


	this._draw = function(selection) {
		for(var i = 0; i<_length; i++) {
			_index[i].draw(selection);
		}
	};

	this._addbutton = function(bname,clickedOnFunction,clickedOffFunction,clickedAgainFunction) {
    _index.push(new Button(bname, _length, clickedOnFunction, clickedOffFunction,clickedAgainFunction));
		_length+=1;
	};

	var _noob = 0;
	var _nmodn = 0;

  this._mousemove = function(e) {
        if(e.pageX>(this._findcenterleft()) && e.pageX<(this._findcenterleft()+(_buttonspacing*(_length))) && e.pageY<(_nheight+_top) && e.pageY>_top)
        {
            _nmodn = Math.floor((e.pageX-(this._findcenterleft()))/_buttonspacing);

              if(_nmodn>_length)    _nmodn=_length;

              $(_track).stop().animate({left:((this._findcenterleft())+(_buttonspacing*_nmodn)-((_trackerwidth-_buttonwidth)/2))},0,function(){});
              this._draw(_nmodn);
              _noob = 1;
        } else if(_noob){
            $(_track).stop().animate({left:((this._findcenterleft())+(_buttonspacing*_curselect)-((_trackerwidth-_buttonwidth)/2))},0,function(){});
            this._draw(_curselect);
            _noob=0;
        }
  };


  this.Ready = function(){
		for(var i = 0; i<_length; i++) {
      if(_curselect!=i){
        _index[i].clickedOff();
      }
		}
  };


  //Run this every time the page updates
  this._update = function() {
      this._draw(_curselect);

      _nwidth = $(_name).width();
      _nheight = $(_name).height();
      _ruleroffset = $(_ruler).offset();


      _pageheight = $(_ruler).height();
      _top = this.navtop();

      _pagewidth = $(_ruler).width();
      _left = this.navleft(_pagewidth, _nwidth);

      for(var i = 0; i<_length; i++) {
          _index[i].update(this._findcenterleft(), _top, _buttonspacing);
      }

      $(_bright).css({left:(_left+_nwidth-$(_bright).width()),top:(_top+_nheight),height:(_pageheight-50-_top-_nheight)});
      $(_name).css({left:_left,top:_top});

      $(_track).css({left: this._findcenterleft() + _buttonspacing * (_curselect) - ((_trackerwidth-_buttonwidth)/2), top:(_top+_nheight)});

  };

  var SelectionBuffer = _curselect;

  this._click = function(e) {
      if(e.pageX>=(this._findcenterleft()) && e.pageX<(this._findcenterleft()+(_buttonspacing*(_length+1))) && e.pageY<(_nheight+_top) && e.pageY>_top)
      {
        _curselect = Math.floor((e.pageX-this._findcenterleft())/_buttonspacing);
        if(_curselect>_length){_curselect=_length;}

        if(SelectionBuffer!=_curselect){
          _index[SelectionBuffer].clickedOff();
          _index[_curselect].clickedOn();
        } else if(SelectionBuffer==_curselect) {
          _index[_curselect].clickedAgain();
        }
        SelectionBuffer = _curselect;
      }
  };
};
