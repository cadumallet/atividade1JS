alert("Digite dois números para fazer uma soma")
  const num1 = Number (prompt ("Primeiro número:"));
  const num2 = Number (prompt("Segundo número:"));
  const final = ( num1 + num2);
  document.getElementById("resultado").innerHTML = "O resultado é: " + final ;