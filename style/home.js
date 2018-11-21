
///////////////////////////////// \///////////////////////////////\
//////////////////////////////// | \/\__///////////////////////////\
///////////////////////////////\ \¯¯\/\ \///////////////////////////\
////////////////////////////////\ \   /\ \_____//////////////////////\
///////////////////////////////| | |   \\ \__  |_/////////////////////\
/////////////////////////////// \  /_/\_\\___|___|//BennettS.github.io/\




















var bnavbar = new Navbar("#wsbnav", "#wsselb", "#rule", "#wsright");
	bnavbar._addbutton("#wsbhome");
	bnavbar._addbutton("#wsbwad");
	bnavbar._addbutton("#wsbghub");

var blogo = new BaseWidget("#blogo", "#rule");
var babout = new BaseWidget("#wsfoot", "#rule");

blogo.navtop = function() {
	return 50;
};

babout.navtop = function() {
	return $("#rule").height()-$("#wsfoot").height()-50;
};


var barcher = new Barchitect("#rule");

barcher.addWidget(blogo, blogo._click, blogo._update);
barcher.addWidget(bnavbar, bnavbar._click, bnavbar._update);
barcher.addWidget(babout, babout._click, babout._update);

var sky = new bsky();

/*88888888888888888888888888888*/

function windowChange() {

	barcher.update();

	sky._updateScreenSize();

};

$(document).ready(function()
{

	$(document).on("click",function(e) {
		barcher._click(e);
	});

    sky.bcreate();
    sky.loop();


  $(document).mousemove(function(e) {
		bnavbar._mousemove(e);
		sky._updateMousePosition(e);
  });


	  /////////////////////////////////////////
	  //Update the Sky
	  /////////////////////////////////////////
    setInterval(function(){
		sky.loop(bnavbar.skyCurSelect()); 
	},50);

	windowChange();
});

$(window).resize(function () {
	windowChange();
});
