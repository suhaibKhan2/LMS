import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/QuizPage.css";

const QuizPage = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "What is the main feature of Java?",
      options: ["Object-Oriented", "Procedural", "Functional", "Scripting"],
      correctAnswer: "Object-Oriented",
    },
    {
      question: "Which framework is used for Java-based backend development?",
      options: ["React", "Angular", "Spring Boot", "Django"],
      correctAnswer: "Spring Boot",
    },
    {
      question: "What is the virtual DOM in React?",
      options: [
        "A copy of the real DOM",
        "A database for UI elements",
        "A server-side technology",
        "An alternative to JavaScript",
      ],
      correctAnswer: "A copy of the real DOM",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (!selectedAnswer) {
      alert("Please select an answer before proceeding.");
      return;
    }

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">📘 Course Quiz</h1>

      {!showResult ? (
        <div className="question-section">
          <h2 className="question">{questions[currentQuestion].question}</h2>

          <div className="options-container">
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index} className="option">
                <input
                  type="radio"
                  id={`option-${index}`}
                  name="answer"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() => handleAnswerSelection(option)}
                />
                <label htmlFor={`option-${index}`}>{option}</label>
              </div>
            ))}
          </div>

          <button className="next-btn" onClick={handleNextQuestion}>
            Next ➝
          </button>
        </div>
      ) : (
        <div className="result-container">
          <h2>🎉 Quiz Completed!</h2>
          <p>Your Score: <strong>{score} / {questions.length}</strong></p>
          <button className="back-btn" onClick={() => navigate("/dashboard")}>
            🔙 Go Back to Dashboard
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
