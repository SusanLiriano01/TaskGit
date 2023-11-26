document.getElementById("calculadoraForm").addEventListener("submit", function(calcularResultado) {
    calcularResultado.preventDefault(); 
  
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var operacion = document.getElementById("operacion").value;
    var resultado;
  
    if (operacion === "+") {
      resultado = numero1 + numero2;
    } else if (operacion === "-") {
      resultado = numero1 - numero2;
    } else if (operacion === "*") {
      resultado = numero1 * numero2;
    } else if (operacion === "/") {
      resultado = numero1 / numero2;
    }
  
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
});

alert("Bienvenido a mi calculadoraaaa!");
