import { randomCouses } from "./src/api/index.api.mjs";

document.addEventListener("DOMContentLoaded", async () => {
    const slider = document.getElementById("courses");

    const courses = await randomCouses();

    if (courses === null) {
        for (let index = 0; index <= 3; index++) {
            let div = document.createElement("div");
            div.innerHTML = `<h4>Error al hacer mostrar los cursos</h4>`;
            slider.appendChild(div);
        }
        return;
    }

    let counter = 1;
    courses.forEach((item) => {
        let { id, name, duration, syllabus, description, category } = item;
        const div = document.createElement("div");
        div.classList.add("course-card");
        div.innerHTML = `
             <h2 class="course-name">${name}</h2>
        <p class="course-duration">Duración: ${duration}</p>
        <p class="course-syllabus">Temario: ${syllabus}</p>
         <p class="course-description">${description}.</p>
         <span class="course-category">Categoría: ${category.name}</span>
        <a href="/src/course/course.html?course=${id}" class="course-btn" id="${counter}">Ver más</a>

        `;
        slider.appendChild(div);
        counter++;
    });
});
