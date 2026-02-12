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

//Material
const material = new THREE.MeshBasicMaterial({ color: 'red' })

const geometry = new THREE.BoxGeometry()

// Add cube
const cube = new THREE.Mesh(geometry, material)

scene.add(cube)

//Infinity render
function animate () {
  requestAnimationFrame(animate)

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  renderer.render(scene, camera)
}
animate()
