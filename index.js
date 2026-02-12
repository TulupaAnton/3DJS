import * as THREE from 'three'

// SCENE
const scene = new THREE.Scene()

//CAMERA
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
)
camera.position.z = 5

// RENDER
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const texture = new THREE.TextureLoader().load('img/grass.jpg')
const textureMaterial = new THREE.MeshBasicMaterial({ map: texture })

// Создаиние различніх фигур

// const material = new THREE.MeshBasicMaterial({ color: 'red' })
const geometry = new THREE.BoxGeometry()
const cube = new THREE.Mesh(geometry, textureMaterial)
cube.position.set(-3, 0, 0)
scene.add(cube)

//СФЕРА

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 6, 6),
  new THREE.MeshPhongMaterial({
    color: 'blue',
    emissive: 'white',
    shininess: 100
  })
)
sphere.position.set(2, 0, 0)
scene.add(sphere)
// Donat

const torus = new THREE.Mesh(
  new THREE.TorusGeometry(0.7, 0.2, 16, 100),
  new THREE.MeshBasicMaterial({ color: 'blue' })
)
torus.position.set(2, 2, 1)
scene.add(torus)

//! TEXTURE
// const texture = new THREE.TextureLoader().load('img/grass.jpg')
// const textureMaterial = new THREE.MeshBasicMaterial({ map: texture })

const plane = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), textureMaterial)
plane.position.set(-2, 2, 0)
scene.add(plane)

//Infinity render
function animate () {
  requestAnimationFrame(animate)

  sphere.rotation.x += 0.01
  sphere.rotation.y += 0.01

  torus.rotation.x += 0.01
  torus.rotation.y += 0.01

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  renderer.render(scene, camera)
}
animate()
