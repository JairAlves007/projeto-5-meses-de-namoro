const allKeys = document.querySelectorAll("#board .row-board .key");
const allLetters = document.querySelectorAll("#board .row-board .key");
const btnEnter = document.getElementById("btn-enter");
const btnDel = document.getElementById("btn-del");
const wordsContainer = document.getElementById("words-container");
const wordSelected = [];

const word = localStorage.getItem('word');

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
let chances = +localStorage.getItem('chances') > 0 ? +localStorage.getItem('chances') : 6;

console.log(
	"Feito com amor (e bastante estresse, programação, né KKKKKKKKKKKKKK), por Jair Alves, para Misleny Lima ❤️"
);