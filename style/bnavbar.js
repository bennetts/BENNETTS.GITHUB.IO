//Define how far to the right you want the navbar
function navleft(pwidth, nwidth) {
  return ((pwidth-nwidth)/2);
};

//define how far down you want the navbar
//
function navtop(pheight, nheight) {
  return 100;
};


function button(name, index) {
	  this.name = name;
		this.index = index;
	  this.draw = function(hpos) {
			if(index==hpos){
				$(this.name).css({backgroundPosition:'0px -32px'});nbscur=0;
			} else {
				$(this.name).css({backgroundPosition:'-64px -32px'});
			}
  }
};

function navbar(nname, ntrack, nruler, ntitlebar, ncapsule) {
	this._index = [];  //holds all button divs
	this._length = 0;  //number of buttons
  this._name = nname; //the navbar div
  this._track = ntrack; //the tracker div (that little thing under the navbar)
  this._capsule = ncapsule; //what holds everything that depends on the navbar's position

  this._nwidth = $(this._name).width();
  this._nheight = $(this._name).height();

  this._ruler = nruler; //the page size div
      this._pageheight = $(nruler).height();
      this._pagewidth = $(nruler).width();
  this._left = navleft(this._pagewidth, this._nwidth);
  this._top = navtop(this._pageheight, this._nheight);

  this._titlebar = ntitlebar; //the first li in the table
  this._curselect = 0;  //which button is currently selected

  this._i = 0;  //arbitrary variable for me to use while i program

	this._draw = function(selection) {
		for(i = 0; i<this._length; i++) {
			this._index[i].draw(selection);
      this._curselect = selection;
		}
	}

  //Run this every time the page updates
  this._update = function() {
    this._pageheight = $(nruler).height();
    this._pagewidth = $(nruler).width();


  	this._i = ((this._pagewidth-400)/2)+$(this._titlebar).width()+24;
      this._i = this._i+(96*this._curselect);
  	     $(this._track).css({left:this._i});

       	$(this._name).css({top:100});           //100 is the space between the top of the page and the navbar
      	this._i = $(this._name).height()+100;
       	$(this._track).css({top:this._i});


        /*
          todo: add mouseposition, whether or not to update navbar
        	   nmeas = this._i+(96*this._curselect); in home.js
        */

        this._i = ((this._pagewidth-500)/2);
        $(this._capsule).css({left:this._i});

  }

	this._addbutton = function(bname) {
		this._index.push(new button(bname, this._length));
		this._length+=1;
	}

  this._move = function(x,y) {
      /*
          x,y,bounds
          top:y
          left:x
          bounds:max page size
      */
  }
};
