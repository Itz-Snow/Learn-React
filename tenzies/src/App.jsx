import { useState } from "react"

import Die from "./components/Die"

export default function App() {

  const [diceArr, setDiceArr ] = useState(generateAllNewDice())
  

  const gameWon = diceArr.every(die => die.isHeld) && 
    diceArr.every(die => die.value === diceArr[0].value)
    

  // This function generates a new array of 10 dice objects
  // each with a random value between 1 and 6
  // and a property isHeld set to false
  function generateAllNewDice() {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      const num = Math.floor(Math.random() * 6) + 1;
      diceArray.push({
        id: i,            // Optional: helps identify each die uniquely
        value: num,
        isHeld: false
      });
    }
    return diceArray;
  }
  
  function hold(id){
    setDiceArr(oldDice => oldDice.map(die => 
      die.id === id ? 
          {...die, isHeld:!die.isHeld} : die
      ))
  }

  function rollDice(){
    setDiceArr(oldDice => oldDice.map(die => 
      die.isHeld ? 
          die : {...die, value:Math.floor(Math.random() * 6) + 1}
      ))
  }

 let diceElements = diceArr.map( die => (
    <Die 
      key = {die.id}
      value = {die.value}
      isHeld = {die.isHeld} 
      id = {die.id}
      hold = {hold}
    /> ))

  return (
    <main> 
      <h1 className="title"> Tenzies </h1>
      <p className="instruction"> Roll until dice are the same. Click each die to freeze at its current value between rolls </p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>
         {gameWon ? "New Game" : "Roll"} 
       </button>
    </main>
  )
}

