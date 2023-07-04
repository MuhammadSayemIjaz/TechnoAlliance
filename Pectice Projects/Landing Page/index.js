const menu_section = document.getElementsByClassName('menu_section')[0];
const modal = document.getElementById('modal');
const modal1 = document.getElementsByClassName('menu_modal')[0];
const closeModal = document.getElementById('close_icon');
const toggle_btn = document.getElementById('toggle_btn')
const start_up_price = document.getElementById('start_up_price');
const classic_price = document.getElementById('classic_price');
const preminum_price = document.getElementById('preminum_price');

menu_section.addEventListener('click', () => {
     modal1.style.display = "flex";

})

closeModal.addEventListener('click', () => {
     modal.style.display = "none"
})

toggle_btn.addEventListener('click', () => {
     toggle_btn.classList.toggle('toggle_btn')
     if (toggle_btn.classList.contains('toggle_btn') === true){
          start_up_price.innerText = "60$ /year";
          preminum_price.innerText = "120$ /year";
          classic_price.innerText = "90$ / year";
     } else {
          start_up_price.innerText = "10$ /mon";
          preminum_price.innerText = "30$ /mon";
          classic_price.innerText = "49$ /mon";
     }
})