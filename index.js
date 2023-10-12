window.addEventListener('load', () => {
  const output = document.getElementById('output');
  document.body.addEventListener('keydown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    output.innerText = `"${e.key}"`
  })
})
