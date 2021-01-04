"use strict";

let punchlines = ["Depuis le 11 septembre 2001 Chuck Norris ne lance plus d 'avions en papier.",
    "Un jour, Chuck Norris a plongé dans la Mer Rouge. Moïse en a profité pour passer.",
    "Chuck Norris ne ment jamais, c'est la vérité qui se trompe.",
    "Chuck Norris ne s'est jamais rendu à l'école.Chuck Norris ne se rend jamais.",
    "Chuck Norris a joué au roi du silence avec un muet...et il a gagné.",
    "Chuck Norris peut cultiver un champ magnétique.",
    "Chuck Norris a réussi à trouver la page 404.",
    "Chuck Norris peut faire du feu en frottant deux glaçons.",
    "Tous les soirs, les cauchemars font le même Chuck Norris.",
    "Quand Chuck Norris s’est mis au judo, David Douillet s’ est mis aux pièces jaunes."
];
let randomText = document.querySelector("#randomText");

function change() {

    let item = 0;
    for (item in punchlines) {
        randomText = punchlines[Math.floor(Math.random() * punchlines.length)];
    }
    //console.log(randomText);
    document.querySelector('#randomText').textContent = randomText;

    let body = document.querySelector("body");
    let button = document.querySelector(".button");
    let text = document.querySelector("#randomText");
    let randomColors = [body, button, text];

    function changeColor() {
        let color = [];
        for (let i = 0; i < 3; i++) {
            color.push(Math.floor(Math.random() * 256));
            //console.log(color);
        }
        color = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        body.style.backgroundColor = color;
        button.style.backgroundColor = color;
        text.style.color = color;
    }
    randomColors.forEach(changeColor);
    //console.log(randomColors);
    //button.style.color = '#FFFFFFFF';
    button.textContent = "Nouvelle Citation";
}
let buttonClick = document.querySelector(".button");
buttonClick.addEventListener("click", change);