function bsky() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(155, window.innerWidth / window.innerHeight, 0.1, 10000);

    var renderer = new THREE.WebGLRenderer();

    var geometry = new THREE.CubeGeometry(3000, 3000, 3000);

    var cubeMaterials = [
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
    var circmaterial = new THREE.MeshBasicMaterial( {color: 0x000000 } );
    var sphere = new THREE.Mesh( circgeometry, circmaterial );
    scene.add( sphere );

    var cube = new THREE.Mesh(geometry, cubeMaterials);


    this.bcreate = function(){
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
            cube.rotation.z += 0.3;

        window.addEventListener('resize', function () {
            var width = window.innerWidth;
            var height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        });

        scene.add(cube);

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

            camera.fov = 150 + Math.min(19, 3*(_EffectDiameter/2)/_mouseDistance);
      } else {

              camera.fov = 150;
      }


      camera.updateProjectionMatrix();
    };

    var update = function () {
        cube.rotation.y += 0.0015;
    };

    var render = function () {
        renderer.render(scene, camera);

    };

    this.loop = function () {
        update();
        render();
    };
};
