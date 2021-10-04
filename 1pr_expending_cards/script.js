const pannels = document.querySelectorAll('.panel');

pannels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveCalsses();
    panel.classList.add('active');
  })
})

function removeActiveCalsses(){
  pannels.forEach(panel => {
    panel.classList.remove('active');
  })
}