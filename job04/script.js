window.addEventListener("DOMContentLoaded", init);

function init() {

    const button = document.getElementById("button");
    button.addEventListener("click", addone);

    function addone() {
        if (document.getElementById("compteur") != null) {
            let compteur = document.getElementById('compteur');
            let tmp = compteur.innerText;
            tmp = parseInt(tmp)
            tmp += 1;

            compteur.innerHTML = tmp;
            console.log(tmp)
        }
    }
}