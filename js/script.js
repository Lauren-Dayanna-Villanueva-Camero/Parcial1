  // Botón Log in
  document.getElementById("btnLogin").addEventListener("click", function() {
    const usuario = document.getElementById("usuario").value;
    const clave = document.getElementById("clave").value;

    if (usuario && clave) {
      console.log("Usuario: " + usuario);
      console.log("Clave: " + clave);
    } else {
      console.log("Por favor complete los campos.");
    }
  });


  // Misión y vision
  const cardText = document.getElementById("cardText");
  const btnSize = document.getElementById("btnSize");
  const btnColor = document.getElementById("btnColor");

  btnSize.addEventListener("click", () => {
    if (cardText.style.fontSize === "20px") {
      cardText.style.fontSize = "14px"; 
    } else {
      cardText.style.fontSize = "20px";
    }
  });

  btnColor.addEventListener("click", () => {
    if (cardText.style.color === "red") {
      cardText.style.color = "black"; 
    } else {
      cardText.style.color = "red"; 
    }
  });