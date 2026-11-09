document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form reload langsung

    const inputUsername = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Pengecekan sesuai ketentuan TR
    if (inputUsername === 'admin' && inputPassword === 'admin123') {
        // Jika benar, masuk ke halaman utama (ganti 'index.html' dengan file halaman utama Anda)
        window.location.href = 'index.html';
    } else {
        // Jika salah, tampilkan pesan bahwa login gagal
        errorMessage.textContent = 'Login gagal! Username atau password salah.';
        errorMessage.style.display = 'block';
    }
});
