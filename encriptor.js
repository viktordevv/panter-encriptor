function encriptar(palabra) {
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
    document.getElementById("resultado-textarea").value = resultado;
  }
  
  function desencriptar(palabraEncriptada) {
    let resultado = "";
    for (let i = 0; i < palabraEncriptada.length; i++) {
      switch (palabraEncriptada.slice(i, i + 5)) {
        case "enter":
          resultado += "e";
          i += 4;
          break;
        case "imes":
          resultado += "i";
          i += 3;
          break;
        case "ai":
          resultado += "a";
          i += 1;
          break;
        case "ober":
          resultado += "o";
          i += 3;
          break;
        case "ufat":
          resultado += "u";
          i += 3;
          break;
        default:
          resultado += palabraEncriptada[i];
      }
    }
    document.getElementById("resultado-textarea").value = resultado;
  }