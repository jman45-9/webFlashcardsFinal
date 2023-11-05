export default class FlashCardSet {
    constructor() {
        this.length = 0;
        this.cards = [];
        this.complete = false;
    }
    addFlashcard(newCard) {
        this.cards.push(newCard);
        length++;
    }
}
