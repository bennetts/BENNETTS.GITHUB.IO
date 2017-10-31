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
	
	measure = ((pagewidth-800)/2);
	$("#wsfbody").css({left:measure});
	
	measure = $("#wsnav").height()+50;
	$("#wsselb").css({top:measure});
	
	measure = ((pagewidth-800)/2)+$("#wsnvspn").width()+74;
	
	/*   NAV STUFF TO BE CONTINUED  */
	nbxr = (((pagewidth-800)/2)+683);
	nbxl = measure;
	
	
	$("#wsselb").css({left:measure});
	$("#wsselt").css({left:measure});
	
	// Position the Nav bar correctly
	measure = $("#wsfoot").height();
	tmeas = ((pageheight-measure)/2);
	measure = (tmeas-($("#wsnav").height()/2));
	$("#wsnav").css({top:measure});
	tmeas = measure-10;
	$("#wsselt").css({top:tmeas});
	measure = tmeas+$("#wsnav").height()+10;
	$("#wsselb").css({top:measure});
	
};

$(document).ready(function()
{
  $(document).mousemove(function(e)
  {
      measure = e.pageX;
      if(measure>nbxl && measure<nbxr)
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
          $("#wsselb").stop().animate({left:measure},250,function(){});
          $("#wsselt").stop().animate({left:measure},250,function(){});
          
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
          $("#wsselb").stop().animate({left:nbxl},500,function(){});
          $("#wsselt").stop().animate({left:nbxl},500,function(){});
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