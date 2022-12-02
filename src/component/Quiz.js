import React, { useState } from 'react'
import {useEffect} from 'react'


const Quiz = ({ name, question, score, setScore, setQuestion }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    // setOptions(
    //   question &&
    //     handleShuffle([
    //       question[currQues]?.correct_answer,
    //       ...question[currQues]?.incorrect_answers,
    //     ])
    // );
    console.log(question);
  }, [currQues, question]);

  console.log(question);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div>
      This is Quiz page
    </div>
  )
}

export default Quiz;
