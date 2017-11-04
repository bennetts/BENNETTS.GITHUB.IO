var pagewidth = 1;
var pageheight= 1;
var measure = 1;
var tmeas = 1;

/* Vars for nav responsiveness */
var nbxl = 0;
var nbxr = 0;

var nbsl = 0;
var nbsr = 0;

var nbcur= 0;

var navtotallinks = 2;

var nmod = 0;
var nmodn = 0;

var noob = 1; /* nav out of bounds */

var nselect = 0;
var nmeas;


function button(name, index) {
	  this.name = name;
		this.index = index;
	  this.draw = function(hpos) {
			if(index==hpos){
			$(this.name).css({backgroundPosition:'0px -32px'});nbscur=0;
			} else {
				$(this.name).css({backgroundPosition:'-64px -32px'});
			}
  };
};

var bhome = new button("#wsbhome", 0);
var bimg = new button("#wsbwad", 1);
var bhub = new button("#wsbghub", 2);

/*88888888888888888888888888888*/

function windowChange() {
	pageheight = $("#rule").height();
	pagewidth = $("#rule").width();

	measure = (pageheight-100);
	$("#wsfoot").css({top:measure});
	$("#wsffoot").css({top:measure});

	measure = ((pagewidth-500)/2);
	$("#wsfbody").css({left:measure})

    measure -=175;
    $("#blogo").css({left:measure});

	measure = $("#wsnav").height()+50;
    $("#blogo").css({top:measure-50});
	$("#wsselb").css({top:measure});

	measure = ((pagewidth-400)/2)+$("#wsnvspn").width()+24;

	/*   NAV STUFF TO BE CONTINUED  */
    nbxl = measure;
	nbxr = (((pagewidth-400)/2)+384);


	nmeas = nbxl+(96*nselect);
	$("#wsselb").css({left:nmeas});

	// Position the Nav bar correctly
	measure = $("#wsfoot").height();
	tmeas = 100;
	measure = (tmeas-($("#wsnav").height()/2)+50);
	$("#wsnav").css({top:100});
	tmeas = measure-10;
	measure = tmeas+$("#wsnav").height()+10;
	$("#wsselb").css({top:measure});


};



$(document).ready(function()
{

	$(document).on("click","#wsnav",function(e) {
		tmeas = (e.pageX-nbxl)/96;
		nselect = Math.floor(tmeas);
		if(nselect>2){nselect=2;}
	});

  $(document).mousemove(function(e)
  {
      measure = e.pageX;
      tmeas = e.pageY;
      if(measure>nbxl && measure<nbxr && tmeas<200 && tmeas>100)
      {
        tmeas = measure-nbxl;
        nmodn = Math.floor(tmeas/96);
				if(nmodn>2){nmodn=2;}
					measure = nbxl+(96*nmodn);
          $("#wsselb").stop().animate({left:measure},0,function(){});
					bhome.draw(nmodn);
					bimg.draw(nmodn);
					bhub.draw(nmodn);
					noob = 1;
      } else if(noob){
					nmeas = nbxl+(96*nselect);
					$("#wsselb").stop().animate({left:nmeas},0,function(){});
					bhome.draw(nselect);
					bimg.draw(nselect);
					bhub.draw(nselect);
					noob=0;
      }
  });

	windowChange();
});

$(window).resize(function () {
	windowChange();
});
