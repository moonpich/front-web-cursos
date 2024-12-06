import { changePassword } from "../api/auth.api.mjs";
const btnCode = document.getElementById("password_btn");

btnCode.addEventListener("click", async (ev) => {
    console.log("Click code");

    const url = window.location.search;

    const searchParam = new URLSearchParams(url);

    const email = searchParam.get("mail");

    const inputPassword = document.getElementById("password").value;

    validatePassword(inputPassword);

    const request = await changePassword({ email: email, newPassword: inputPassword });

    if (!request) {
        Toastify({
            text: "Error actualizar la contrasena.",
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

    Toastify({
        text: "Exito al cambiar contrasena. Redireccionando ...",
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
});

function validatePassword(pass) {
    if (pass.length === 0) {
        Toastify({
            text: "Ingresa tu nueva contrasena.",
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

    if (pass.length > 100) {
        Toastify({
            text: "Contrasena mayor a 100 caracteres.",
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

    return;
}
