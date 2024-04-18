
// @todo: Темплейт карточки
const cardList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;
const addButton = document.querySelector('.profile__add-button');

let counter = 0;


addButton.addEventListener('click', () => addCard());

function addCard(){
    if (counter <= 5){
        const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
        const deleteBtn = cardElement.querySelector('.card__delete-button');

        cardElement.querySelector('.card__title').textContent = initialCards[counter].name;
        cardElement.querySelector('.card__image').src = initialCards[counter].link;
        deleteBtn.addEventListener('click', () => deleteCard(deleteBtn));
        cardList.append(cardElement);
        counter += 1;
    }
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
