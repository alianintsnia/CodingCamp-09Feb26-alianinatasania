// 1. Fungsi prompt nama saat halaman dimuat
window.onload = function() {
    let name = prompt("Halo! Masukkan nama kamu:");
    if (name) {
        document.getElementById("user-name").innerText = name;
    }
    document.getElementById("current-time").innerText = new Date().toString();
};

// 2. Logika Form Submission
const form = document.getElementById("message-form");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil data dari form
    const name = document.getElementById("input-name").value;
    const birth = document.getElementById("input-birth").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("input-message").value;

    // Tampilkan ke kotak hasil
    document.getElementById("res-name").innerText = name;
    document.getElementById("res-birth").innerText = birth;
    document.getElementById("res-gender").innerText = gender;
    document.getElementById("res-message").innerText = message;
    document.getElementById("current-time").innerText = new Date().toString();
    
    alert("Form berhasil dikirim!");
});