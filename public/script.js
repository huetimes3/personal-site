// set attribute for the page depending on if browser is in dark mode or not
document.addEventListener('DOMContentLoaded', function() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  });