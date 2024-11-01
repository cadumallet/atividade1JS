alert("Digite 3 valores para fazer a soma")
  const num1 = Number (prompt ("Primeiro número: "));
  const num2 = Number (prompt ("Segundo número: "));
  const num3 = Number (prompt ("terceiro número: "));
  
  const final = ( num1 + num2 + num3);
  document.getElementById("resultado").innerHTML = "O resultado é: " + final ;