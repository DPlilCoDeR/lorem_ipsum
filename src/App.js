import React, { useState } from 'react';
import data from './data';


function App() {
  const [paragraphs, setParagraphs] = useState(0)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`you want ${paragraphs}`)
  }


  return (
  <main className='section'>
    <h3 className='title'>Cool LoremIpsum</h3>
    <section className='section-center'>
      <form onSubmit={handleSubmit}>
        <label>Paragraphs: </label>
        <input type='number' value={paragraphs} min='1' max='8' onChange={(e) => setParagraphs(e.target.value)}></input>
        <button className='btn' type='submit'>Generate</button>
      </form>
    </section>
    <section className='result'></section>
  </main>
    )
}

export default App;