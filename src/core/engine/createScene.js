import * as THREE from 'three';
import { GAME_CONFIG } from '../config/gameConfig.js';

function createStarfield() {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(GAME_CONFIG.starCount * 3);

  for (let i = 0; i < GAME_CONFIG.starCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 4000;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 4000;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 4000;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({ color: 0xffffff, size: 1.5, sizeAttenuation: true });
  return new THREE.Points(geometry, material);
}

export function createScene() {
  const scene = new THREE.Scene();

  const ambient = new THREE.AmbientLight(0xffffff, 0.15);
  const sunLight = new THREE.DirectionalLight(0xffffff, 1.2);
  sunLight.position.set(100, 100, 100);

  scene.add(ambient);
  scene.add(sunLight);
  scene.add(createStarfield());

  return scene;
}
