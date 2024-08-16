const categoryList = document.getElementById('categoryList');
const countryCards = document.querySelectorAll('.country_card');

categoryList.addEventListener('click', (event) => {
    const selectedCategory = event.target.dataset.category;

//     // Показываем/скрываем карточки в зависимости от выбранной категории
    countryCards.forEach((card) => {
        const cardCategories = card.dataset.categories.split(' ');

        if (cardCategories.includes(selectedCategory) || selectedCategory === undefined) {
            card.style.display = 'flex';
            console.log('True')
        } 
        else if (selectedCategory === 'remove' || selectedCategory === 'otmenit' ) {
            card.style.display = 'flex';
        }
        else {
            card.style.display = 'none';
        }
    });
});


try {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', filterCards);
    
    function filterCards() {
      const searchTerm = searchInput.value.toLowerCase();
    
      countryCards.forEach(card => {
        const cardName = card.querySelector('.name').textContent.toLowerCase();
    
        if (cardName.includes(searchTerm)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }
} catch (error) {
    console.error("input none")
}


const tourCards = document.querySelectorAll('.tour_card');

categoryList.addEventListener('click', (event) => {
    const selectedCategory = event.target.dataset.category;

//     // Показываем/скрываем карточки в зависимости от выбранной категории
    tourCards.forEach((card) => {
        const cardCategories = card.dataset.categories.split(' ');

        if (cardCategories.includes(selectedCategory) || selectedCategory === undefined) {
            card.style.display = 'block';
        } 
        else if (selectedCategory === 'remove' || selectedCategory === 'otmenit' ) {
            card.style.display = 'block';
        }
        else {
            card.style.display = 'none';
        }
    });
});