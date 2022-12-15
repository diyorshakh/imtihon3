function noname() {
    let count = document.getElementById("input_number").value
    let on = ( count - count % 10) / 10
    let birlik;
    let onlik;
    switch (on) {
        case 0: birlik = "";
            break;
        case 1: birlik = "o'n";
            break;
        case 2: birlik = "yigirma";
            break;
        case 3: birlik = "o'ttiz";
            break;
        case 4: birlik = "qirq";
            break;
        case 5: birlik = "ellik";
            break;
        case 6: birlik = "oltmish";
            break;
        case 7: birlik = "yetmish";
            break;
        case 8: birlik = "sakson";
            break;
        case 9: birlik = "to'qson";
            break;
    }
    let one = count % 10
    switch (one) {
        case 0: onlik = "";
            break;
        case 1: onlik = "bir";
            break;
        case 2: onlik = "ikki";
            break;
        case 3: onlik = "uch";
            break;
        case 4: onlik = "to`rt";
            break;
        case 5: onlik = "besh";
            break;
        case 6: onlik = "olti";
            break;
        case 7: onlik = "yetti";
            break;
        case 8: onlik = "sakkiz";
            break;
        case 9: onlik = "to'qqiz";
            break;
    }
    document.getElementById('result').innerText = birlik+" "+onlik
    }
noname();