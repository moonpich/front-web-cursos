import { login } from "../api/auth.api.mjs";
import { specificCourse, suscribe } from "../api/course.api.mjs";

function showCourse() {
    document.addEventListener("DOMContentLoaded", async () => {
        const details = document.getElementById("details");
        const url = window.location.search;

        const params = new URLSearchParams(url);

        const idCourse = params.get("course");

        const request = await specificCourse({ course: idCourse });

        if (request === null) {
            const div = document.createElement("Message");
            div.textContent = "No existe el curso";
            details.appendChild(div);
        }
        const { id, name, duration, syllabus, description, category } = request;
        document.title = name;

        details.innerHTML = `
         <div class="course-header">
         <h1>${name}</h1>
           <input type="hidden" id="id_course" name="id_course" value="${id}" />
         <p>Duración: ${duration}</p>
        </div>
        <div class="course-details">
        <h2>Descripción</h2>
        <p>${description}.</p>
        <h2>Temario</h2>
        <p>1. ${syllabus}</p>
        </div>
        <button class="course-status inactive" id="btn_suscribe" >
            Incribirse
        </button>
    `;
    });
}

function btnEventSuscribe() {
    document.addEventListener("click", async (event) => {
        if (event.target && event.target.id === "btn_suscribe") {
            await logicSuscribe();
        }
    });
}

async function logicSuscribe() {
    const urlSuscribe = window.location.search;

    const urlParams = new URLSearchParams(urlSuscribe);

    const id_course = urlParams.get("course");

    const user = localStorage.getItem("details");

    console.log(user);

    if (user === null || user === "" || user === undefined) {
        Toastify({
            text: "Por favor inicia sesion.",
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "rgba(239, 68, 68, 0.5)",
            },
        }).showToast();
        return;
    }
    const requestSuscribe = await suscribe({ user: user, course: id_course });

    if (requestSuscribe) {
        Toastify({
            text: "Error al inscribirse al curso. Intentelo mas tarde.",
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "rgba(239, 68, 68, 0.5)",
            },
        }).showToast();
        return;
    }
    Toastify({
        text: "Inscripcion hecho. Revisa tu perfil para verificar.",
        duration: 3000,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "rgba(0, 173, 181, 0.4)",
        },
    }).showToast();
    return;
}
function getCookie(name) {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();

        if (cookie.startsWith(name + "=")) {
            return cookie.substring(name.length + 1);
        }
    }

    return null;
}

function getCookieValue(cookieName) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === cookieName) {
            return value;
        }
    }
    return null;
}
showCourse();

btnEventSuscribe();

export default login;
