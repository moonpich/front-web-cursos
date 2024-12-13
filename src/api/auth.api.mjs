const headers = {
    "Content-Type": "application/json",
};

export const login = async ({ mail, password }) => {
    const bodyJson = {
        email: mail,
        password: password,
    };

    const request = await fetch("http://localhost:8080/api/auth/login", {
        headers: headers,
        method: "POST",
        credentials: "include",
        body: JSON.stringify(bodyJson),
    });

    if (!request.ok) {
        return false;
    }

    const responseJson = await request.json();

    const { response } = responseJson;

    localStorage.setItem("details", response);

    console.log(`${response}  : \n ${responseJson}`);

    return true;
};

export const admin = async ({ mail, password }) => {
    const authObj = {
        email: mail,
        password: password,
    };
    const request = await fetch("http://localhost:8080/api/auth/admin", {
        headers: headers,
        method: "POST",
        body: JSON.stringify(authObj),
        credentials: "include",
    });

    if (request.status !== 200) return false;

    return true;
};

export const register = async ({ name, email, lastname, phone, password }) => {
    const registerBody = {
        name: name,
        lastname: lastname.length === 0 ? "" : lastname,
        email: email,
        password: password,
        phone: phone,
    };

    const request = await fetch("http://localhost:8080/api/auth/register", {
        headers: headers,
        body: JSON.stringify(registerBody),
        credentials: "include",
        method: "POST",
    });

    if (request.status !== 201) {
        return false;
    }

    const jsonReponse = await request.json();
    console.log(jsonReponse);
    return true;
};

export const recoveryPasswordByEmail = async ({ email }) => {
    const objBody = {
        email: email,
    };
    const request = await fetch("http://localhost:8080/api/auth/recovery", {
        method: "POST",
        body: JSON.stringify(objBody),
        headers: headers,
        credentials: "include",
    });

    if (!request.ok) {
        return false;
    }
    const response = await request.json();

    console.log(response);

    return true;
};

export const sendVerifyCode = async ({ code }) => {
    const request = await fetch(`http://localhost:8080/api/auth/code/${code}`, {
        headers: headers,
        credentials: "include",
    });

    if (!request.ok) {
        return false;
    }
    const response = await request.json();
    const { name, email } = response;
    return {
        name: name,
        email: email,
    };
};

export const changePassword = async ({ email, newPassword }) => {
    const paswordObj = {
        email: email,
        password: newPassword,
    };
    const request = await fetch("http://localhost:8080/api/auth/password", {
        method: "post",
        headers: headers,
        body: JSON.stringify(paswordObj),
        credentials: "include",
    });

    if (!request.ok) return false;

    return true;
};
