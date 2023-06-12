import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import "./Quiz.css";

function Quiz() {
  const [quizzes, setQuizzes] = useState([
    { question: "What are you most excited about this Hike?", answer: "" },
    { question: "What makes you happy?", answer: "" },
    { question: "What is your experience level?", answer: "" },
  ]);

  const handleQuizChange = (index, field, value) => {
    const updatedQuizzes = [...quizzes];
    updatedQuizzes[index][field] = value;
    setQuizzes(updatedQuizzes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(quizzes);

    const resetQuizzes = quizzes.map((quiz) => ({
      question: quiz.question,
      answer: "", // Reset the answer value to an empty string
    }));

    setQuizzes(resetQuizzes);
  };

  return (
    <div>
      {" "}
      <h1>Screening</h1>
      <div className="quizContainer">
        <form onSubmit={handleSubmit}>
          {quizzes.map((quiz, index) => (
            <div key={index} className="quizBox">
              <h3>{index + 1}</h3>
              <div className="quizItem">
                <label htmlFor={`question-${index}`}>Question:</label>
                <input
                  type="text"
                  id={`question-${index}`}
                  value={quiz.question}
                  onChange={(e) =>
                    handleQuizChange(index, "question", e.target.value)
                  }
                  required
                />
              </div>
              <div className="quizItem">
                <label htmlFor={`answer-${index}`}>Answer:</label>
                <input
                  type="text"
                  id={`answer-${index}`}
                  value={quiz.answer}
                  onChange={(e) =>
                    handleQuizChange(index, "answer", e.target.value)
                  }
                  required
                />
              </div>
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Quiz;
