import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  // state value
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  return(
    <>
      <section className ="section">
        {/* seperate component */}
        <div className ="title">
          <h2>
            <span>/</span>Reviews
          </h2>
        </div>

        <div className ="section-center">
          {/* iterate over the data(people) */}
          {people.map((person, personIndex) => {
            // destructure
            const {id, image, name, title, quote} = person;
            // more stuff, Add class or className to the article
            let position ="nextSlide"
            if(personIndex === index) {
              position = "activeSlide"
            }
            return(
              <article className ={position} key ={id}>
                <img src ={image} alt ={name} className ="person-img"/>
                <h4>{name}</h4>
                <p className ="title">{title}</p>
                <p className ="text">{quote}</p>
                <FaQuoteRight className ="icon" />
              </article>
            );
          })}
          <button className ="prev">
            <FiChevronLeft />
          </button>
          <button className ="next">
            <FiChevronRight />
          </button>
        </div>
      </section>
    </>
  ); 
}

export default App;
