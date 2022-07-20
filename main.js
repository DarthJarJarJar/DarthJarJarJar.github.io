import '/style.css'
import * as THREE from 'three';
import {OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);

renderer.render(scene, camera)
const jinTexture = new THREE.TextureLoader().load('/jinwide.png')

const jin = new THREE.Mesh(
  new THREE.TorusGeometry(10,3,16,100),
  new THREE.MeshBasicMaterial({map:jinTexture})
);

scene.add(jin)

const jinCube = new THREE.Mesh(
  new THREE.SphereGeometry(3,32,32),
  new THREE.MeshBasicMaterial({map:jinTexture})
)
scene.add(jinCube)


const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5,5,5);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);
const controls = new OrbitControls(camera, renderer.domElement)



function animate() {
  requestAnimationFrame(animate);
  jin.rotation.x += 0.01;
  jin.rotation.y += 0.005;
  jin.rotation.z += 0.01;

  jinCube.rotation.y += 0.1;

  renderer.render(scene, camera)
  controls.update()
}
animate()