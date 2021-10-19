window.addEventListener('keyup', (e) => {
    let myElement = document.getElementById("keylogger");
    if (myElement === document.activeElement) {} else {
        myElement.value += e.key;
        myElement.value += e.key;
    }

});