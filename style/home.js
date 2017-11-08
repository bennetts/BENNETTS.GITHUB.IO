var bnavbar = new Navbar("#wsbnav", "#wsselb", "#rule");
	bnavbar._addbutton("#wsbhome");
	bnavbar._addbutton("#wsbwad");
	bnavbar._addbutton("#wsbghub");

var blogo = new BaseWidget("#blogo", "#rule");
var babout = new BaseWidget("#wsfoot", "#rule");
var bhome = new BaseWidget("#home", "#rule");
var bfield = new BaseWidget("#wsfield", "#rule");

bhome.navleft = function() {
	return $("#rule").offset().left+40;
};

bhome.navtop = function() {
	return $("#blogo").offset().top+150;
};

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
	return $("#blogo").offset().top+120;
};

bfield.navwidth = function() {
	return $("#rule").width();
};

bfield.navheight = function() {
	var _i = $("#rule").height();
	var _j = $("#wsfoot").height();
	var _k = $("#blogo").offset().top;
	return (_i-_j-(_k+190));
};


var barcher = new Barchitect("#rule");
		barcher.addWidget(blogo, blogo._click, blogo._update);
		barcher.addWidget(bnavbar, bnavbar._click, bnavbar._update);
		barcher.addWidget(babout, babout._click, babout._update);
		barcher.addWidget(bhome, bhome._click, bhome._update);
		barcher.addWidget(bfield, bfield._click, bfield._update);

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
