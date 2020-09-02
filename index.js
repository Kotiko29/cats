import style from './src/assets/style/index.styl'; // импорт стилей

// Звездный рейтинг 
const ratingItemsList = document.querySelectorAll('.star-rating-item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);
ratingItemsArray.forEach(item => {
  item.addEventListener('click', () => {
    const {itemValue} = item.dataset;
    item.parentNode.dataset.totalValue = itemValue;
    
  });
});
