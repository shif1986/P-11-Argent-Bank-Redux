
export const signIn = async (email, password ) => {

 const response = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
        "content-type": "application/json",
        "accept": "application/json"
    },
  })

    return await response.json();
};

export const getUser = async (token) => {

    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "accept": "application/json",
            "Authorization": `Bearer ${token}`
        },
    })

    return await response.json();
};

export const editUser = async (username, token) => {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
            "content-type": "application/json",
            "accept": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            userName: username
        })
    })

    return await response.json();
}

