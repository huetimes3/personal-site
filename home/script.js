// set attribute for the page depending on if browser is in dark mode or not
document.addEventListener('DOMContentLoaded', function() {
	var isDarkDefault = window.matchMedia('(prefers-color-scheme: dark)').matches;
	if (isDarkDefault) {
	  	document.documentElement.setAttribute('data-theme', 'dark');
	} else {
	  	document.documentElement.setAttribute('data-theme', 'light');
	}
	var darkModeToggle = document.getElementById('dark-mode-toggle');
	//either link to moon or sun svg icon
	darkModeToggle.innerHTML = isDarkDefault ? '<img src="assets/sun_icon.svg" alt="light mode">' : '<img src="assets/moon_icon.svg" alt="dark mode">';
	darkModeToggle.addEventListener('click', toggleDarkMode);
});

function toggleDarkMode() {
	const currentTheme = document.documentElement.getAttribute('data-theme');
	const switchToTheme = currentTheme === 'dark' ? 'light' : 'dark';
	document.getElementById('dark-mode-toggle').innerHTML = switchToTheme === 'dark' ? '<img src="assets/sun_icon.svg" alt="light mode">' : '<img src="assets/moon_icon.svg" alt="dark mode">';
	document.documentElement.setAttribute('data-theme', switchToTheme);
}