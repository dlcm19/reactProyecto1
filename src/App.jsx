import { useState } from 'react'
import './App.css'
import phrases from './json/phrases.json'
import QuoteBox from './components/QuoteBox'
import arrayColors from './colors/arrayColors'



function App() {

  const randomElements = array =>{
    const indexR = Math.floor(Math.random() * array.length)
    return array[indexR]

  }
    
   let phrase = randomElements(phrases)
   let colors = randomElements(arrayColors)
    
  randomElements(phrases);

  const [randomPhrase, setrandomPhrase] = useState(phrase)
  const [randomColor, setrandomColor] = useState(colors)

 const backColor = {
  backgroundColor: randomColor
 }

//  const colorRandom = () => {
//     colorLetras = randomElements(arrayColors)

//     setrandomColor(colors)
//  }

 const randomAll = () => {
   phrase = randomElements(phrases)
   colors = randomElements(arrayColors)
   setrandomPhrase(phrase)
   setrandomColor(colors)
 }

  return (
    <div className="App" style={backColor}>
     <QuoteBox randomPhrase = {randomPhrase} 
       randomColor = {randomColor}
      randomAll = {randomAll}
     />
    </div>
  )
}

export default App
