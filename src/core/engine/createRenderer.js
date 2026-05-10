import * as THREE from 'three';
import { GAME_CONFIG } from '../config/gameConfig.js';

export function createRenderer() {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(GAME_CONFIG.clearColor);
  return renderer;
}
