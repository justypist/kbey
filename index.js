function parseSpecialKeys(e) {
  const keys = [];

  if (e instanceof KeyboardEvent) {
    if (e.ctrlKey) {
      keys.push('Control')
    }
    if (e.metaKey) {
      keys.push('Meta')
    }
    if (e.altKey) {
      keys.push('Alt')
    }
    if (e.shiftKey) {
      keys.push('Shift')
    }
    return keys;
  }

  return keys
}

window.addEventListener('load', () => {
  const output = document.getElementById('output');
  document.body.addEventListener('keydown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const specialKeys = parseSpecialKeys(e);
    output.innerText = `${specialKeys.length > 0 ? specialKeys.join(' ') : ''} ${specialKeys.includes(e.key) ? '' : e.key}`
  })
})
