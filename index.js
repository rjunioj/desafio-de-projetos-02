//subtrai valor de vitoria com o derrota
function vitoriaDerrota(vitoria, derrota) {
    return vitoria - derrota;
  }
  
  let nome = "Fulano"; 
  let total = vitoriaDerrota(70, 11); // resultado da function
  let nivel;
  
  if (total < 10) {
      nivel = "Ferro";
  } else if (total <= 20) {
      nivel = "Bronze";
  } else if (total <= 50) {
      nivel = "Prata";
  } else if (total <= 80) {
      nivel = "Ouro";
  } else if (total <= 90) {
      nivel = "Diamante";
  } else if (total <= 100) {
      nivel = "Lendário";
  } else {
      nivel = "Imortal";
  }
  console.log("O Herói " + nome + " tem o saldo de " + total + " está no nível de " + nivel);