import "./style.css"
import getRandomWord from "./src/randomWord"
import setSharkImage from "./src/sharkImage"
import { setupWord, isLetterInWord, revealLetterInWord } from "./src/word"
import setupGuesses from "./src/guess"

document.querySelector("#app").innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`

const initSharkwords = () => {
    let numWrong = 0
    const word = getRandomWord()

    setSharkImage(document.querySelector("#shark-img"), numWrong)
    setupWord(word, document.querySelector("#word-container"))

    // for debugging:
    console.log(`[INFO] Correct word is: ${word}`)

    const sharkImgEl = document.querySelector("#shark-img")

    const handleGuess = (guessEvent, letter) => {
        guessEvent.target.disabled = true
        if (isLetterInWord(letter)) {
            revealLetterInWord(letter)
        } else {
            numWrong += 1
            setSharkImage(sharkImgEl, numWrong)
        }
        const isWordComplete = Array.from(
            document.querySelectorAll(".letter-box")
        ).every(el => el.innerText !== "")
        
        console.log(isWordComplete)
        if (isWordComplete) {
            document.querySelectorAll("button").forEach(btn => {
                btn.setAttribute("disabled", true)
            })
            document.getElementById('game-status').innerText = 'You win!'
        }
        if(numWrong === 5){
            document.querySelectorAll("button").forEach(btn => {
                btn.setAttribute("disabled", true)
            })
            document.getElementById('game-status').innerText = 'You lose!'

        }
    }

    setupGuesses(document.querySelector("#letter-buttons"), handleGuess)
}

initSharkwords()

