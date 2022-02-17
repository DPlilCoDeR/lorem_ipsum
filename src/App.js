import React, { useState } from 'react';
import data from './data';


function App() {
  const [quantity, setQuantity] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    for(let i = 0;i < quantity; i++){
      setParagraphs(prevState => [...prevState, data[i]]);
    };
    
    setQuantity(0)
  };


  return (
  <main className='section'>
    <h3 className='title'>Cool LoremIpsum</h3>
    <section className='section-center'>
      <form onSubmit={handleSubmit}>
        <label>Paragraphs: </label>
        <input type='number' value={quantity} min='1' max='8' onChange={(e) => setQuantity(e.target.value)}></input>
        <button className='btn' type='submit'>Generate</button>
      </form>
    </section>
    <section className='result'>
      <div>
        {paragraphs}
      </div>
    </section>
  </main>
    )
}

export default App;