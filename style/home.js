var bnavbar = new Navbar("#wsbnav", "#wsselb", "#rule");
	bnavbar._addbutton("#wsbhome");
	bnavbar._addbutton("#wsbwad");
	bnavbar._addbutton("#wsbghub");


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
