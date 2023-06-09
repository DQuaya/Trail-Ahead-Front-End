import React from "react";
import { useState } from "react";
import '../Quiz/Quiz.css'

function QuizForm() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');


 const handleQuestionChange = (event) => {
   setQuestion(event.target.value);
 };

 const handleAnswerChange = (event) => {
   setAnswer(event.target.value);
 };

 const handleSubmit = (event) => {
   event.preventDefault();
   // Do something with the question and answer values, such as saving them to a database
   console.log("Question:", question);
   console.log("Answer:", answer);
   // Reset the form
   setQuestion("");
   setAnswer("");
 };

  return (
    <div className="quizContainer">
      <form onSubmit={handleSubmit}>
        <label>
          Question:
          <input type="text" value={question} onChange={handleQuestionChange} />
        </label>
        <br />
        <label>
          Answer:
          <input type="text" value={answer} onChange={handleAnswerChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={handleSubmit}>
        <label>
          Question:
          <input type="text" value={question} onChange={handleQuestionChange} />
        </label>
        <br />
        <label>
          Answer:
          <input type="text" value={answer} onChange={handleAnswerChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={handleSubmit}>
        <label>
          Question:
          <input type="text" value={question} onChange={handleQuestionChange} />
        </label>
        <br />
        <label>
          Answer:
          <input type="text" value={answer} onChange={handleAnswerChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  }

export default QuizForm;
