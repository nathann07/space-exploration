import * as THREE from 'three';
import { GAME_CONFIG } from '../config/gameConfig.js';

export function createCamera() {
  const camera = new THREE.PerspectiveCamera(
    GAME_CONFIG.cameraFov,
    window.innerWidth / window.innerHeight,
    0.1,
    50000,
  );
  camera.position.set(0, 5, 15);
  return camera;
}
