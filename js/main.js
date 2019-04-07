(() => {
	
	let piecesBoard = document.querySelector("#musicIcons"),
		 dropZones = document.querySelectorAll('.dropZone');
		
		initDrag();

	function initDrag() {
		piecesBoard.querySelectorAll('img').forEach(img => {
			img.addEventListener("dragstart", function(e) {
				console.log('draggin..........')

				e.dataTransfer.setData("text/plain", this.id);
			});
		});
	}


	dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log('you dragged me over!');
		});

		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log('ouch! you dropped me!');

			let prevDrop = e.target;
				while (prevDrop !== 0 && !prevDrop.classList.contains("dropZone")) {
				prevDrop = prevDrop.parentNode;
				return false;
			}


 			let piece = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelector(`#${piece}`));

			let accordion = document.getElementById("drag1"),
				guitar = document.getElementById("drag2"),
				saxophone = document.getElementById("drag3"),
				piano = document.getElementById("drag4"),
				drumsticks = document.getElementById("drag5");
				drum = document.getElementById("drag6");

  if (document.getElementById("musicBox").contains(accordion)) {
  	document.querySelector("#accordion").play();
  }
   if (document.getElementById("musicBox").contains(guitar)) {
  	document.querySelector("#guitar").play();
  }
  if (document.getElementById("musicBox").contains(saxophone)) {
  	document.querySelector("#saxophone").play();
  }
  if (document.getElementById("musicBox").contains(piano)) {
  	document.querySelector("#piano").play();
  }
  if (document.getElementById("musicBox").contains(drumsticks)) {
  	document.querySelector("#drumsticks").play();
  }
  if (document.getElementById("musicBox").contains(drum)) {
  	document.querySelector("#drum").play();
  }
	});

	});

})();