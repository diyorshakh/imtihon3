let lavozim_btn = document.getElementById('lavozim_btn');
let lavozimga_javob = document.getElementById('lavozimga_javob');
let lavozim = document.getElementById('lavozim');
let forma = document.querySelector('#form');
forma.onsubmit = function (event) {
    event.preventDefault();
}
lavozim_btn.addEventListener('click', () => {
    console.log(lavozim.value);
      if (lavozim.value === 'ishchi') {
            lavozimga_javob.innerHTML = 'Hello';
      }
      else if (lavozim.value === 'director') {
            lavozimga_javob.innerText = 'Greetings';
      }
      else if (lavozim.value === '') {
            lavozimga_javob.innerHTML = 'No login'
      }
      else {
          lavozimga_javob.innerHTML = 'Bunday lavozim mavjud emas'
        }
});