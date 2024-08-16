const tourCards = document.querySelectorAll('.tour_card_content');
const categoryList = document.getElementById('categoryList');

categoryList.addEventListener('click', (event) => {
    const selectedCategory = event.target.dataset.category;

    tourCards.forEach((card) => {
        const cardCategories = card.querySelector('.tour_card').dataset.categories.split(' ');

        if (cardCategories.includes(selectedCategory) || selectedCategory === undefined) {
            card.style.display = 'block';
            card.classList.add('col-lg-4');
            card.classList.add('col-md-6');
        } 
        else if (selectedCategory === 'remove' || selectedCategory === 'otmenit') {
            card.style.display = 'block';
            card.classList.add('col-lg-4');
            card.classList.add('col-md-6');
        }
        else {
            card.style.display = 'none';
            card.classList.remove('col-lg-4');
            card.classList.remove('col-md-6');
        }
    });
});