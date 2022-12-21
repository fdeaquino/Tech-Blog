async function signupHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({

                username,
                password
            }),
            headers: {'Content-type': 'application/json'}
        });
        if (response.ok) {
            console.log('Sign Up Successful');
            document.location.replace('/dashboard');
        } else {
            alert('That username is already taken! Choose another one.');
        }
    }
};

document.querySelector('#signup-form').addEventListener('submit', signupHandler);