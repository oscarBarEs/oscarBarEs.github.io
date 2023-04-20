

if(!sceneEarth)
{
    var sceneEarth = new THREE.Scene();
}

var cameraEarth = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var rendererEarth = new THREE.WebGLRenderer();
rendererEarth.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( rendererEarth.domElement );

var geometry = new THREE.SphereGeometry( 15, 32, 16 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var sphere = new THREE.Mesh( geometry, material );

sceneEarth.add( sphere );
sphere.position.set(0,0,0);
/*
var geometry2 = new THREE.SphereGeometry( 17, 34, 18 );
var material2 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
var sphere2 = new THREE.Mesh( geometry2, material2 );
sceneEarth.add( sphere2 );
*/
cameraEarth.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	sphere.rotation.x += 0.02;
	sphere.rotation.y += 0.02;

    //sphere2.rotation.x += 0.01;
	//sphere2.rotation.y += 0.01;

	rendererEarth.render( sceneEarth, cameraEarth );
}

animate();