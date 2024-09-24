// LOADER ANIMATION
document.addEventListener('DOMContentLoaded', () => {
	const loaderWrapper = document.getElementById('loader-wrapper');
	const loader = document.getElementById('loader');

	// timeout to end loader animation after 1 second (in ms)
	setTimeout(() => {
		loaderWrapper.classList.add('loaded');
		loader.classList.add('loaded');
	}, 1300);

	loaderWrapper.addEventListener('transitionend', () => {
		loaderWrapper.parentNode.removeChild(loaderWrapper);
	});
})


document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('header');
	const main = document.querySelector('main');

	setTimeout(() => {
		header.style.opacity = '1';
		main.style.opacity = '1';
	}, 250);
})






// COLOR THEME TOGGLE

// Check local storage for saved theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
	document.body.classList.add(currentTheme);
	toggleIcon(currentTheme);
}

// Toggle dark mode and update icon
function toggleDarkMode() {
	const body = document.body;
	const icon = document.getElementById('theme-toggle-btn');

	// Toggle dark mode class on body
	body.classList.toggle('dark-theme');

	// Save current theme to local storage
	if (body.classList.contains('dark-theme')) {
		localStorage.setItem('theme', 'dark-theme');
		toggleIcon('dark-theme');
	} else {
		localStorage.removeItem('theme');
		toggleIcon('');
	}
}

// Toggle icon
function toggleIcon(theme) {
	const icon = document.getElementById('theme-toggle-btn');
	const mobileIcon = document.getElementById('mobile-theme-toggle-btn');

	if (theme === 'dark-theme') {
		icon.innerText = icon.innerText.replace('dark_mode', 'light_mode');
		mobileIcon.innerText = mobileIcon.innerText.replace('dark_mode', 'light_mode');
	} else {
		icon.innerText = icon.innerText.replace('light_mode', 'dark_mode');
		mobileIcon.innerText = mobileIcon.innerText.replace('light_mode', 'dark_mode');
	}
}

document.getElementById('theme-toggle-btn').addEventListener('click', toggleDarkMode);
document.getElementById('mobile-theme-toggle-btn').addEventListener('click', toggleDarkMode);








// Header active class

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
	const scrollHeight = window.scrollY;
	if (scrollHeight > 60) {
		header.classList.add('headerIsActive');
	} else {
		header.classList.remove('headerIsActive');
	}
})






// Scroll reveal animation

ScrollReveal().reveal('.works-heading, .get-to-know-me-heading', {
   delay: 500,
   easing: 'cubic-bezier(0.420, 0.000, 0.580, 1.000)',
	duration: 500,
	opacity: '0',
	viewFactor: 0.9,
});

ScrollReveal().reveal('.works-content', {
   delay: 500,
   easing: 'cubic-bezier(0.420, 0.000, 0.580, 1.000)',
	opacity: '0',
	duration: 500,
	viewFactor: 0.15,
});


ScrollReveal().reveal('.get-to-know-me-content1', {
   delay: 500,
   easing: 'cubic-bezier(0.420, 0.000, 0.580, 1.000)',
	duration: 500,
	opacity: '0',
});

ScrollReveal().reveal('.get-to-know-me-content2', {
   delay: 600,
   easing: 'cubic-bezier(0.420, 0.000, 0.580, 1.000)',
	duration: 500,
	opacity: '0',
});

ScrollReveal().reveal('.get-to-know-me-content3', {
   delay: 700,
   easing: 'cubic-bezier(0.420, 0.000, 0.580, 1.000)',
	duration: 500,
	opacity: '0',
});

ScrollReveal().reveal('.get-to-know-me-content4', {
   delay: 800,
   easing: 'cubic-bezier(0.420, 0.000, 0.580, 1.000)',
	duration: 500,
	opacity: '0',
});

ScrollReveal().reveal('.cta-text-container', {
   delay: 500,
   easing: 'cubic-bezier(0.420, 0.000, 0.580, 1.000)',
   opacity: '0',
	duration: 500,
	viewFactor: 0.1,
});

ScrollReveal().reveal('.cta-btn', {
   delay: 550,
   easing: 'cubic-bezier(0.420, 0.000, 0.580, 1.000)',
   opacity: '0',
	duration: 500,
	viewFactor: 0.1,
});

ScrollReveal().reveal('footer', {
   delay: 500,
   easing: 'cubic-bezier(0.420, 0.000, 0.580, 1.000)',
	duration: 500,
	opacity: '0',
	viewFactor: 0.1,
});

ScrollReveal().reveal('.about-content-text-container, .tech-stack-content-top, .tech-stack-content-bottom, .contact-form-container, .contact-form-message', {
   delay: 500,
   easing: 'cubic-bezier(0.420, 0.000, 0.580, 1.000)',
	duration: 500,
	opacity: '0',
	viewFactor: 0.1,
});

ScrollReveal().reveal('.about-content-image-container, .bookshelf-content', {
   delay: 650,
   easing: 'cubic-bezier(0.420, 0.000, 0.580, 1.000)',
	duration: 500,
	opacity: '0',
	viewFactor: 0.1,
});








// Footer current year updater

const yearPlaceholder = document.getElementById('year');
const year = new Date().getFullYear();
yearPlaceholder.innerText = year;






// Get all the form elements
const form = document.getElementById('contact-form-container');
const emailInput = document.getElementById('email-input');
const nameInput = document.getElementById('name-input');
const subjectInput = document.getElementById('subject-input');
const textareaInput = document.getElementById('textarea-input');
const contactFormBtn = document.getElementById('contact-form-btn');

const errorIcon = document.getElementById('input-icon');

// Add event listener to the form
form.addEventListener('submit', e => {
	e.preventDefault();

	// Check if any of the input fields are empty
 	// if (emailInput.value === '' || nameInput.value === '' || subjectInput.value === '' || textareaInput.value === '') {
	// 	// Display error for 3 seconds
	// 	errorIcon.style.display = 'block';

	// 	setTimeout(function() {
	// 		errorIcon.style.display = 'none';
	// 	}, 3000);

	// 	// Exit the function
	// 	return;
 	// }

	// Validate email using regex
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

	if (!emailRegex.test(emailInput.value)) {
		// Display error for 3 seconds
		errorIcon.style.display = 'block';

		setTimeout(function() {
			errorIcon.style.display = 'none';
		}, 3000);

		// Exit the function
		return;
	}

	// If all the input fields are filled and email is valid, submit the form
	form.submit();
});