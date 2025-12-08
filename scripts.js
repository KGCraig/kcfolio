const navList = document.getElementById("DropdownItems")
const navButton = document.getElementById("nav-button");

function toggleDisplay() {
    const isOpen = navList.classList.toggle('show');
    navButton.setAttribute('aria-expanded', String(isOpen));
}

// Close the dropdown if the user clicks outside of it
document.addEventListener('click', (event) => {

  // If click happened inside the button or inside the navList, do nothing
  if (navButton.contains(event.target) || navList.contains(event.target)) {
    return;
  }

  // Otherwise remove the menu if it's open
  if (navList.classList.contains('show')) {
    navList.classList.remove('show');
    navButton.setAttribute('aria-expanded', 'false');
    navButton.style.color = '';
  }
});

// Close when a menu link is clicked
navList.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('show');
    navButton.setAttribute('aria-expanded', 'false');
    navButton.style.color = '';
  });
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navList.classList.contains('show')) {
    navList.classList.remove('show');
    navButton.setAttribute('aria-expanded', 'false');
    navButton.style.color = '';
    navButton.focus(); // return focus to the toggle for keyboard users
  }
});

