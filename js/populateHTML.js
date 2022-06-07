for (let i = 0; i < chances; i++) {
	wordsContainer.innerHTML += `
  
    <div class="word ${i === 0 ? "active" : "disabled"}"></div>
  
  `;
}

rowStep = document.querySelectorAll("#words-container .word");

rowStep.forEach(item => {
	wordSelected.forEach((word, index) => {
		item.innerHTML += `
      <div class="letter ${index === 0 ? "selected" : ""}"></div>
    `;
	});
});

letters = document.querySelectorAll("#words-container .word .letter");

for (let i = 0; i < letters.length; i++) {
	letters[i].addEventListener("click", () => {
		document
			.querySelectorAll(".letter.selected")[0]
			.classList.remove("selected");

		letters[i].classList.add("selected");
	});
}
