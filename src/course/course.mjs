import { specificCourse } from "../api/course.api.mjs";

document.addEventListener("DOMContentLoaded", async () => {
    const details = document.getElementById("details");
    const url = window.location.search;

    const params = new URLSearchParams(url);

    const idCourse = params.get("course");

    const request = await specificCourse({ course: idCourse });

    if (request === null) {
        const div = document.createElement("Message");
        div.textContent = "NO existe el curso";
        details.appendChild(div);
    }

    const { id, name, duration, syllabus, description, category } = request;

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
        <div class="course-status inactive">
            Incribirse
        </div>
    `;
});
