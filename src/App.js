import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - це ... ?',
    variants: ['бібліотека', 'фреймворк', 'додаток'],
    correct: 0,
  },
  {
    title: 'Компонент - це ... ',
    variants: ['додаток', 'частина додатку або сторінки', 'те, що я не знаю'],
    correct: 1,
  },
  {
    title: 'Що таке JSX?',
    variants: [
      'Це простий HTML',
      'Це функція',
      'Це той же HTML, тільки з можливістю виконувати JS-код',
    ],
    correct: 2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Ви відгадали {correct} відповіді з {questions.length}</h2>
      <button>Попробувати знову</button>
    </div>
  );
}

function Game({step, question, onClicklVariants}) {

  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text,index) => (
            <li onClick={() => onClicklVariants(index)} key={text}>{text}</li>
          )) 
        }
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClicklVariants = (index) => {
    console.log(step, index);
    setStep(step + 1)

    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }
  return (
    <div className="App">
      {
        step != questions.length ? <Game question={question} 
        onClicklVariants={onClicklVariants}
        step={step}
  /> : (<Result correct={correct}/>) 
      }
     
    </div>
  );
}

export default App;
