
// @todo: Темплейт карточки
const cardList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;
const addButton = document.querySelector('.profile__add-button');

initialCards.forEach(cardData => {
    const card = createCard(cardData, deleteCard);
    cardList.append(card);

});
function createCard(cardData, deleteHandler){ 
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteBtn = cardElement.querySelector('.card__delete-button');
    const cardImg = cardElement.querySelector('.card__image');
    cardElement.querySelector('.card__title').textContent = cardData.name;
    cardImg.src = cardData.link;
    cardImg.alt = cardData.name;
    deleteBtn.addEventListener('click', function(event) {
        deleteHandler(event);
    });
    return cardElement;
}

function deleteCard(event) {
    const listItem = event.target.closest('.card');
    listItem.remove()
}


// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
