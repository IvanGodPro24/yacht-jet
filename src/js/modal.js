const MobMenuOverlay = document.querySelector('.mob-menu-overlay');
const burgerBtn = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.close-btn');

function openModal() {
  MobMenuOverlay.classList.add('is-open');
}

function closeModal() {
  MobMenuOverlay.classList.remove('is-open');
}

burgerBtn.addEventListener("click", openModal)

closeBtn.addEventListener("click", closeModal)