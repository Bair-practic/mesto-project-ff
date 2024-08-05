
const cardTemplate = document.querySelector('#card-template').content;


export function createCard(cardData, openCardHandler, deleteHandler, likeHandler){ 
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteBtn = cardElement.querySelector('.card__delete-button');
    const cardImg = cardElement.querySelector('.card__image');
    const likeBtn = cardElement.querySelector('.card__like-button');
    cardElement.querySelector('.card__title').textContent = cardData.name;
    cardImg.src = cardData.link;
    cardImg.alt = cardData.name;
    deleteBtn.addEventListener('click', function(event) {
        deleteHandler(cardElement);
    });
    cardImg.addEventListener('click', function(evt){
        openCardHandler(evt);
    });

    likeBtn.addEventListener('click', function(evt){
        likeHandler(evt);
    });

    return cardElement;
}

export function deleteCard(card) {
    card.remove();
}

export function likeCard(evt){
    evt.target.classList.toggle('card__like-button_is-active');
}