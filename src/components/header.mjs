document.addEventListener("DOMContentLoaded", async () => {
    const header = document.getElementById("header");
    const divImage = document.createElement("div");
    divImage.classList.add("header__nav");
    divImage.innerHTML = `<img src="../../public/img/log-3d.png" alt="Logo" class="header__img-logo" />
`;
    const nav = document.createElement("nav");

    nav.classList.add("header__nav");

    nav.innerHTML = `<a href="../auth/register.html" class="header__a header__a--border header__a--text">Registrarse</a>
                <a href="../auth/login.html" class="header__a header__a--bg header__a--btn">Iniciar sesión</a>`;

    header.appendChild(divImage);

    header.appendChild(nav);
});
