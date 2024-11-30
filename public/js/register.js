const mensajeError = document.querySelector(".error");

document.getElementById("register-form").addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevenir el envío estándar del formulario

  // Capturar los valores del formulario
  const user = e.target.user.value.trim();
  const email = e.target.email.value.trim();
  const password = e.target.password.value.trim();

  // Validación simple en el cliente
  if (!user || !email || !password) {
    console.error("Todos los campos son obligatorios");
    mensajeError?.classList?.remove("escondido");
    return;
  }

  try {
    // Enviar datos al servidor
    const res = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user, email, password })
    });

    if (!res.ok) {
      console.error("Error en la solicitud:", res.statusText);
      mensajeError?.classList?.remove("escondido");
      return;
    }

    const resJson = await res.json();

    // Redirigir en caso de éxito
    if (resJson.redirect) {
      window.location.href = resJson.redirect;
    }
  } catch (error) {
    console.error("Error en el cliente:", error);
    mensajeError?.classList?.remove("escondido");
  }
});
