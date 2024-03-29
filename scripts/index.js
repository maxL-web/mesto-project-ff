const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.places__list');



function createCard(cardContent, deleteHandler) {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardDeleteBtn = cardElement.querySelector('.card__delete-button');

    cardElement.querySelector('.card__title').textContent = cardContent.name;
    cardElement.querySelector('.card__image').src = cardContent.link;

    cardDeleteBtn.addEventListener('click', function (evt) {
        deleteHandler(evt);
    });
    return cardElement
}

function deleteCard(e) {
    e.target.closest('.places__item').remove();
}

function renderCards() {
    initialCards.forEach(function (cardContent) {
        cardList.append(createCard(cardContent, deleteCard));
    });
}

renderCards()



