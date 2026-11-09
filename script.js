document.getElementById('loginForm').addEventListener('submit', function(kejadian) {
    kejadian.preventDefault(); // Mencegah halaman memuat ulang secara otomatis

    // Mengambil nilai dari input formulir
    const teksPengguna = document.getElementById('username').value;
    const kataKunci = document.getElementById('password').value;
    const pesanKesalahan = document.getElementById('error-message');

    // Pemeriksaan kata kunci dan nama pengguna
    if (teksPengguna === 'admin' && kataKunci === 'admin123') {
        // Jika data benar, arahkan ke halaman utama
        window.location.href = 'index.html';
    } else {
        // Jika data salah, tampilkan pesan peringatan
        pesanKesalahan.textContent = 'Login gagal! Username atau password salah.';
        pesanKesalahan.style.display = 'block';
    }
});
