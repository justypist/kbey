window.addEventListener('load', () => {
  const output = document.getElementById('output');

  output.innerText = "<press any key>";

  document.body.addEventListener('keydown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    output.innerText = `"${e.key}"`
  })
})