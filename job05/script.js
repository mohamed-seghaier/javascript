window.addEventListener('keyup', (e) => {
    let myElement = document.getElementById("keylogger");
    if (myElement === document.activeElement) {
        myElement.value += e.key;

    } else {
        myElement.value += e.key;
    }

});