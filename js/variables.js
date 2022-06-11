const allKeys = document.querySelectorAll("#board .row-board .key");
const allLetters = document.querySelectorAll("#board .row-board .key");
const btnEnter = document.getElementById("btn-enter");
const btnDel = document.getElementById("btn-del");
const wordsContainer = document.getElementById("words-container");
const wordSelected = ["N", "A", "M", "O", "R", "A", "D", "O", "S"];

// const word = localStorage.getItem('word');
const chances = +localStorage.getItem('chances') > 0 ? +localStorage.getItem('chances') : 6;

const lettersAllowed = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z"
];

let rowStep;
let letters;
let step = 0;

console.log(
	"Feito com amor (e bastante estresse, programação, né KKKKKKKKKKKKKK), por Jair Alves, para Misleny Lima ❤️"
);