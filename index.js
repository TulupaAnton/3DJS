import * as THREE from 'three'

// SCENE
const scene = new THREE.Scene()
//? light

// const ambientLight = new THREE.AmbientLight('white', 0.5)
// scene.add(ambientLight)
//!
// const dirLight = new THREE.DirectionalLight('white', 1)
// dirLight.position.set(5, 5, 5)
// scene.add(dirLight)

//!

// const pointLight = new THREE.PointLight('white', 10, 200)
// pointLight.position.set(0.5, 1, 1)
// scene.add(pointLight)

// const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.5)
// scene.add(pointLightHelper)

//!
const spotLight = new THREE.SpotLight('white', 1)
spotLight.position.set(1, 1, 1)
scene.add(spotLight)

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

// const texture = new THREE.TextureLoader().load('img/grass.jpg')
// const textureMaterial = new THREE.MeshBasicMaterial({ map: texture })

// Создаиние различніх фигур

const material = new THREE.MeshStandardMaterial({ color: 'red' })
const geometry = new THREE.BoxGeometry()
const cube = new THREE.Mesh(geometry, material)
cube.position.set(0, 0, 0)
scene.add(cube)

//Infinity render
function animate () {
  requestAnimationFrame(animate)

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  renderer.render(scene, camera)
}
animate()
