let theme = 0

function changetheme() {
    theme = theme + 1
    if (theme % 2 == 0){
        document.body.style.background = 'black';
    }
    else {
        document.body.style.background = 'white';
    }
}