
	const hamburgerMenu = document.querySelector('.hamburger_menu'),
		  headerNavBar = document.querySelector('.header_navbar');

		hamburgerMenu.addEventListener('click', function () {
			headerNavBar.classList.toggle('header_navbar_active');
			hamburgerMenu.classList.toggle('hamburger_menu_active')
		});