(() => {
	console.log('fired');


	const buttons = ["goUp", "goDown", "goRight", "goLeft", "lTrigger"];

	let musicIcon = document.querySelector(".MusicIcon1"),
		musicIcon = document.querySelector(".MusicIcon2"),
		musicIcon = document.querySelector(".MusicIcon3"),
		musicIcon = document.querySelector(".MusicIcon4"),
		buttonSelector = document.querySelectorAll("#buttonHolder img");
	function createButtons(pictureIndex) {
		button.forEach((button, index) => {
			let newPuzzlePiece = `<img id="button${index}" class="button-image" src="images/${button + pictureIndex}.jpg" alt="thumbnail">`;

			MusicIcon.innerHTML += newButton;
		});
	}
	function resetButtons() {
		createButtons(this.dataset.buttonRef)
	}
	buttonSelector.forEach(button => button.addEventListener("click", resetButtons));
})();
