import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// SCENE
const scene = new THREE.Scene()
//? light

const ambientLight = new THREE.AmbientLight('white', 0.5)
scene.add(ambientLight)
//!
const dirLight = new THREE.DirectionalLight('white', 1)
dirLight.position.set(5, 5, 5)
scene.add(dirLight)

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
//!контроль над камерой
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.05
controls.screenSpacePanning = false
controls.minDistance = 2
controls.maxDistance = 20

// const texture = new THREE.TextureLoader().load('img/grass.jpg')
// const textureMaterial = new THREE.MeshBasicMaterial({ map: texture })

// Создаиние различніх фигур
const originMaterial = new THREE.MeshStandardMaterial({ color: 'red' })
const hilightMaterial = new THREE.MeshStandardMaterial({
  color: 'yellow',
  emissive: 'white',
  emissiveIntensity: 0.5
})
const material = new THREE.MeshStandardMaterial({ color: 'red' })
const geometry = new THREE.BoxGeometry()
const cube = new THREE.Mesh(geometry, originMaterial)
cube.position.set(0, 0, 0)
//scene.add(cube)

// LOAD
const loader = new GLTFLoader()
loader.load(
  'models/cartoon_car/scene.gltf',
  gltf => {
    const model = gltf.scene
    model.scale.set(1, 1, 1)
    model.position.set(1, 1, 1)
    scene.add(model)
  },
  xhr => {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
  },
  error => {
    console.error('Error' + error)
  }
)

// END LOAD

// GSAP
// gsap.to(cube.position, {
//   y: 2,
//   x: 1,
//   duration: 1,
//   ease: 'power1.inOut',
//   repeat: -1,
//   yoyo: true
// })

// END GSAP

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(),
  new THREE.MeshStandardMaterial({ color: 'green' })
)
sphere.position.x = 2
//scene.add(sphere)
//!

const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()

function onMouseMove (event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
}
window.addEventListener('mousemove', onMouseMove)

// Infinity render
function animate () {
  requestAnimationFrame(animate)

  raycaster.setFromCamera(mouse, camera)

  const intersects = raycaster.intersectObject(cube)

  if (intersects.length > 0) {
    // cube.material = hilightMaterial
  } else {
    // cube.material(originMaterial)
  }
  controls.update()
  renderer.setClearColor('lightblue')
  renderer.render(scene, camera)
}
animate()
