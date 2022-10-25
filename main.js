const febHolidays = [
	"Dia del chocolate",
	"Dia de la guitarra",
	"Dia del cumpleaños de Kelly",
	"Dia de vestir negro",
	"Dia del hombre del tiempo",
	"Dia del pollito a la brasa",
	"Dia de aprender PHP",
	"Dia del Inventor",
	"Dia de ahora si aprender PHP",
	"Dia de luto 😔",
	"Dia de salir a pasear",
	"Dia de cenar pero en la mañana",
	"Dia de mi titulacion 👨🏼‍🎓",
	"Dia de viajar",
	"Dia de amar a tu mascota",
	"Dia de regresar de viaje",
	"Dia de hacer planes",
	"Dia de no salir de la cama",
	"Dia de asistir a la Iglesia",
	"Dia de pastel",
	"Dia de olvidarse del dia 7",
	"Dia de Aprender Ingles",
	"Dia de Aprender photoshop",
	"Dia de entregar mi primer trabajo freelance",
	"Dia de ser sacar mi cerficacion de toefl",
	"Dia de ser creativo",
	"Dia del osito polar",
	"Dia de aprender JWT 🤓"
];

const ulEl = document.querySelector("ul");
const d = new Date();
let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
let activeIndex = daynumber;
const rotate = -360 / febHolidays.length;
init();

function init() {
	febHolidays.forEach((holiday, idx) => {
		const liEl = document.createElement("li");
		liEl.style.setProperty("--day_idx", idx);
		liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
			idx + 1
		}</time><span>${holiday}</span>`;
		ulEl.append(liEl);
	});
	ulEl.style.setProperty("--rotateDegrees", rotate);
	adjustDay(0);
}

function adjustDay(nr) {
	daynumber += nr;
	ulEl.style.setProperty("--currentDay", daynumber);

	const activeEl = document.querySelector("li.active");
	if (activeEl) activeEl.classList.remove("active");

	activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
	const newActiveEl = document.querySelector(`li:nth-child(${activeIndex + 1})`);
	document.body.style.backgroundColor = window.getComputedStyle(
		newActiveEl
	).backgroundColor;

	newActiveEl.classList.add("active");
}

window.addEventListener("keydown", (e) => {
	switch (e.key) {
		case "ArrowUp":
			adjustDay(-1);
			break;
		case "ArrowDown":
			adjustDay(1);
			break;
		default:
			return;
	}
});
