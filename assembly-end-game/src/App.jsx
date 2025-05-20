import { useState } from "react"
import Confetti from 'react-confetti'

import { languages } from "../languages,js"
import { getRandomWord } from "./utils"

import clsx from "clsx"

export default function App() {

  //State variable
  const [currentWord, setCurrentWord] = useState(() => getRandomWord())
  const [guess, setGuess] = useState([])

  //Derived variable
  const wrongGuessCount = 
    guess.filter(letter => !currentWord.includes(letter)).length
  const isGameWon = 
    currentWord.split("").every(letter => guess.includes(letter))
  const isGameLost = 
    wrongGuessCount === (languages.length - 1) ? true : false
  const isGameOver = isGameWon || isGameLost

  //Static variable
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  function handleClick(letter) { 
    setGuess(prevGuess => (
      prevGuess.includes(letter) ? 
        prevGuess : [...prevGuess, letter]))  
  }

  //function to reset the game
  function resetGame() {
    setCurrentWord(getRandomWord())
    setGuess([])
  }

  const alphabetElement = alphabet.split("").map(letter => {

    const isGuessed = guess.includes(letter)
    const  isCorrect = isGuessed && currentWord.includes(letter)
    const isWrong = isGuessed && !currentWord.includes(letter)

    const className = clsx({
      correct : isCorrect ,
      wrong : isWrong
    })

    return (
      <button 
        className = {className}
        disabled = {isGameOver}
        key = {letter} 
        onClick= {() => handleClick(letter)}
      >
       {letter.toUpperCase()}
    </button>
    )}
    
  )

   const letterElement = currentWord.split("").map((letter, index) => (
      <span key = {index}>
        {guess.includes(letter) ? letter.toUpperCase() : " "} 
      </span>  
  ))

  const languageElements = languages.map( (language, index) => {
    const lostLangauge = index < wrongGuessCount
     return (
        <span
          className= { `language ${lostLangauge ? "lost" : ""} `}
          key={language.name}
          style={{
            backgroundColor: language.backgroundColor,
            color: language.color}}
        >
          {language.name}
        </span>
      )
  })

  const gameStatusClass = clsx("game-status",{
    won : isGameWon,
    lost : isGameLost
    })

  return (
  <main> 
    {isGameOver && <Confetti />}
    <header>
      <h1>Assembly End Game</h1>
      <p> Guess the world within 8 attempts to keep the programming world assembly!</p>
    </header>
    <section className = {gameStatusClass} >
      { isGameOver ?
       <>
          <h2> {isGameLost ? "Game over" : "You win" } </h2>
          <p> {isGameLost ?  "You lost! better start learning   Assembly" : "Well done 🎉"}
          </p>
        </> : null
      }
    </section>
    <section className = "languages-container">
      {languageElements}    
    </section>
    <section className = "word">
      {letterElement} 
    </section>
    <section className="keyboard">
      {alphabetElement}
    </section>
    <section className="game-button">
      {isGameOver ? <button onClick={() => resetGame()}> New Game </button> : ""}
    </section>
  </main>
  )
}


