const wrapper = document.getElementById('wrapper');
const toggleButton = document.getElementById('menu-toggle');

// Function to check window width and toggle sidebar accordingly
function checkWidth() {
  if (window.innerWidth <= 768) {
    wrapper.classList.add('toggled');
  } else {
    wrapper.classList.remove('toggled');
  }
}

// Initial check
checkWidth();

// Check on window resize
window.addEventListener('resize', checkWidth);

toggleButton.addEventListener('click', function (e) {
  e.preventDefault();
  wrapper.classList.toggle('toggled');
});

