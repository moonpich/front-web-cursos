import { recoveryPasswordByEmail, sendVerifyCode } from "../api/auth.api.mjs";

const btnEmail = document.getElementById("email_btn");

btnEmail.addEventListener("click", async (ev) => {
    const inputEmail = document.getElementById("email").value;

    const form = document.getElementById("form_mail");
    const main = document.getElementById("main");

    validate(inputEmail, ev, 50, 0);
    const request = await recoveryPasswordByEmail({ email: inputEmail });
    if (!request) {
        Toastify({
            text: "Error por parte del servidor, por favor intentalo de nuevo.",
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

    Toastify({
        text: "Por favor revisa tu correo. Y ingresa el codigo enviado.",
        duration: 3000,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "#00adb5",
        },
    }).showToast();

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            document.title = "¡Tu codigo!";
        } else {
            document.title = "Cambia tu contra";
        }
    });
});

function validate(email, ev, max, min) {
    if (email.length === min) {
        Toastify({
            text: "Por favor ingresa el dato solicitado",
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
    if (email.length > max) {
        Toastify({
            text: `Debe ser menor de ${max} caracteres `,
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
    return true;
}

// function changeForm(form, main) {
//     form.remove();
//     const formCode = document.createElement("form");
//     formCode.id = "code";
//     formCode.method = "POST";
//     formCode.classList.add("main__form");
//     formCode.innerHTML = `<div class="main__form__delimiter">
//                     <h3 class="main__form__title" id="title">Ingresa tu codigo</h3>
//                 </div>
//                 <div class="main__form__delimiter">
//                     <label for="codigo" class="main__form__label" id="label_codigo">Codigo: </label>
//                     <input
//                         type="text"
//                         name="code"
//                         id="code"
//                         class="main__form__input"
//                         placeholder="*****"
//                         autofocus
//                     />
//                 </div>
//                 <div class="main__form__delimiter">
//                     <button type="button" class="main__form__btn" id="code_btn">
//                         Verificar
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="24"
//                             height="24"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             stroke-width="2"
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             class="lucide lucide-mail"
//                         >
//                             <rect width="20" height="16" x="2" y="4" rx="2" />
//                             <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//                         </svg>
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="24"
//                             height="24"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             stroke-width="2"
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             class="lucide lucide-mail-check"
//                         >
//                             <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
//                             <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//                             <path d="m16 19 2 2 4-4" />
//                         </svg>
//                     </button>
//                 </div>`;
//     main.appendChild(formCode);
//     const btnCode = document.getElementById("code_btn");

//     btnCode.addEventListener("click", async (ev) => {
//         const inputCode = document.getElementById("code").value;
//         validate(inputCode, ev, 10, 0);

//         const request = await sendVerifyCode(inputCode);

//         if (!request) {
//             Toastify({
//                 text: "Error  en el servidor, por favor intentalo de nuevo.",
//                 duration: 3000,
//                 close: true,
//                 gravity: "bottom",
//                 position: "right",
//                 stopOnFocus: true,
//                 style: {
//                     background: "#ef4444",
//                 },
//             }).showToast();
//             ev.preventDefault();
//             return;
//         }
//         setTimeout(() => {
//             window.location.href = "./contrasena.html";
//         }, 1500);
//     });
// }
