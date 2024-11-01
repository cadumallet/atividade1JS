alert("Digite dois números para fazer um número de metros para transformar em centimetros")
  const num1 = Number (prompt ("Número:"));
 
  const final = ( num1 * 100);
  document.getElementById("resultado").innerHTML = "O resultado é: " + final ;