export const login = async ({url,mail,password}) => {

    const bodyJson = {
        email:mail,
        password: password
    };
    const headers = {
        "Content-Type": "application/json",
    };
    const request = await fetch(url, {
        headers:headers,
        method:'POST',
        credentials: 'include',
        body: JSON.stringify(bodyJson)
    });

    if (!request.ok) {
        return false;
    }
    const responseJson = await request.json();
    console.log(responseJson);

    return true;
}