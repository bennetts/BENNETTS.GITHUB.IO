var bnavbar = new Navbar("#wsbnav", "#wsselb", "#rule");
	bnavbar._addbutton("#wsbhome");
	bnavbar._addbutton("#wsbwad");
	bnavbar._addbutton("#wsbghub");

var barcher = new Barchitect("#rule");

var bnav_dimensions = new Dimensions(0,0,0,0);
		barcher.addWidget(bnav_dimensions, bnavbar, bnavbar._click, bnavbar._update);



/*88888888888888888888888888888*/

function windowChange() {

	bnavbar._update();

}
$(document).ready(function()
{

	$(document).on("click",function(e) {
		bnavbar._click(e);
	});

  $(document).mousemove(function(e) {
		bnavbar._mousemove(e);
  });

	windowChange();
});

$(window).resize(function () {
	windowChange();
});
