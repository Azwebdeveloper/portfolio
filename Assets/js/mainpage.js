const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(navItem => {
  navItem.addEventListener('mouseover', () => {
    navItem.classList.add('hovered');
  });

  navItem.addEventListener('mouseout', () => {
    navItem.classList.remove('hovered');
  });
});
