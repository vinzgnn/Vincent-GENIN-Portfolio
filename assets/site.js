(function () {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  const sunIcon = themeToggle?.querySelector('.icon-sun');
  const moonIcon = themeToggle?.querySelector('.icon-moon');
  const backToTop = document.getElementById('back-to-top');

  // Theme
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.setAttribute('data-theme', 'dark');
    if (sunIcon) sunIcon.style.display = 'none';
    if (moonIcon) moonIcon.style.display = 'inline';
  }

  themeToggle?.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    if (sunIcon) sunIcon.style.display = isDark ? 'inline' : 'none';
    if (moonIcon) moonIcon.style.display = isDark ? 'none' : 'inline';
  });

  // Back to top
  let scrollTimeout;
  const showBackToTop = () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (backToTop) {
        backToTop.classList.toggle('visible', window.scrollY > 200);
      }
    }, 100);
  };

  window.addEventListener('scroll', showBackToTop);
  showBackToTop();

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Staggered animations for cards
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
})();
