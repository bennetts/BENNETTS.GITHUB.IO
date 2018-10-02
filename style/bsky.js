function bsky() {
    
/*
'`'\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    Render the Galaxy
'``///////////////////////////////////////////////////////////////
*/

    var GalaxyScene = new THREE.Scene();
    var ViewPort = new THREE.PerspectiveCamera(155, window.innerWidth / window.innerHeight, 0.1, 10000);

    var renderer = new THREE.WebGLRenderer();

    var GalaxyCubeGeometry = new THREE.CubeGeometry(3000, 3000, 3000);

    var GalaxyCubeMaterial = [
        new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load("img/skybox/left.jpg"),
            side: THREE.DoubleSide
        }),
        new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load("img/skybox/front.jpg"),
            side: THREE.DoubleSide
        }),
        new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load("img/skybox/top.jpg"),
            side: THREE.DoubleSide
        }),
        new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load("img/skybox/bottom.jpg"),
            side: THREE.DoubleSide
        }),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("img/skybox/r1.jpg"), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("img/skybox/r2.jpg"), side: THREE.DoubleSide})
    ];

    var circgeometry = new THREE.SphereGeometry( 5, 32, 32 );
    var circmaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    var GalaxySphere = new THREE.Mesh( circgeometry, circmaterial );

    var GalaxyCube = new THREE.Mesh(GalaxyCubeGeometry, GalaxyCubeMaterial);

/*
'`'\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
   Render the Menu
'``///////////////////////////////////////////////////////////////
*/


    var MenuScene = new THREE.Scene();

    this.bcreate = function(){
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        GalaxyCube.rotation.z += 0.3;

        window.addEventListener('resize', function () {
            var width = window.innerWidth;
            var height = window.innerHeight;
            renderer.setSize(width, height);
            ViewPort.aspect = width / height;
            ViewPort.updateProjectionMatrix();
        });

        GalaxyScene.add( GalaxySphere );
        GalaxyScene.add(  GalaxyCube  );

    };

    var o;


    this._updateScreenSize = function () {
        _EffectDiameter = window.innerWidth/7;
    };

        var _EffectRadius;
        var _mouseDistance;

    this._updateMousePosition = function (e) {
      mousex = e.pageX;
      mousey = e.pageY;

      if((mousex>(window.innerWidth/2-(_EffectDiameter/2))&&mousex<(window.innerWidth/2+(_EffectDiameter/2)))&&(mousey>(window.innerHeight/2-(_EffectDiameter/2))&&mousey<(window.innerHeight/2+(_EffectDiameter/2))))
      {
            _mouseDistance = Math.sqrt(Math.pow((mousex-(window.innerWidth/2)),2)+Math.pow((mousey-(window.innerHeight/2)),2));

            ViewPort.fov = 150 + Math.min(19, 3*(_EffectDiameter/2)/_mouseDistance);
      } else {

              ViewPort.fov = 150;
      }


      ViewPort.updateProjectionMatrix();
    };

    var ThreejsGalaxyUpdate = function () {
        GalaxyCube.rotation.y += 0.0015;
    };
    
    var ThreejsGalaxyRender = function (curselect) {
        switch(curselect){
            case 0:
                renderer.render(GalaxyScene, ViewPort);
                break;
            case 1:
                renderer.render(GalaxyScene, ViewPort);
                break;
            case 2:
                renderer.render(GalaxyScene, ViewPort);
                break;
            default:
                renderer.render(GalaxyScene, ViewPort);
                break;
        }
    };

    this.loop = function (curselect) {
         ThreejsGalaxyUpdate();
         ThreejsGalaxyRender(curselect);
    };
};
