export const userService = {
    login,
    logout
};
function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ email, password })
    };

    return fetch('http://localhost:8000/api/login', requestOptions)
    .then(handleResponse)
        .then(user => {
           if (user) {
            user.authdata = window.btoa(email + ':' + password);
            localStorage.setItem('user', JSON.stringify(user));
           
            }
        return user;
        });
}
function logout() {
    localStorage.removeItem('user');
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        console.log(data)
        return data;
    });
}



export default login;