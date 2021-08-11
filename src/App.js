import React, {useState, useEffect, useRef} from 'react';
import CardGrid from './comps/cardGrid';
import './style.css';
import axios from 'axios';



function App() {


  const [cards, setCards] = useState([]);
  const [categories, setCategories] = useState([]);

  const categoryRef = useRef();
  const amountRef = useRef();



  useEffect( () => {

    axios.get('https://opentdb.com/api_category.php')
    .then(res => {
        setCategories(res.data.trivia_categories);
      })
    }, []);



  function decodeString(str) {
    const text = document.createElement('textarea')
    text.innerHTML= str
    return text.value
  }


  function submit(e){
    
    e.preventDefault();

    axios.get('https://opentdb.com/api.php', {
      params:{
        amount: amountRef.current.value,
        category: categoryRef.current.value
      }
    })
    .then(res => {

      setCards(
        res.data.results.map((item, index) => {

               // Decoding strings and mix options with the correct answer
               let answer = decodeString(item.correct_answer);
               let options = [...item.incorrect_answers.map(e => decodeString(e)), answer];
                          
               return {
                     id:       index,
                     question: decodeString(item.question),
                     answer:   answer,
                     options:  options.sort() 
                   }
        })
      );
    })

  }



  return (
      <>
        <form id="generatorForm" onSubmit={submit}>
        
          <div className="form-group">
            <label>Category: </label>
            <select ref={categoryRef} >
                {
                    categories.map( category => {
                        return <option value={category.id} key={category.id}>{category.name}</option>
                    })
                }
            </select>
          </div>

          <div className="form-group">
            <label>Questions Number: </label>
            <input type="number" id="" min="1" step="1" defaultValue="10" ref={amountRef} />
          </div>

          <div className="form-group">
            <button id="btn" type="submit">Generate</button>
          </div>

        </form>

        <CardGrid cards={cards}/>
      </>
  );

}




export default App;
