
// @todo: Темплейт карточки
const cardList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;
const addButton = document.querySelector('.profile__add-button');

let counter = 0;


addButton.addEventListener('click', function (){
    if (counterm <= 5){
        const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
        const deleteBtn = cardElement.querySelector('.card__delete-button');

        cardElement.querySelector('.card__title').textContent = initialCards[counter].name;
        cardElement.querySelector('.card__image').src = initialCards[counter].link;
        deleteBtn.addEventListener('click', function(event){
            deleteCard(event);
        } )
        cardList.append(cardElement);
        counter += 1;
    }
})

 function deleteCard(evt){
    console.log(evt.target);
    console.log(evt);
    cardList.remove(cardElement);
}



// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
