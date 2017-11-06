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

var bnavbar = new navbar("#wsnav", "#wsselb", "#rule", "#wsnvspn", "#wsfbody");
		bnavbar._addbutton("#wsbhome");
		bnavbar._addbutton("#wsbwad");
		bnavbar._addbutton("#wsbghub");


/*88888888888888888888888888888*/

function windowChange() {
	navleft = 0;
 	navtop = 100;

	bnavbar._update();

	pageheight = $("#rule").height();
	pagewidth = $("#rule").width();

	measure = (pageheight-100);
	$("#wsfoot").css({top:measure});
	$("#wsffoot").css({top:measure});

	measure = ((pagewidth-500)/2);
    measure -=300;
    $("#blogo").css({left:measure});

	measure = $("#wsnav").height()+50;
    $("#blogo").css({top:measure-50});

	measure = ((pagewidth-400)/2)+$("#wsnvspn").width()+24;

	alert($("#test").width());

	/*   NAV STUFF TO BE CONTINUED  */
  nbxl = measure;
	nbxr = (((pagewidth-400)/2)+384);



	// Position the Nav bar correctly
	measure = $("#wsfoot").height();


};



$(document).ready(function()
{

	$(document).on("click","#wsnav",function(e) {
		tmeas = (e.pageX-nbxl)/$("#wsbhome").width();
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
					bnavbar._draw(nmodn);
					noob = 1;
      } else if(noob){
					nmeas = nbxl+(96*nselect);
					$("#wsselb").stop().animate({left:nmeas},0,function(){});
					bnavbar._draw(nselect);
					noob=0;
      }
  });

	windowChange();
});

$(window).resize(function () {
	windowChange();
});
