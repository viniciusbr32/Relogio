const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

setInterval(() => {
	let date = new Date();
	let horas = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	hour.innerHTML = `${formatTime(horas)}`;
	min.innerHTML = `${formatTime(minutes)}`;
	sec.innerHTML = `${formatTime(seconds)}`;
}, 1000);

function formatTime(time) {
	return time < 10 ? '0' + time : time;
}
