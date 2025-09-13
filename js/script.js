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