import "./Quiz.css";
import { useState } from "react";

import React from "react";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState("What are you most excited about for this Hike?");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuestion = question;
    const newAnswer = answer;
    const updatedQuestions = [
      ...questions,
      { question: newQuestion, answer: newAnswer },
    ];
    setQuestions(updatedQuestions);
    setQuestion("");
    setAnswer("");
  };

  return (
    <div className="quizContainer">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="question">Question:</label>
          <input
            type="text"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="answer">Answer:</label>
          <input
            type="text"
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <section>
        {questions.map((item, index) => (
          <div key={index}>
            <h3>Question {index + 1}</h3>
            <p>Question: {item.question}</p>
            <p>Answer: {item.answer}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Quiz;
