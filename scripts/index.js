
// @todo: Темплейт карточки
const cardList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;
const addButton = document.querySelector('.profile__add-button');



initialCards.forEach(element => {
    const card = createCard(element);
    cardList.append(card);

});
//Я не понял про какой хендлер речь идет. Перечитал теорию, там не описано, в задании тоже. Подскажите, пожалуйста как им пользоваться.
function createCard(cardData){ 
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteBtn = cardElement.querySelector('.card__delete-button');
    const cardImg = cardElement.querySelector('.card__image');
    cardElement.querySelector('.card__title').textContent = cardData.name;
    cardImg.src = cardData.link;
    cardImg.alt = cardData.name;
    deleteBtn.addEventListener('click', () => deleteCard(deleteBtn));
    return cardElement;
}

function deleteCard(deleteBtn) {
    const listItem = deleteBtn.closest('.card');
    listItem.remove()
}


// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
