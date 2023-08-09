let word;

export function setupWord(initWord, element) {
    console.log(element)
    word = initWord
    initWord.split('').forEach(() => {
        element.insertAdjacentHTML('beforeend', `<div class="letter-box"></div>`)
    })
}

export function isLetterInWord(letter) {
    return word.includes(letter)
}

export function revealLetterInWord(letter) {
    const letterEls = document.getElementsByClassName('letter-box')
    word.split('').forEach((l, i) => {
        if(l === letter){
            letterEls[i].innerHTML = letter
        }
    })
}


// module.exports = {
//     setupWord,
//     isLetterInWord,
//     revealLetterInWord
// }