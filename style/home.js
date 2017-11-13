

var blogo = new BaseWidget("#blogo", "#rule");
var babout = new BaseWidget("#wsfoot", "#rule");
var bfield = new BaseWidget("#wsfield", "#rule");



babout.navleft = function() {
	return $("#rule").offset().left-20;
};

blogo.navtop = function() {
	return 50;
};

babout.navtop = function() {
	return $("#rule").height()-$("#wsfoot").height()-50;
};

bfield.navtop = function() {
	return 50+120;
};

bfield.navwidth = function() {
	return $("#rule").width()-10;
};

bfield.navheight = function() {
	var _i = $("#rule").height();
	var _j = $("#wsfoot").height();
	var _k = 75;
	return (_i-_j-(_k+190));
};


bfield._hide = function(c) {
	if(c===0)$("#wsfield").show();
	else $("#wsfield").hide();
};

blogo._hide = function(c) {
	if(c===1)$("#blogo").hide();
	else $("#blogo").show();
};

babout._hide = function(c) {
	if(c===1)$("#wsfoot").hide();
	else $("#wsfoot").show();
};

var barcher = new Barchitect("#rule");

var bnavbar = new Navbar("#wsbnav", "#wsselb", "#rule", barcher, barcher.changestate);
		bnavbar._addbutton("#wsbhome");
		bnavbar._addbutton("#wsbwad");
		bnavbar._addbutton("#wsbghub");

		barcher.addWidget(blogo, blogo._click, blogo._update, blogo._hide);
		barcher.addWidget(bnavbar, bnavbar._click, bnavbar._update, bnavbar._hide);
		barcher.addWidget(babout, babout._click, babout._update, babout._hide);
		barcher.addWidget(bfield, bfield._click, bfield._update, bfield._hide);

var sky = new bsky();

/*88888888888888888888888888888*/

function windowChange() {

	barcher.update();

}
$(document).ready(function()
{

	$(document).on("click",function(e) {
		barcher._click(e);
	});

  $(document).mousemove(function(e) {
		bnavbar._mousemove(e);
  });

    sky.bcreate();
    sky.loop();

    setInterval(function(){sky.loop()},50);

	windowChange();
});

$(window).resize(function () {
	windowChange();
});
