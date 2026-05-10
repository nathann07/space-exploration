const KEY_MAP = {
  forward: ['KeyW', 'ArrowUp'],
  back: ['KeyS', 'ArrowDown'],
  left: ['KeyA', 'ArrowLeft'],
  right: ['KeyD', 'ArrowRight'],
  boost: ['ShiftLeft', 'ShiftRight'],
};

export function createInput() {
  const pressed = new Set();

  const onKeyDown = (event) => pressed.add(event.code);
  const onKeyUp = (event) => pressed.delete(event.code);

  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);

  return {
    isActive(action) {
      return KEY_MAP[action]?.some((code) => pressed.has(code)) ?? false;
    },
    dispose() {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    },
  };
}
