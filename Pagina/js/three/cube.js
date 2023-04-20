

var scene3d = document.getElementById("cube3d");
var CANVAS_WIDTH = scene3d.offsetWidth;
var CANVAS_HEIGHT = scene3d.offsetHeight;

// SCENE

scene = new THREE.Scene();

// CAMERA 

camera = new THREE.PerspectiveCamera(45, CANVAS_WIDTH / CANVAS_HEIGHT, 0.1, 100);
camera.position.x = 17;
camera.position.y = 10;
camera.position.z = 13;
camera.lookAt(scene.position);

///REnder
renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x000, 1.0);
renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);



// FINISH SCENE SETUP

// document.body.appendChild(scene3d.domElement);
scene3d.appendChild(renderer.domElement);
//renderer.render(scene, camera);
var geometry2 = new THREE.BoxGeometry( 1, 1, 1 );
var material2 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube2 = new THREE.Mesh( geometry2, material2 );
scene.add( cube2 );

function animate() {
	requestAnimationFrame( animate );

	cube2.rotation.x += 0.01;
	cube2.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();
