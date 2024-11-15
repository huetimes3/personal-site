document.addEventListener('DOMContentLoaded', function() {
	var isDarkDefault = window.matchMedia('(prefers-color-scheme: dark)').matches;
	if (isDarkDefault) {
	  	document.documentElement.setAttribute('data-theme', 'dark');
	} else {
	  	document.documentElement.setAttribute('data-theme', 'light');
	}
	var darkModeToggle = document.getElementById('dark-mode-toggle');

	darkModeToggle.innerHTML = isDarkDefault ? '<img src="assets/sun_icon.svg" alt="light mode">' : '<img src="assets/moon_icon.svg" alt="dark mode">';
	darkModeToggle.addEventListener('click', toggleDarkMode);
	
	setTimeout(function() {
		document.getElementById('body').style.transition = 'all 1s ease';
	}, 500);
});

function toggleDarkMode() {
	const currentTheme = document.documentElement.getAttribute('data-theme');
	const switchToTheme = currentTheme === 'dark' ? 'light' : 'dark';
	document.getElementById('dark-mode-toggle').innerHTML = switchToTheme === 'dark' ? '<img src="assets/sun_icon.svg" alt="light mode">' : '<img src="assets/moon_icon.svg" alt="dark mode">';
	document.documentElement.setAttribute('data-theme', switchToTheme);
}