//добавление карточки

export function openModal(popup){
    if (!popup.classList.contains('popup_is-opened')){
        popup.classList.add('popup_is-opened');

        popup.addEventListener('click', function(evt){
            if (evt.target.classList.contains('popup__close')){
                closeModal(evt.currentTarget);
            };
            if (evt.target.classList.contains('popup')){
                closeModal(popup);
            };
        });

        document.addEventListener('keydown', function(evt){
            if (evt.key === 'Escape'){
                closeModal(popup);
            }
        });

    
    }
}

export function closeModal(popup){
    if (popup.classList.contains('popup_is-opened')){
        popup.classList.remove('popup_is-opened');
    }
}
