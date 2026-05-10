import * as THREE from 'three';

export function createSolarSystem() {
  const root = new THREE.Group();

  const sun = new THREE.Mesh(
    new THREE.SphereGeometry(4, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0xffdd66 }),
  );

  root.add(sun);
  return root;
}
