import login from "../api/auth.api.mjs";

const btnLogin = document.querySelector("#btnLogin");
const form = document.getElementById("login_form");

btnLogin.addEventListener("click", async (ev) => {
  const email = document.getElementById("mail").value.trim();
  const password = document.getElementById("password").value.trim();
  validateEmail(email, ev);
  validatePassword(password, ev);

  const response = await login({ mail: email, password: password });

  if (response) {
    window.location.href = "../../index.html";
    console.log(response);
  }

  Toastify({
    text: "El usuario no existe o hay un error en el servidor.",
    duration: 3000,
    close: true,
    gravity: "bottom",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "#ef4444",
    },
  }).showToast();
  ev.preventDefault();
});

function validateEmail(email, ev) {
  if (email.length === 0) {
    ev.preventDefault();
    Toastify({
      text: "Ingresa tu correo.",
      duration: 3000,
      close: true,
      gravity: "bottom",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "#ef4444",
      },
    }).showToast();

    return;
  }
}

function validatePassword(password, ev) {
  if (password.length === 0) {
    ev.preventDefault();
    Toastify({
      text: "Ingresa tu contrasena.",
      duration: 3000,
      close: true,
      gravity: "bottom",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "#ef4444",
      },
    }).showToast();

    return;
  }
}
