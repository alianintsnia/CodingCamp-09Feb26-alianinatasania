window.onload = function() {

    let userName = prompt("Masukkan nama Anda:");

    if (!userName) {
        userName = "Guest";
    }

    let welcomeText = document.getElementById("welcome-text");

    console.log(welcomeText);

    welcomeText.innerHTML = "TES BERHASIL" + userName;

};