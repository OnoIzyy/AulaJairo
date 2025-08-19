function iniciarAnimacao() {
    const foguete = document.getElementById("foguete");
    foguete.style.bottom = "100%"

    setTimeout(() => {
        foguete.style.bottom ="0";
    }, 4000);
}