import React from 'react'

// const stylesChildre = {
//     color: colorRandom
// }

// const colorBoton = {
//     backgroundColor: randomColor
// }
const QuoteBox = ({colorRandom, randomPhrase, randomAll}) => {
  return (
   
       <article className='article' >
            <header>
                
                <p>
                    {`${randomPhrase.quote}`}   
                </p>
            </header>
            <div>
                <p className='author'>
                    {`${randomPhrase.author}`}
                </p>
                <button className='button' onClick={randomAll}   >&#62;</button>
            </div>
       </article>
   
  )
}

export default QuoteBox
