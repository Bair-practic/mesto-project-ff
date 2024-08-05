//добавление карточки

export function openModal(popup){
    if (!popup.classList.contains('popup_is-opened')){
        popup.classList.add('popup_is-opened');
        popup.addEventListener('click', closeByClickOverlay);
        document.addEventListener('keydown', closeByEscape);

    
    }
}

function closeByClickOverlay(evt){
    if (evt.target.classList.contains('popup__close')){
        closeModal(evt.currentTarget);
    };
    if (evt.target.classList.contains('popup')){
        closeModal(evt.currentTarget);
    };
};

function closeByEscape(evt){
    if (evt.key === 'Escape'){
        const popup = document.querySelector('.popup_is-opened');
        closeModal(popup);        
    }
}

export function closeModal(popup){
    if (popup.classList.contains('popup_is-opened')){
        popup.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', closeByEscape);
        popup.removeEventListener('click', closeByClickOverlay);
    };
    
}
