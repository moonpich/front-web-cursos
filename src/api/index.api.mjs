const headers = {
    "Content-Type": "application/json",
};
export const randomCouses = async () => {
    const request = await fetch("http://localhost:8080/api/course/limit", {
        method: "GET",
        headers: headers,
        credentials: "include",
    });

    if (!request.ok) {
        return null;
    }
    const response = await request.json();

    return response.response;
};
