import FlashCardSet from "./flashcardSet.js";
import FlashCard from "./flashcard.js";
// * This file serves to read the users flashcard file
document.body.onload = main;
const uploadDiv = document.createElement("div");
const uploadText = document.createElement("p");
const uploadInput = document.createElement("input");
const uploadSubmit = document.createElement("button");
export var cardSet = new FlashCardSet;
function main() {
    addElements();
}
function addElements() {
    // Code for file input
    uploadDiv.id = "uploadDiv";
    uploadText.id = "uploadText";
    uploadText.textContent = "Please upload your flashcard set. See 'help' for syntax";
    uploadInput.id = "uploadBtn";
    uploadInput.type = "file";
    uploadSubmit.id = "uploadSubmit";
    uploadSubmit.textContent = "Submit";
    uploadDiv.appendChild(uploadText);
    uploadDiv.appendChild(uploadInput);
    uploadDiv.appendChild(uploadSubmit);
    document.body.appendChild(uploadDiv);
}
function readFile() {
    var _a;
    const file = (_a = uploadInput.files) === null || _a === void 0 ? void 0 : _a.item(0);
    if (file === null)
        return;
    const reader = new FileReader;
    reader.readAsText(file);
    reader.onload = function (event) {
        var _a;
        let text = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
        let lines = text.split('\n');
        let separator = null;
        if (lines[0].indexOf("#separator:") === 0) {
            separator = wordToSeparator(lines[0].substring(10, lines[0].length));
        }
        for (let iii = 0; lines.length > iii; iii++) {
            if (lines[iii].substring(0, 1) === "#" || lines[iii].length === 0)
                break;
            let card = makeCard(lines[iii], separator);
            if (card === null)
                return;
            cardSet.cards[iii] = card;
            cardSet.length += 1;
        }
        cardSet.complete = true;
    };
}
//@param fullCard is both sides of the card passed in on a line
function makeCard(fullCard, separator) {
    if (separator === null) {
        separator = getAnkiSeparator(fullCard);
        if (separator === null) {
            generateErrForUser("Please use a supported separator. See 'help' for a list of valid options");
            console.log("Failed to determine card separator");
            return null;
        }
    }
    let separatorIndex = fullCard.indexOf(separator);
    let front = fullCard.substring(0, separatorIndex);
    let back = fullCard.substring(separatorIndex + 1, fullCard.length);
    let card = new FlashCard(front, back);
    return card;
}
function getAnkiSeparator(input) {
    let separators = ["\t", "|", ";", ":", ",", " "];
    for (let iii = 0; 6 > iii; iii++) {
        if (input.indexOf(separators[iii]) >= 0)
            return separators[iii];
    }
    return null;
}
function wordToSeparator(word) {
    let separators = ["\t", "|", ";", ":", ",", " "];
    let separatorWords = ["tab", "pipe", "semicolon", "colon", "comma", "space"];
    for (let iii = 0; 6 > iii; iii++) {
        if (word.indexOf(separatorWords[iii]) >= 0)
            return separators[iii];
    }
    return null;
}
function generateErrForUser(message) {
    let existingErrMsg = document.getElementById("errMsg");
    if (existingErrMsg != null) {
        existingErrMsg.textContent = message;
        return;
    }
    let newErrMsg = document.createElement("p");
    newErrMsg.id = "errMsg";
    newErrMsg.textContent = message;
    newErrMsg.style.color = "red";
    newErrMsg.style.fontSize = "50px";
    document.body.appendChild(newErrMsg);
}
uploadSubmit.addEventListener("click", readFile);
