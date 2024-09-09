const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let Min = dateToday.getMinutes();
    let Sec = dateToday.getSeconds();

    if (hr < 10) hr = "0" + hr;
    if (Min < 10) Min = "0" + Min;
    if (Sec < 10) Sec = "0" + Sec;


    horas.textContent = hr;
    minutos.textContent = Min;
    segundos.textContent = Sec;
})