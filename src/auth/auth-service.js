export const userService = {
    login,
    logout
};
function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch('http://localhost:8000/api/login', requestOptions)
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
export default login;