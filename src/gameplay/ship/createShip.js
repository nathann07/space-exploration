import * as THREE from 'three';

export function createShip() {
  const group = new THREE.Group();

  const body = new THREE.Mesh(
    new THREE.ConeGeometry(0.6, 2.2, 12),
    new THREE.MeshStandardMaterial({ color: 0x55aaff, metalness: 0.4, roughness: 0.5 }),
  );
  body.rotation.x = Math.PI / 2;

  const wingGeom = new THREE.BoxGeometry(2.2, 0.08, 0.5);
  const wingMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.5, roughness: 0.6 });
  const wing = new THREE.Mesh(wingGeom, wingMat);
  wing.position.set(0, -0.15, -0.25);

  group.add(body, wing);
  group.position.set(0, 0, 0);

  return group;
}
