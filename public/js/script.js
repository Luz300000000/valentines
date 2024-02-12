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

	// Set max 'no' clicks
	let maxClicks = 10;

	// change 'no' button position
	if (i < maxClicks - 1) {
		setButtonPosition();
		i++;
	} else if (i === maxClicks - 1) {
		alert("let's just start over (╥﹏╥)");
		location.reload();
	}
});

yes_button.addEventListener('click', () => {
	// change banner gif path
	let banner = document.getElementById('banner');
	banner.src = "./public/images/yes_clean.gif";
	refreshBanner();
	//change banner size
	banner.style.height = "450px";
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
		//change banner size
		banner.style.height = "250px";
		// hide click_me note
		click_me.style.display = "none";
		// new title
		let title = document.getElementById('title');
		title.textContent = "made this for you <3";
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

// Function to get a random diagonal direction
function getRandomDiagonalDirection() {
    var directions = ['up-left', 'up-right', 'down-left', 'down-right'];
    var randomIndex = Math.floor(Math.random() * directions.length);
    return directions[randomIndex];
}

// Function to generate a random position change diagonally
function getRandomDiagonalPositionChange() {
    // Get a random diagonal direction
    var direction = getRandomDiagonalDirection();
    // Get a random distance to move (40, 100, or 160 pixels)
    var distance = 100;
    // Calculate the change in position based on the direction and distance
    var positionChange = { top: 0, left: 0 };
    switch (direction) {
        case 'up-left':
            positionChange.top -= distance;
            positionChange.left -= distance;
            break;
        case 'up-right':
            positionChange.top -= distance;
            positionChange.left += distance;
            break;
        case 'down-left':
            positionChange.top += distance;
            positionChange.left -= distance;
            break;
        case 'down-right':
            positionChange.top += distance;
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
    // Get a random diagonal position change
    var positionChange = getRandomDiagonalPositionChange();
    // Update the button's position
    no_button.style.top = (currentPosition.top + positionChange.top) + 'px';
    no_button.style.left = (currentPosition.left + positionChange.left) + 'px';
}