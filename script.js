window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    const loginContainer = document.getElementById('loginContainer');

    // Menunda penyembunyian animasi loading selama beberapa detik
    setTimeout(() => {
        loading.style.display = 'none';
        loginContainer.classList.remove('hidden');
    }, 10000); // Durasi 3000ms (3 detik)
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('User logged in:', { username, password });

    alert('Login successful!');
});