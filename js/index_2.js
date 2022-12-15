function calculateDays(){
    let d1 = document.getElementById("d1").value;
    let d2 = document.getElementById("d2").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time / (1000 * 60 * 60 * 24))
    document.getElementById("output").innerHTML="Farq " + days + " kun";
}
