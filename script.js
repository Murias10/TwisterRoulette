const canvas = document.getElementById("ruleta");
const ctx = canvas.getContext("2d");
canvas.width = 300;
canvas.height = 300;

const spanishColors = {};

spanishColors["red"] = "rojo";
spanishColors["blue"] = "azul";
spanishColors["yellow"] = "amarillo";
spanishColors["green"] = "verde";

const colors = [
    ...Array(17).fill("red"), // 85% rojo (17 segmentos)
    "blue", "yellow", "green" // 5% cada uno
];
const angles = 360 / colors.length;

function drawRoulette() {
    for (let i = 0; i < colors.length; i++) {
        ctx.beginPath();
        ctx.moveTo(150, 150);
        ctx.arc(150, 150, 150, (i * angles) * Math.PI / 180, ((i + 1) * angles) * Math.PI / 180);
        ctx.closePath();
        ctx.fillStyle = colors[i];
        ctx.fill();
    }
}

let rotation = 0;
function girarRuleta() {
    let randomSpin = Math.floor(Math.random() * 3600) + 1800;
    rotation += randomSpin;
    canvas.style.transform = `rotate(${rotation}deg)`;

    document.getElementById("boton").disabled = true;

    setTimeout(() => {
        const finalRotation = (rotation % 360);
        const selectedIndex = Math.floor((360 - finalRotation) / angles) % colors.length;
        document.getElementById("resultado").innerText = `Ha salido el color ${spanishColors[colors[selectedIndex]].toUpperCase()}`;
        document.getElementById("resultado").style.color = colors[selectedIndex];
        document.getElementById("boton").disabled = false;
    }, 3000); // Esperar a que termine de girar




}

drawRoulette();