import { createRenderer } from './core/engine/createRenderer.js';
import { createScene } from './core/engine/createScene.js';
import { createCamera } from './core/engine/createCamera.js';
import { createInput } from './core/input/createInput.js';
import { createShip } from './gameplay/ship/createShip.js';
import { createSolarSystem } from './world/solarSystem/createSolarSystem.js';
import { createHud } from './ui/hud/createHud.js';

const app = document.querySelector('#app');

const renderer = createRenderer();
const scene = createScene();
const camera = createCamera();
const input = createInput();
const hud = createHud();

app.appendChild(renderer.domElement);

const ship = createShip();
scene.add(ship);
scene.add(createSolarSystem());

const clock = { last: performance.now() };

function update(dt) {
  const turnSpeed = 1.8;
  const moveSpeed = 20;

  if (input.isActive('left')) ship.rotation.y += turnSpeed * dt;
  if (input.isActive('right')) ship.rotation.y -= turnSpeed * dt;

  const direction = Number(input.isActive('forward')) - Number(input.isActive('back'));
  if (direction !== 0) {
    const forward = ship.getWorldDirection(new THREE.Vector3());
    ship.position.addScaledVector(forward, direction * moveSpeed * dt);
  }

  camera.position.lerp(ship.position.clone().add(new THREE.Vector3(0, 5, 15)), 0.08);
  camera.lookAt(ship.position);
}

import * as THREE from 'three';

function loop(now) {
  const dt = Math.min(0.05, (now - clock.last) / 1000);
  clock.last = now;

  update(dt);
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onResize);
requestAnimationFrame(loop);

window.addEventListener('beforeunload', () => {
  input.dispose();
  hud.dispose();
});
