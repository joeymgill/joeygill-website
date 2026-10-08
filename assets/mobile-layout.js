(() => {
  const links = document.querySelector('.profile-links');
  const profile = document.querySelector('.profile');
  const page = document.querySelector('.page');
  const mobile = window.matchMedia('(max-width: 620px)');
  function positionLinks() {
    if (mobile.matches) page.appendChild(links);
    else profile.appendChild(links);
  }
  positionLinks();
  mobile.addEventListener('change', positionLinks);
})();
