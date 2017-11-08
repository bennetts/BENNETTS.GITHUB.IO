function Dimensions(_x,_y,_w,_h,_du){
  var x = _x;
  var y = _y;
  var w = _w;
  var h = _h;
  var du = _du;

  this.update = function() {
    this.apply(du,this);
  };
}
