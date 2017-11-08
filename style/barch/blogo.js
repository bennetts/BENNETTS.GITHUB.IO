function BaseWidget(nname, nruler) {
    ////////////////////////////////////
    //////////////////////////////////////
    var _name = nname;
    var L_ruler = nruler;
    var _Lruleroffset = 0;


    //Define how far to the right you want the logo
    this.navleft = function() {
        return _Lruleroffset.left;
    };

    //define how far down you want the logo
    this.navtop = function() {
        return 300;
    };

    this.navwidth = function() {
        return $(_name).width();
    };

    this.navheight = function() {
        return $(_name).height();
    };
    //////////////////////////////////////
    ////////////////////////////////////

    var _left = 0;
    var _top = 0;
    var _width = 0;
    var _height = 0;

    this._update = function() {
        _Lruleroffset = $(L_ruler).offset();
        _left = this.navleft();
        _top = this.navtop();
        _width = this.navwidth();
        _height = this.navheight();
        $(_name).css({left:_left,top:_top,width:_width,height:_height});
    };

    this._click = function(e) {

    };
}
