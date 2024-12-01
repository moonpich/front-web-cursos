import { register } from "../api/auth.api.mjs";

const btnRegister = document.querySelector("#btn_register");

btnRegister.addEventListener("click", async (ev) => {
    const mail = document.getElementById("mail").value.trim();
    const name = document.getElementById("name").value;
    const pass = document.getElementById("password").value.trim();
    const lastName = document.getElementById("lastname").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    const passwordValidate = validatePassword(pass, confirmPassword);
    if (!passwordValidate) {
        Toastify({
            text: "Debes ingresar la misma contrasena en ambos campos y debe ser menor a 100 caracteres",
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

        return;
    }

    if (!validateData(name, mail, lastName, phone, pass, ev)) return;

    const request = await register({ name: name, email: mail, lastname: lastName, phone: phone, password: pass });

    if (request) {
        Toastify({
            text: "Registro exitoso, redireccionando ...",
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "#00adb5",
            },
        }).showToast();
        setTimeout(() => {
            window.location.href = "./login.html";
        }, 1500);
        ev.preventDefault();
        return;
    }
    Toastify({
        text: "Error al registrarse, por favor intentelo de nuevo.",
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

function validateData(nombre, correo, apellidos, telefono, contrasana, ev) {
    const regexPhone = /^\d+$/;
    if (nombre.length === 0) {
        Toastify({
            text: "Debes ingresar un nombre y debe ser menor a 50 caracteres.",
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

        return false;
    }
    if (correo.length === 0 || correo.length > 50) {
        Toastify({
            text: "Debes ingresar un correo y debe ser menor a 50 caracteres.",
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

        return false;
    }
    if (apellidos.length > 40) {
        Toastify({
            text: "El apellido debe ser menor a 50 caracteres.",
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

        return false;
    }
    if (!regexPhone.test(telefono) || telefono.length > 10) {
        Toastify({
            text: "Debes ingresar un numero valido y no puede se mayor a 10 caracteres.",
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
        return false;
    }
    if (contrasana.length === 0 || contrasana.length > 100) {
        Toastify({
            text: "Debes ingresar un numero valido y no puede se mayor a 10 caracteres.",
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
        return false;
    }
    return true;
}

function validatePassword(contrasana, confirmarContrasena) {
    return contrasana === confirmarContrasena;
}
