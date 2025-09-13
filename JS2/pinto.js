alert("ACORDAAAAAA!!! CARA!!!");
let vara = prompt("QUANTOS CM VOCE TEM?");
let tamanho;
 switch (vara) {
    case 1:
        tamanho = `VOCE TEM PIRU DE ${vara} cm`;
        break
    default:
        tamanho = "SUA VARA CAIU";
        break
}

document.getElementById("p1").textContent = tamanho
