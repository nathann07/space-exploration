export function createHud() {
  const root = document.createElement('div');
  root.style.position = 'fixed';
  root.style.left = '16px';
  root.style.top = '16px';
  root.style.color = 'white';
  root.style.fontFamily = 'system-ui, sans-serif';
  root.style.fontSize = '14px';
  root.style.background = 'rgba(0,0,0,0.4)';
  root.style.padding = '10px 12px';
  root.style.borderRadius = '8px';

  root.innerHTML = 'Space Exploration Prototype<br/>Step 1: Engine Scaffold Ready';
  document.body.appendChild(root);

  return {
    dispose() {
      root.remove();
    },
  };
}
