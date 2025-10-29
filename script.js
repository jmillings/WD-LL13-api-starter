/*
🧠 Copilot Helper Notes – Please Follow These Guidelines:

This is a beginner-friendly project. Suggestions should:
- Use plain JavaScript (no frameworks, Canvas, or game libraries).
- Use `fetch()` with `.then()` syntax (not async/await unless requested).
- Prefer `const` and `let`, and keep variable/function names clear and descriptive.
- Use `||` and `&&` in conditionals only when needed – clarity first.
- Break logic into small, readable functions when appropriate.
- Avoid advanced ES6+ features (e.g., destructuring, optional chaining) unless scaffolded.
- Avoid arrow functions unless needed for clarity or brevity.
- Add helpful inline comments, especially around tricky logic or new patterns.

This helps students learn to read, debug, and extend code confidently.
*/

/*
Students — No need to worry about this block! 
It’s just here to help Copilot support you better. 
Start your code below 👇
*/




// Use this script to write your fetch logic
// You'll fetch data from your selected API and display it on the page
const output = document.getElementById('output');
const foxBtn = document.getElementById('foxBtn');

const foxFacts = [
	"Foxes have whiskers on their legs as well as their faces, helping them to navigate.",
	"A group of foxes is called a skulk or leash.",
	"Foxes can run up to 45 miles per hour.",
	"Foxes have excellent hearing and can hear a watch ticking 40 yards away.",
	"Some foxes can climb trees and swim well.",
	"Foxes use 28 different types of vocalizations to communicate.",
	"The red fox is the most common fox species in the world.",
	"Foxes are mostly nocturnal, but can be active during the day.",
	"Foxes have vertical pupils, similar to cats, which help them see in the dark.",
	"Baby foxes are called kits, pups, or cubs."
];

function getRandomFact() {
	return foxFacts[Math.floor(Math.random() * foxFacts.length)];
}

function fetchFox() {
	output.innerText = 'Loading...';
	fetch('https://randomfox.ca/floof/')
		.then(response => response.json())
		.then(data => {
			// Clear output and build elements dynamically
			output.innerHTML = '';
			const title = document.createElement('h2');
			title.innerText = 'Here\'s a random fox!';
			const img = document.createElement('img');
			img.setAttribute('src', data.image);
			img.setAttribute('alt', 'Random Fox');
			img.style.maxWidth = '100%';
			img.style.borderRadius = '8px';
			const fact = document.createElement('p');
			fact.innerText = 'Fox Fact: ' + getRandomFact();
			fact.style.fontStyle = 'italic';
			const p = document.createElement('p');
			p.innerHTML = 'Image source: <a href="' + data.link + '" target="_blank">randomfox.ca</a>';
			output.appendChild(title);
			output.appendChild(img);
			output.appendChild(fact);
			output.appendChild(p);
		})
		.catch(error => {
			output.innerText = 'Failed to load fox image. Please try again later.';
		});
}

foxBtn.addEventListener('click', fetchFox);
// Show a fox on page load
fetchFox();

// Example placeholder:
console.log("Team activity starter code loaded.");