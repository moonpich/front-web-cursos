const headers = {
    "Content-Type": "application/json",
};
export const specificCourse = async ({ course }) => {
    const request = await fetch(`http://localhost:8080/api/course/specific/${course}`, {
        headers: headers,
        credentials: "include",
        method: "GET",
    });

    if (!request.ok) {
        return null;
    }

    const responseJson = await request.json();
    return responseJson.response;
};

const suscribe = async ({ user, course }) => {
    const suscribeObj = {
        id_user: user,
        id_course: course,
    };

    const request = await fetch("http://localhost:8080/api/intersection/suscribe", {
        method: "POST",
        headers: headers,
        credentials: "include",
        body: JSON.stringify(suscribeObj),
    });

    if (!request.status !== 201) {
        return false;
    }

    return true;
};
