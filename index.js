
// Variáveis

let nameHero = 'Hercules';
let xpHero = 10000;

let nivel;

// Estrutura de decisão if/else.

if (xpHero <= 1000) {
    nivel = 'Ferro';
}else if (xpHero >= 1001 && xpHero <= 2000){
    nivel = 'Bronze';
}else if (xpHero >= 2001 && xpHero <= 5000){
    nivel = 'Prata';
}else if (xpHero >= 5001 && xpHero <= 7000){
    nivel = 'Ouro';
}else if (xpHero >= 7000 && xpHero <= 8001){
    nivel = 'Platina';
}else if (xpHero >= 8001 && xpHero <= 9000){
    nivel = 'Ascendente';
}else if (xpHero >= 9001 && xpHero <= 10000){
    nivel = 'Imortal';
}else{
    nivel = 'Radiante';
}

// Mensagem com nome e nível do Herói:

console.log(`O Herói de nome ${nameHero} está no nível de ${nivel}`);


