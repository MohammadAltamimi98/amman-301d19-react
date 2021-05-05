'use strict';
const container = document.getElementById('my-container')
const userInput = prompt("Enter your message");
checkForBadWords(userInput);


function checkForBadWords(userInput) {
    const pattern = /poo/;
    console.log(typeof (pattern));
    const matchBadWord = userInput.match(pattern);
    console.log(matchBadWord);

    // if (matchBadWord) {
    //     renderChatMessage('please dont use any bad language!')
    // } else {
    //     renderChatMessage(userInput);
    // }

    if (matchBadWord) {

        let newWord = '';
        for (let index = 0; index < matchBadWord[0].length; index++) {
            newWord += '*';
        }

        const fixedWord = userInput.replace(matchBadWord, newWord)

        renderChatMessage(fixedWord)
    } else {
        renderChatMessage(userInput);
    }
}

function renderChatMessage(text) {
    const par = document.createElement('p');
    par.textContent = text;
    container.appendChild(par);
}