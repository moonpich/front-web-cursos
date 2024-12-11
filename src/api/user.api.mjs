const headers = {
    "Content-Type": "application/json",
};

export const getInfo = async ({ user }) => {
    const id = parseInt(user);
    const request = await fetch(`http://localhost:8080/api/user/info/${id}`, {
        method: "GET",
        credentials: "include",
        headers: headers,
    });

    console.log(request.status);
    if (!request.ok) {
        return null;
    }

    const jsonResponse = await request.json();

    return jsonResponse.response;
};
