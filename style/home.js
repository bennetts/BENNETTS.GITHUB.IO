var bnavbar = new Navbar("#wsbnav", "#wsselb", "#rule", "#wsright");
	bnavbar._addbutton("#wsbhome");
	bnavbar._addbutton("#wsbwad");
	bnavbar._addbutton("#wsbghub");

var blogo = new BaseWidget("#blogo", "#rule");
var babout = new BaseWidget("#wsfoot", "#rule");

//DELET
var bDEMOCOVER = new BaseWidget("#democover", "#rule");

blogo.navtop = function() {
	return 50;
};

babout.navtop = function() {
	return $("#rule").height()-$("#wsfoot").height()-50;
};

bDEMOCOVER.navtop = function() {
	return $("#rule").height()-$("#wsfoot").height()-50;
};


var barcher = new Barchitect("#rule");

barcher.addWidget(blogo, blogo._click, blogo._update);
barcher.addWidget(bnavbar, bnavbar._click, bnavbar._update);
barcher.addWidget(babout, babout._click, babout._update);
barcher.addWidget(bDEMOCOVER, bDEMOCOVER._click, bDEMOCOVER._update);

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

    setInterval(function(){sky.loop()},50);

	windowChange();
});

$(window).resize(function () {
	windowChange();
});
