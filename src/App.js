import React, {useState, useEffect} from 'react';
import CardGrid from './comps/cardGrid';
import QuestionGenerator from './comps/QuestionsGenerator';
import './style.css';
import axios from 'axios';



function App() {

  const [cards, setCards] = useState([]);

  useEffect(() => {

    axios.get('https://opentdb.com/api.php?amount=10')
    .then(res => {
      setCards(
          res.data.results.map((item,index) => {

            // Decoding strings and mix options and correct answer
            let answer = decodeString(item.correct_answer);
            let options = [...item.incorrect_answers.map(e => decodeString(e)), answer];
                       
            return {
                  id:       index,
                  question: decodeString(item.question),
                  answer:   answer,
                  options:  options.sort() 
                }
          })
        )
    })
  },[]);



  function decodeString(str) {
    const text = document.createElement('textarea')
    text.innerHTML= str
    return text.value
  }



  return (
      <>
        <QuestionGenerator/>
        <CardGrid cards={cards}/>
      </>
  );

}




export default App;
