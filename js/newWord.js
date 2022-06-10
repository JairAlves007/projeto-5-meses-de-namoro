const form = document.forms[0];

if (form) {
	form.onsubmit = e => {
		e.preventDefault();
		let word = e.target.word.value.toUpperCase();
		let chances = +e.target.chances.value;

		if (word.trim() === "" || chances < 3 || chances > 6) {
			alert('[ERRO] Verifique a palavra e o número de chances!');
			return;
		}

		localStorage.setItem("word", word);
		localStorage.setItem("chances", chances);
		e.target.word.value = "";
		e.target.chances.value = "";
    
		alert("Palavra nova cadastrada com sucesso!");
	};
}
