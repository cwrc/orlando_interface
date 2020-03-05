(function() {

  const mobileNavButton = document.querySelector('.mobile-nav-button');
  const mobileNavWrapperId = 'primary-menu-wrapper';
  const mobileNavWrapper = document.getElementById(mobileNavWrapperId);

  const focusableNavElements = mobileNavWrapper.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  // const firstFocusableEl = focusableNavElements[0];
  // const lastFocusableEl = focusableNavElements[focusableNavElements.length - 1];

  function init() {
    mobileNavButton.setAttribute('aria-controls', mobileNavWrapperId);
    mobileNavWrapper.setAttribute('data-menu-open', 'false');
    mobileNavButton.setAttribute('aria-expanded', 'false');
  }

  function isMobileNavOpen() {
    return mobileNavWrapper.getAttribute('data-menu-open') === 'true';
  }

  function toggleMobileNav(state) {
    const value = state ? 'true' : 'false';
    const hamburgerPath = document.querySelector('.mobile-nav-button--hamburger');
    const closePath = document.querySelector('.mobile-nav-button--close');
    mobileNavWrapper.setAttribute('data-menu-open', value);
    mobileNavWrapper.classList.toggle('tw-hidden');
    mobileNavButton.setAttribute('aria-expanded', value);

    if (state) {
      hamburgerPath.classList.remove('tw-inline-flex');
      hamburgerPath.classList.add('tw-hidden');
      closePath.classList.add('tw-inline-flex');
      closePath.classList.remove('tw-hidden');
    }
    else {
      hamburgerPath.classList.remove('tw-hidden');
      hamburgerPath.classList.add('tw-inline-flex');
      closePath.classList.remove('tw-inline-flex');
      closePath.classList.add('tw-hidden');
    }
  }

  // Initialize everything.
  init();

  mobileNavButton.addEventListener('click', () => {
    toggleMobileNav(!isMobileNavOpen());
  });

  document.addEventListener('keyup', e => {
    if (e.keyCode === 27) {
      toggleMobileNav(false);
    }
  });

})();
