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
