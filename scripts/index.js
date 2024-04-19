
// @todo: Темплейт карточки
const cardList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;
const addButton = document.querySelector('.profile__add-button');


addButton.addEventListener('click', () => addCard());

initialCards.forEach(element => {
    const card = createCard(element);
    cardList.append(card);

});

function createCard(el){
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteBtn = cardElement.querySelector('.card__delete-button');
    cardElement.querySelector('.card__title').textContent = el.name;
    cardElement.querySelector('.card__image').src = el.link;
    cardElement.querySelector('.card__image').alt = el.name;
    deleteBtn.addEventListener('click', () => deleteCard(deleteBtn));
    return cardElement;
}

function deleteCard(deleteBtn) {
    const listItem = deleteBtn.closest('.card');
    listItem.remove()
    counter -= 1;
}


// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
