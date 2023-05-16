function encriptar(palabrainput) {
  let palabra = palabrainput;
  let resultado = "";
  for (let i = 0; i < palabra.length; i++) {
    switch (palabra[i]) {
      case "e":
        resultado += "enter";
        break;
      case "i":
        resultado += "imes";
        break;
      case "a":
        resultado += "ai";
        break;
      case "o":
        resultado += "ober";
        break;
      case "u":
        resultado += "ufat";
        break;
      default:
        resultado += palabra[i];
    }
  }
  document.getElementById("resultadotextarea").value = resultado;
}

function desencriptar(palabraEncriptada) {
  let resultado = "";
  let i = 0;
  while (i < palabraEncriptada.length) {
    let palabraDesencriptada = "";
    let j = i;
    while (j < palabraEncriptada.length) {
      let substr = palabraEncriptada.slice(i, j + 1);
      switch (substr) {
        case "enter":
          palabraDesencriptada += "e";
          i = j + 1;
          break;
        case "imes":
          palabraDesencriptada += "i";
          i = j + 1;
          break;
        case "ai":
          palabraDesencriptada += "a";
          i = j + 1;
          break;
        case "ober":
          palabraDesencriptada += "o";
          i = j + 1;
          break;
        case "ufat":
          palabraDesencriptada += "u";
          i = j + 1;
          break;
      }
      j++;
    }
    if (palabraDesencriptada === "") {
      resultado += palabraEncriptada[i];
      i++;
    } else {
      resultado += palabraDesencriptada;
    }
  }
  document.getElementById("resultadotextarea").value = resultado;

  function copiarResultado() {
    const textarea = document.getElementById("resultadotextarea");
    textarea.select();
    document.execCommand("copy");
  }
}
