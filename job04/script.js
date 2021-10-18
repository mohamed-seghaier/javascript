window.addEventListener("DOMContentLoaded", init);

function init() {

    const helloButton = document.getElementById("button");
    helloButton.addEventListener("click", addone);

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