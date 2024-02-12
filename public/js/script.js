const answers = [
	"Are you sure?",
	"Are you really sure??",
	"Are you really realy sure???",
	"Think again?",
	"Don't believe in second chances?",
	"Why are you being so cold?",
	"Maybe we can talk about it?",
	"I am not going to ask again!",
	"Ok now this is hurting my feelings!",
	"You are now just being mean!",
	"Why are you doing this to me?",
	"Please give me a chance!",
	"I am begging you to stop!",
	"Ok, Lets just start over.."
];

var no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
const click_cat = document.getElementById('banner');
const click_me = document.getElementById('click_me');

click_me.style.display = 'none';

let i = 0;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
	// Change banner source
	let banner = document.getElementById('banner');

	banner.src = "./public/images/no_cat_clean.gif";
	refreshBanner();

	// new random position for no_button
	setButtonPosition();

	// increase button height and width gradually to 250px
	// const sizes = [40, 50, 30, 35, 45]
	// const random = Math.floor(Math.random() * sizes.length);
	// size += sizes[random]
	// yes_button.style.height = `${size}px`;
	// yes_button.style.width = `${size}px`;
	let total = answers.length;
	// change button text
	if (i < total - 1) {
		// no_button.innerHTML = answers[i];
		i++;
	} else if (i === total - 1) {
		alert(answers[i]);
		location.reload();
		// i = 0;
		// no_button.innerHTML = "No";
		// yes_button.style.height = "50px";
		// yes_button.style.width = "50px";
		// size = 50;
		// setInitialBanner();
		// refreshBanner();
	}
});

yes_button.addEventListener('click', () => {
	// change banner gif path
	let banner = document.getElementById('banner');
	banner.src = "./public/images/yes_clean.gif";
	refreshBanner();
	// hide title
	let title = document.getElementById('title');
	title.style.display = "none";
	// show click_me note
	click_me.style.display = "block";
	// hide buttons div
	let buttons = document.getElementsByClassName('buttons')[0];
	buttons.style.display = "none";

	click_cat.addEventListener('click', () => {
		// change banner gif path
		let banner = document.getElementById('banner');
		banner.src = "./public/images/for_you.gif";
		refreshBanner();
		// hide click_me note
		click_me.style.display = "none";
		// new title
		let title = document.getElementById('title');
		title.textContent = "Made this for you <3";
		title.style.display = "block";
		// show message div
		let message = document.getElementsByClassName('message')[0];
		message.style.display = "block";
	});
});

function refreshBanner() {
	// Reload banner gif to force load  
	let banner = document.getElementById('banner');
	let src = banner.src;
	banner.src = '';
	banner.src = src;
}

function setInitialBanner() {
	let banner = document.getElementById('banner');
	banner.src = "./public/images/blushing_cat.gif";
}

// Function to get a random direction
function getRandomDirection() {
    var directions = ['up', 'down', 'left', 'right'];
    var randomIndex = Math.floor(Math.random() * directions.length);
    return directions[randomIndex];
}

// Function to generate a random position change
function getRandomPositionChange() {
    // Get a random direction
    var direction = getRandomDirection();
    // Get a random distance to move (40, 100, or 160 pixels)
    var distance = 150;
    // Calculate the change in position based on the direction and distance
    var positionChange = { top: 0, left: 0 };
    switch (direction) {
        case 'up':
            positionChange.top -= distance;
            break;
        case 'down':
            positionChange.top += distance;
            break;
        case 'left':
            positionChange.left -= distance;
            break;
        case 'right':
            positionChange.left += distance;
            break;
    }
    return positionChange;
}

// Function to set the button position
function setButtonPosition() {
    // Get the current position
    var currentPosition = {
        top: parseInt(no_button.style.top) || 0,
        left: parseInt(no_button.style.left) || 0
    };
    // Get a random position change
    var positionChange = getRandomPositionChange();
    // Update the button's position
    no_button.style.top = (currentPosition.top + positionChange.top) + 'px';
    no_button.style.left = (currentPosition.left + positionChange.left) + 'px';
}