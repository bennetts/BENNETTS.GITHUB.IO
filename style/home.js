var pagewidth = 1;
var pageheight= 1;
var measure = 1;
var tmeas = 1;

/* Vars for nav responsiveness */
var nbxl = 0;
var nbxr = 0;

var nbsl = 0;
var nbsr = 0;

var nbon = 1;
var nbcur= 0;

var navtotallinks = 2;

var nmod = 0;
var nmodn = 0;

var noob = 1; /* nav out of bounds */
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
	
	
	$("#wsselb").css({left:measure});
	
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
  $(document).mousemove(function(e)
  {
      measure = e.pageX;
      tmeas = e.pageY;
      if(measure>nbxl && measure<nbxr && tmeas<200 && tmeas>100)
      {
        if(nbon==1){
          
          nbon = 0;
        }
        if(nbon==0){
        tmeas = measure;
        tmeas-=nbxl;
        nmodn = Math.floor(tmeas/96);
        measure=(tmeas-(tmeas%96))+nbxl;
        if(nmodn!=nmod){
          $("#wsselb").stop().animate({left:measure},0,function(){});
          
          /**Link target change and image change for icons background**/
          
            if(nmodn==1){
                $("#wsbhome").css({backgroundPosition:'-62px -32px'});
                $("#wsbwad").css({backgroundPosition:'0px -32px'});
                $("#wsbghub").css({backgroundPosition:'-64px -32px'});
                nbscur=1;
                }
            
            else if(nmodn==0){
                $("#wsbhome").css({backgroundPosition:'0px -32px'});
                $("#wsbwad").css({backgroundPosition:'-64px -32px'});
                $("#wsbghub").css({backgroundPosition:'-64px -32px'});
            }

            else if(nmodn==2){
                $("#wsbhome").css({backgroundPosition:'-62px -32px'});
                $("#wsbwad").css({backgroundPosition:'-64px -32px'});
                $("#wsbghub").css({backgroundPosition:'0px -32px'});
            }
            
            else{
                $("#wsbhome").css({backgroundPosition:'-62px -32px'});
                $("#wsbwad").css({backgroundPosition:'-64px -32px'});
                $("#wsbghub").css({backgroundPosition:'-64px -32px'});
                nbscur=0;
                }
            
            /** End of link target change and image change for icons background, the first link is changed when not in focus later in this script **/
          
          nmod=nmodn;
          }
        }noob = 1;
      } else if(noob){
          $("#wsselb").stop().animate({left:nbxl},0,function(){});
          $("#wsbhome").css({backgroundPosition:'0px -32px'});nbscur=0;
          $("#wsbwad").css({backgroundPosition:'-64px -32px'});
          $("#wsbghub").css({backgroundPosition:'-64px -32px'});
          noob=0;
      }
  });

	windowChange();
});

$(window).resize(function () { 
	windowChange();
});