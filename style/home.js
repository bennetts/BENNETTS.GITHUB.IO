var barcher = new Barchitect("#rule");
var sky = new bsky();

	var DemoButtonClickedOn = function() {
		$(":root").css({"--runDemo": 1});
	};

	var DemoButtonClickedAgain = function() {
		$(":root").css({"--runDemo": 2});
	};

	var DemoButtonClickedOff = function() {
		$(":root").css({"--runDemo": 0});
	};

	var GhubButtonClickedOn = function() {
		document.getElementById("github").style.display = "block";
	};

	var GhubButtonClickedOff = function() {
		document.getElementById("github").style.display = "none";
	};

var bnavbar = new Navbar("#wsbnav", "#wsselb", "#rule", "#wsright");
		bnavbar._addbutton("#wsbhome");
		bnavbar._addbutton("#wsbwad");
		bnavbar._addbutton("#wsbghub", GhubButtonClickedOn, GhubButtonClickedOff);
		bnavbar._addbutton("#wsbdemo", DemoButtonClickedOn, DemoButtonClickedOff,DemoButtonClickedAgain);


var blogo = new BaseWidget("#blogo", "#rule");
var babout = new BaseWidget("#wsfoot", "#rule");
var bDEMOCOVER = new BaseWidget("#democover", "#rule");
var bList = new BaseWidget("#github", "#rule");

blogo.navtop = function() {
	return 50;
};

babout.navtop = function() {
	return $("#rule").height()-$("#wsfoot").height()-50;
};


bDEMOCOVER.navtop = function() {
	return $("#rule").height()-$("#wsfoot").height()-50;
};

bList.navtop = function() {
	return $("#wsbnav").height();
};


barcher.addWidget(blogo, blogo._click, blogo._update);
barcher.addWidget(bnavbar, bnavbar._click, bnavbar._update);
barcher.addWidget(babout, babout._click, babout._update);
barcher.addWidget(bList, bList._click, bList._update);
barcher.addWidget(bDEMOCOVER, bDEMOCOVER._click, bDEMOCOVER._update);


/*88888888888888888888888888888*/

function windowChange() {

	barcher.update();

	sky._updateScreenSize();

};

$(document).ready(function()
{
	bnavbar.Ready();

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
