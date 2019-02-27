function DemoScene(DemoCamera,DCU) {
    //////////////////^/\/\¯\¯\--.
    // call AFTER initiating 3js | allocates memory! | Starts running the demonstration
        
        var DemoScene = new THREE.Scene();
        var DemoSphereMemory = [];
        var DemoSphereGroup = new THREE.Object3D();
        var DemoSphereGroupController = new THREE.Object3D();
        var DemoLights = [];
        var elapsedTime = 0;
        var TotalSpheres = 1024;
        var DemoRadius =8;
        var S1Done = false;
        var S7Done = false;
        var FSA = 0;
        var step = 0;
        var i = 0;

    this.InitiateDemo = function() {
                DemoLights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
                DemoLights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
                DemoLights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

                DemoLights[ 0 ].position.set( 0, 200, 0 );
                DemoLights[ 1 ].position.set( 100, 200, 100 );
                DemoLights[ 2 ].position.set( - 100, - 200, - 100 );

                DemoScene.add( DemoLights[ 0 ] );
                DemoScene.add( DemoLights[ 1 ] );
                DemoScene.add( DemoLights[ 2 ] );

            var circmaterial = new THREE.MeshLambertMaterial( {color: 0x903090 } );
            var circgeometry = new THREE.SphereGeometry(3, 32, 32);


                for(i = 0; i < TotalSpheres; i++) {
                    var DemoSphereA = new THREE.Mesh( circgeometry, circmaterial );
                        DemoSphereMemory.push(DemoSphereA);
                        DemoSphereGroup.add(DemoSphereA);
                };

            DemoSphereGroupController.add(DemoSphereGroup);
            DemoScene.add( DemoSphereGroupController );
            setInterval(function () {
                elapsedTime+=0.1;
            }, 100);
    };


    var dy = 0;
    var dx = 0;
    var dz = 0;


    this.StageOne = function() {
        DCU.call(DemoCamera);
        if(S1Done==false){
            for(i = 0; i < DemoSphereMemory.length; i++) {
                    DemoSphereMemory[i].position.z = dz;
                    DemoSphereMemory[i].position.x = dx;
                    DemoSphereMemory[i].position.y = dy;
                };
        };
        S1Done=true;
    };

    this.StageTwo = function() {
        step = (elapsedTime-3)/3;
        //Change Positions to respective indexed values on a circle to form a torus
        for(i = 0; i < TotalSpheres; i++) {

            dy = DemoRadius*Math.sin(step*i*((Math.PI*2))/TotalSpheres);
            dx = -DemoRadius+DemoRadius*Math.cos(step*i*((Math.PI*2))/TotalSpheres);


            DemoSphereMemory[i].position.z = dy;
            DemoSphereMemory[i].position.x = dx;
        }
        DemoSphereGroup.position.x = DemoRadius*step;
    };

    
    var N = Math.sqrt(TotalSpheres);
    var S3Done = false;
    var DemoSphereGroupSMem = [];
    var DemoSphereGroupSAtomic = [];
    this.StageThree = function() {
        if(S3Done==false) {
            for(i=0; i<N; i++)
            {
                DemoSphereGroupSAtomic.push(new THREE.Object3D());
                DemoSphereGroupSMem.push(new THREE.Object3D());
                for(j=0;j<N;j++)
                {
                    if((N*j+i)<DemoSphereMemory.length)
                    {
                        DemoSphereGroupSAtomic[i].add(DemoSphereMemory[i+(N*j)]);
                    };
                };

                DemoSphereGroupSAtomic[i].position.x = DemoRadius;

                DemoSphereGroupSMem[i].add(DemoSphereGroupSAtomic[i]);
                DemoScene.add(DemoSphereGroupSMem[i]);
            };
            S3Done=true;
        };

        step = (elapsedTime-6)/2;
        
        for(i=0; i<N; i++)
        {
            DemoSphereGroupSMem[i].rotation.z = i*step;
        };
    };

    this.StageFour = function() {

        step = (elapsedTime-8)/3;
        DemoSphereGroupController.rotation.z = Math.PI/3*step;
    };

    this.StageFive = function() {

        step = 1/(elapsedTime-8);
            for(i = 0; i < DemoSphereMemory.length; i++) {
                DemoSphereMemory[i].scale.set(.1*step,.1*step,.1*step);
            };
            var step2 = (elapsedTime-8)/3;
            if(step2<1){
                FSA = 45*step2;
            };
            DemoCamera.fov=90-FSA;
            DemoCamera.updateProjectionMatrix();
    };

    this.StageSix = function() {
        DemoCamera.fov=45;
        DemoCamera.updateProjectionMatrix();
    };

    this.StageSeven = function() {
        DemoCamera.fov=45;
        DemoCamera.updateProjectionMatrix();
        if(S7Done==false){
        };
        S7Done=true;
    };

    this.FinalStage = function() {
        for(i=0;i<N;i++){
            DemoSphereGroupSMem[i].rotation.z+=1;
        }
        DemoCamera.fov=45;
        DemoCamera.updateProjectionMatrix();
    };






    










        /*******************************DEMO
        SCENE
        
        
        
        */
    this.RenderDemoScene = function() {
            DCU.call(DemoCamera);

            if(elapsedTime < 3){
                this.StageOne();
            }else if(elapsedTime <= 6){
                this.StageTwo();
            }else if(elapsedTime <=8){
                this.StageThree();
            }else if(elapsedTime<=11){
                this.StageFive();
            }else {
                this.FinalStage();
            }

        return DemoScene;
    };
       /***
        * 
        * 
        * 
        * YA
        * 
        * 
        */
};

function bsky() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(150, window.innerWidth / window.innerHeight, 0.1, 10000);
    var renderer = new THREE.WebGLRenderer();

    var CamControl = new THREE.OrbitControls(camera,renderer.domElement);
    CamControl.enabled=false;
    CamControl.enableZoom=false;
    CamControl.autoRotateSpeed = 20;
    CamControl.maxDistance = 30;
    CamControl.minPolarAngle = Math.PI;
    CamControl.screenSpacePanning = true;
    var Demo = new DemoScene(camera,CamControl.update);

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
            cube.rotation.z += 0.5;
            var width = window.innerWidth;
            var height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        });

        CamControl.autoRotate = true;
        scene.add(cube);
        Demo.InitiateDemo();

    };

    var o;


    this._updateScreenSize = function () {
        _EffectDiameter = window.innerWidth/7;
    };

        var _EffectRadius;
        var _mouseDistance;

    this._updateMousePosition = function (e) {
     /* mousex = e.pageX;
      mousey = e.pageY;

      if((mousex>(window.innerWidth/2-(_EffectDiameter/2))&&mousex<(window.innerWidth/2+(_EffectDiameter/2)))&&(mousey>(window.innerHeight/2-(_EffectDiameter/2))&&mousey<(window.innerHeight/2+(_EffectDiameter/2))))
      {
            camera.fov = 150;
      } else {

            camera.fov = 150;
      }


      camera.updateProjectionMatrix();*/
    };

    var update = function () {
        cube.rotation.y += 0.0015;
    };

    var render = function () {
        renderer.autoClear = true;
        camera.position.z = 0;
        camera.position.y = 0;
        camera.rotation.x = 0;
        camera.rotation.y = 0;
        camera.rotation.z = 0;
        camera.fov = 150;
        camera.updateProjectionMatrix();
        renderer.render(scene, camera);


        renderer.autoClear = false;
        camera.fov = 90;
        camera.position.z = 10;
        camera.position.y = 25;
        camera.rotation.x = -45;
        camera.updateProjectionMatrix();
        renderer.render(Demo.RenderDemoScene(), camera);


    };

    this.loop = function () {
        update();
        render();
    };
};
