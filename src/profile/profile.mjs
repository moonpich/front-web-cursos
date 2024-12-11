import { getInfo } from "../api/user.api.mjs";
import { myCourses } from "../api/course.api.mjs";

document.addEventListener("DOMContentLoaded", async () => {
    const user = localStorage.getItem("details");

    if (user === "" || user === null || user === undefined) {
        window.location.href = "../auth/login.html";
    }

    const nameH2 = document.getElementById("name");

    const emailP = document.getElementById("correo");
    const phoneP = document.getElementById("phoneP");

    const info = await getInfo({ user: user });
    if (info === null) {
        window.location.href = "../auth/login.html";
    }

    const { name, lastname, email, phone } = info;

    nameH2.textContent = `${name} ${lastname}`;

    emailP.textContent = email;
    phoneP.textContent = `Telefono: ${phone}`;

    showEnrollCourses({ user: user });
});

async function showEnrollCourses({ user }) {
    const divContaier = document.getElementById("enrolled");

    const specifCouse = document.createElement("div");
    specifCouse.classList.add("curso-card");
    const courses = await myCourses({ user: user });

    if (courses === null) {
        divContaier.innerHTML = `  
        <div class="curso-card">
        <h4>No estas inscrito en ningun curso</h4>
        <p>Puedes revisar nuestro catalogo</p>
        </div>`;
        return;
    }

    courses.forEach((course) => {
        let { name, duration, id } = course;
        const specifCouse = document.createElement("div");
        specifCouse.classList.add("curso-card");
        specifCouse.innerHTML = `
        <h4>${name}</h4>
        <p>${duration}</p>
        <button>Desuscribirse</button>
        <input type="hidden" values="${id}" />
        `;
        divContaier.appendChild(specifCouse);
    });
    return;
}
