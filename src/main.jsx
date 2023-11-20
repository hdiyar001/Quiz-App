import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ArrayContext from "./Ressources/questionArray-context";
const questionArray = [
  {
    question: 'What is React?',
    answers: [
      { text: 'A library for managing user interfaces', correct: true },
      { text: 'A database', correct: false },
      { text: 'A type of food', correct: false },
      { text: 'A design pattern', correct: false },
    ],
  },
  {
    question: 'Who created React?',
    answers: [
      { text: 'Apple', correct: false },
      { text: 'Google', correct: false },
      { text: 'Facebook', correct: true },
      { text: 'Amazon', correct: false },
    ],
  },
  {
    question: 'Which of these is a React Hook?',
    answers: [
      { text: 'useState', correct: true },
      { text: 'useReact', correct: false },
      { text: 'useArray', correct: false },
      { text: 'useWeb', correct: false },
    ],
  },
  {
    question: 'What is JSX?',
    answers: [
      { text: 'A JavaScript framework', correct: false },
      { text: 'A JavaScript syntax extension', correct: true },
      { text: 'A CSS library', correct: false },
      { text: 'A database query language', correct: false },
    ],
  },
  {
    question: 'How do you create a React component?',
    answers: [
      { text: 'Using the createComponent function', correct: false },
      { text: 'By extending React.Component', correct: true },
      { text: 'With HTML and CSS', correct: false },
      { text: 'By calling React.createElement()', correct: false },
    ],
  },
  {
    question: 'What command is used to create a new React project?',
    answers: [
      { text: 'react new', correct: false },
      { text: 'npm start', correct: false },
      { text: 'create-react-app', correct: true },
      { text: 'npm install react', correct: false },
    ],
  },
  {
    question: 'What is state in React?',
    answers: [
      { text: 'A persistent storage', correct: false },
      { text: 'An HTTP request', correct: false },
      { text: 'A component’s memory', correct: true },
      { text: 'A database', correct: false },
    ],
  },
  {
    question: 'What does the "Virtual DOM" refer to?',
    answers: [
      { text: 'A real DOM manipulated by React', correct: false },
      { text: 'A DOM element with the class "virtual"', correct: false },
      { text: 'A lightweight copy of the real DOM', correct: true },
      { text: 'A virtual machine in which React runs', correct: false },
    ],
  },
  {
    question: 'Which lifecycle method is called first in a class component?',
    answers: [
      { text: 'componentDidMount', correct: false },
      { text: 'constructor', correct: true },
      { text: 'render', correct: false },
      { text: 'componentWillMount', correct: false },
    ],
  },
  {
    question: 'How do you pass data to a component from a parent component?',
    answers: [
      { text: 'States', correct: false },
      { text: 'Props', correct: true },
      { text: 'Classes', correct: false },
      { text: 'Functions', correct: false },
    ],
  }
];
ReactDOM.createRoot(document.getElementById("root")).render(
  <ArrayContext.Provider value={{ questionArray: questionArray }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ArrayContext.Provider>
);
