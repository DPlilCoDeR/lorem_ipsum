import React, { useState } from 'react';
import data from './data';


function App() {
  const [quantity, setQuantity] = useState(1);
  const [paragraphs, setParagraphs] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(quantity)
    setParagraphs(data.slice(0, amount));
    setQuantity(1);
  };


  return (
  <main className='section'>
    <h3 className='title'>Cool Lorem Ipsum</h3>
    <section className='section-center'>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label>Paragraphs: </label>
        <input type='number' value={quantity} min='1' max='8' onChange={(e) => setQuantity(e.target.value)}></input>
        <button className='btn' type='submit'>Generate</button>
      </form>
    </section>
      <article className='lorem-text'>
        {paragraphs.map((text, index)=> {
          return <p key={index}>{text}</p>
        })}
      </article>
  </main>
    )
}

export default App;