function BaseWidget(nname, nruler) {
    ////////////////////////////////////
    //////////////////////////////////////
    var _Lruleroffset = 0;


    //Define how far to the right you want the logo
    this.navleft = function() {
        return _Lruleroffset.left;
    };

    //define how far down you want the logo
    this.navtop = function() {
        return 300;
    };
    //////////////////////////////////////
    ////////////////////////////////////

    var _name = nname;
    var L_ruler = nruler;
    var _left = 0;
    var _top = 0;

    this._update = function() {
        _Lruleroffset = $(L_ruler).offset();
        _left = this.navleft();
        _top = this.navtop();
        $(_name).css({left:_left,top:_top});
    };

    this._click = function(e) {

    };
}