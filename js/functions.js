function submitWord() {
	const maxWin = wordSelected.length;
	let hits = 0;
	let sendWord = [];
	let delay = 0;

	for (let i = 0; i < rowStep[step].children.length; i++) {
		sendWord.push(rowStep[step].children.item(i).innerHTML);
	}

	if (sendWord.includes("")) {
		rowStep[step].classList.add("incorrect");

		setTimeout(() => {
			rowStep[step].classList.remove("incorrect");
		}, 400);

		return;
	}

	for (let i = 0; i < sendWord.length; i++) {
		delay += 400;

		setTimeout(() => {
			rowStep[step].children.item(i).classList.add("flip");
		}, delay);

		rowStep[step].children.item(i).classList.remove("selected");

		if (wordSelected.includes(sendWord[i])) {
			if (sendWord[i] == wordSelected[i]) {
				rowStep[step].children.item(i).addEventListener("animationend", () => {
					rowStep[step].children.item(i).classList.add("correct");

					allLetters.forEach(key => {
						if (key.innerHTML == sendWord[i]) {
							key.classList.add("correct");
						}
					});

					hits++;
				});
			} else {
				rowStep[step].children.item(i).addEventListener("animationend", () => {
					rowStep[step].children.item(i).classList.add("no-position");

					allLetters.forEach(key => {
						if (key.innerHTML == sendWord[i]) {
							key.classList.add("no-position");
						}
					});
				});
			}
		} else {
			rowStep[step].children.item(i).addEventListener("animationend", () => {
				rowStep[step].children.item(i).classList.add("no-exists");

				allLetters.forEach(key => {
					if (key.innerHTML == sendWord[i]) {
						key.classList.add("no-exists");
					}
				});
			});
		}
	}

	setTimeout(() => {
		if (hits >= maxWin) {
			alert("Parabéns, Amor! Você venceu!");
		} else {
			rowStep[step]?.classList.remove("active");
			step++;
			rowStep[step]?.children[0].classList.add("selected");
			rowStep[step]?.classList.remove("disabled");
			rowStep[step]?.classList.add("active");

			if (step >= chances) {
				rowStep[step - 1].classList.add("incorrect");

				setTimeout(() => {
					
					rowStep[step - 1].classList.remove("incorrect");

					alert("Não foi dessa vez, Amor! Tente novamente!");
					
				}, 500);

			}
		}
	}, delay * 1.5);
}

function deleteLetter() {
	const letters = rowStep[step].children;

	for (let i = 0; i < letters.length; i++) {
		letters.item(i).classList.remove("show");
		if (letters.item(i).classList.contains("selected")) {
			if (i > 0) {
				letters.item(i).classList.remove("selected");

				if (letters.item(i).innerHTML != "") {
					letters.item(i).innerHTML = "";
				}

				letters.item(--i)?.classList.add("selected");
				letters.item(i).innerHTML = "";
			}
		}
	}
}

function writeLetters(letter) {
	if (lettersAllowed.includes(letter.toUpperCase())) {
		const letters = rowStep[step].children;

		for (let i = 0; i < letters.length; i++) {
			if (letters.item(i).classList.contains("selected")) {
				letters.item(i).classList.add("show");
				letters.item(i).innerHTML = letter.toUpperCase();
				
				setTimeout(() => {
					letters.item(i).classList.remove("show");
				}, 20);

				if (i < letters.length - 1) {
					letters.item(i).classList.remove("selected");
					letters.item(++i)?.classList.add("selected");
				}

				// setTimeout(() => {
				// 	letters.item(i).classList.remove("show");
				// }, 200);
			}
		}
	}
}
