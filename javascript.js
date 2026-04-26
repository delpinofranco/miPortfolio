const btnHambur = document.getElementById("hambur");
const menuresposive = document.getElementById("menuresponsive");
const nav = document.getElementById("navResponsive");
const btnX = document.getElementById("x");

btnX.addEventListener("click", () => {
    const estado = window.getComputedStyle(menuresposive).display;

    if (estado !== "none") {
        btnX.style.display = "none";
        menuresposive.style.display = "none";
        btnHambur.style.display = "block";
        nav.style.display = "flex";
        
    }
});

btnHambur.addEventListener("click", () => {
    const estado = window.getComputedStyle(menuresposive).display;

    if (estado === "none") {
        menuresposive.style.display = "block";
        menuresposive.style.width = "100%";
        btnHambur.style.display = "none";
        btnX.style.display = "block";
        nav.style.display = "none";
        menuresposive.style.position="fixed";
        menuresposive.style.top = "0";
menuresposive.style.left = "0";
menuresposive.style.height = "auto";
    }
});