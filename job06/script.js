window.addEventListener("DOMContentLoaded", init);

function init() {

    if (document.getElementById("zone"))
        document.getElementById("zone").hidden = true;


    const showbutton = document.getElementById("button");
    showbutton.addEventListener("click", show);
    const hidebutton = document.getElementById("button2");
    hidebutton.addEventListener("click", hide);

    function show() {
        if (document.getElementById("zone") != null) {
            document.getElementById("zone").hidden = false;
        }

    }


    function hide() {

        if (document.getElementById("zone") != null) {
            document.getElementById("zone").hidden = true;
        }
    }
}