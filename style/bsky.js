function bsky() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 10000);

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

    var cube = new THREE.Mesh(geometry, cubeMaterials);


    this.bcreate = function(){
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

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