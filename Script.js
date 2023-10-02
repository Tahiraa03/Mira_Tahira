document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Ambil data dari formulir
        const nama = document.getElementById("nama").value;
        const email = document.getElementById("email").value;
        const alamat = document.getElementById("alamat").value;
        const jumlah = document.getElementById("jumlah").value;

        // Validasi sederhana
        if (!nama || !email || !alamat || !jumlah) {
            alert("Harap isi semua kolom formulir.");
        } else {
            // Kirim data pemesanan ke server (anda dapat menambahkan logika ini di sini)
            
            // Tampilkan pesan sukses
            const pesanSukses = document.createElement("div");
            pesanSukses.className = "pesan-sukses";
            pesanSukses.textContent = "Pemesanan berhasil! Terima kasih telah berbelanja di toko kami.";
            
            // Bersihkan formulir
            form.reset();
            
            // Tambahkan pesan sukses ke halaman
            form.parentElement.appendChild(pesanSukses);
            
            // Hilangkan pesan sukses setelah beberapa detik (opsional)
            setTimeout(() => {
                pesanSukses.style.display = "none";
            }, 5000);
        }
    });
});
