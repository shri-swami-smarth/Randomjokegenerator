const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "Parallel lines have so much in common. It's a shame they'll never meet."
];
		
		function generateJoke(){
			const jokeElement = document.getElementById("joke");
			const randomIndex = Math.floor(Math.random() * jokes.length);
			jokeElement.textContent = jokes[randomIndex];

		}