const menu_section = document.getElementsByClassName('menu_section')[0];
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close_icon');

menu_section.addEventListener('click', () => {
     modal.style.display = "flex"
})

closeModal.addEventListener('click', () => {
     modal.style.display = "none"
})