window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    const loginContainer = document.getElementById('loginContainer');

    // Sembunyikan animasi loading dan tampilkan kontainer login
    loading.style.display = 'none';
    loginContainer.classList.remove('hidden');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('User logged in:', { username, password });

    alert('Login successful!');
});
