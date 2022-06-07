allKeys.forEach(key => {
	key.onclick = event => {
		const letterClicked = event.target.innerHTML;

		writeLetters(letterClicked);
	};
});

document.addEventListener("keydown", e => {
	if (e.keyCode === 13) {
		submitWord();
	} else if (e.keyCode === 8) {
		deleteLetter();
	} else {
		writeLetters(e.key);
	}
});

btnEnter.onclick = submitWord;

btnDel.onclick = deleteLetter;
