let mass = [3, 5, 22, 5, 7, 2, 45, 75];
let arrqiymati = document.getElementById('qiymat');
let sum = 0;
for (let i = 0; i < mass.length; i++) {
      let yigindi = mass[i] + 3;
      sum += yigindi;
}
arrqiymati.innerHTML = sum;