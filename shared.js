const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const selectPlanButton = document.querySelectorAll('.plan button');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

selectPlanButton.forEach((element) => {
    element.addEventListener('click', () => {
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
});

const closeModal = () => {
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
};

backdrop.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    closeModal();
});
if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

toggleButton.addEventListener('click', () => {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});
