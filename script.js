document.addEventListener('DOMContentLoaded', function() {
	var isDarkDefault = window.matchMedia('(prefers-color-scheme: dark)').matches;
	if (isDarkDefault) {
	  	document.documentElement.setAttribute('data-theme', 'dark');
	} else {
	  	document.documentElement.setAttribute('data-theme', 'light');
	}
	var darkModeToggle = document.getElementById('dark-mode-toggle');
	if (darkModeToggle) {
		darkModeToggle.innerHTML = isDarkDefault ? '<img src="assets/sun_icon.svg" alt="light mode">' : '<img src="assets/moon_icon.svg" alt="dark mode">';
		darkModeToggle.addEventListener('click', toggleDarkMode);
	}

	setTimeout(function() {
		document.getElementById('body').style.transition = 'all 1s ease';
	}, 500);

	const username = document.getElementById('username-rainbow');
	if (username) {
		username.addEventListener('click', () => {
			username.classList.add('clicked');
	
			setTimeout(() => {
				username.classList.remove('clicked');
			}, 3000);
		})
	}
});

function toggleDarkMode() {
	const currentTheme = document.documentElement.getAttribute('data-theme');
	const switchToTheme = currentTheme === 'dark' ? 'light' : 'dark';
	document.getElementById('dark-mode-toggle').innerHTML = switchToTheme === 'dark' ? '<img src="assets/sun_icon.svg" alt="light mode">' : '<img src="assets/moon_icon.svg" alt="dark mode">';
	document.documentElement.setAttribute('data-theme', switchToTheme);
}

function playClownHorn() {
	var clownHorn = new Audio('assets/clown_horn.mp3');
	clownHorn.playbackRate = 1;
	clownHorn.play();
}