const authProvider = {
    login: ({ username, password }) =>  {
        const request = new Request('http://95.216.227.58:31861/auth', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                // console.log(response.json())
                return response.json();
            })
            .then(({ access_token}) => {
                localStorage.setItem('access_token', access_token);
                console.log(access_token);
            });
    },

    logout: () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('permissions');
        return Promise.resolve();
    },
    checkError: error => {
        // ...
    },
    checkAuth: () => {
        return localStorage.getItem('access_token') ? Promise.resolve() : Promise.reject();
    },
    getPermissions: () => {
        const role = localStorage.getItem('permissions');
        return role ? Promise.resolve(role) : Promise.reject();
    }
    // ...
};

export default authProvider;