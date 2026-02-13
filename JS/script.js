window.onload = function() {

    let userName = prompt("Masukkan nama Anda:");

    if (!userName) {
        userName = "Guest";
    }

    let welcomeText = document.getElementById("welcome-text");

    welcomeText.innerHTML = "Hi " + userName + ", Welcome To Website";

};