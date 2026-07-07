(function () {
  var html = document.documentElement;
  var saved = localStorage.getItem('theme') || 'light';
  if (saved === 'dark') html.classList.add('dark');

  function updateIcon(theme) {
    var icon = document.getElementById('themeIcon');
    if (!icon) return;
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }

  document.addEventListener('DOMContentLoaded', function () {
    updateIcon(saved);
    var btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var isDark = html.classList.toggle('dark');
      var theme = isDark ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
      updateIcon(theme);
    });
  });
})();
