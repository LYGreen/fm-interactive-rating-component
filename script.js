/** @type {HTMLElement} */
const form = document.getElementById('form');

/** @type {HTMLElement} */
const ratingState = document.getElementById('rating-state');

/** @type {HTMLElement} */
const thankYouState = document.getElementById('thank-you-state');

/** @type {HTMLElement} */
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const item = data.get('item');
    if (item != null) {
        ratingState.style.display = 'none';
        thankYouState.style.display = 'flex';
        result.textContent = item.toString();
    }
});
