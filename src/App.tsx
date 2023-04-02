import { FC, useState } from 'react';

import { decryptWith, solveMe } from './utils';
import { CustomButton, Confetti } from './components';

import './App.css';

const App: FC = () => {
  const [answer, setAnswer] = useState('');
  const [didAttempt, setDidAttempt] = useState(false);

  function revealHandler() {
    const secretKey = solveMe();
    const result = decryptWith(secretKey);
    setAnswer(result);
    setDidAttempt(true);
  }

  function showMessage() {
    if (answer) {
      return (
        <Confetti>
          <h2>Congrats! </h2>
          <p className="main-message">
            You got the: <span className="challenge">{answer} !!</span>
          </p>
          <p>Go to the Game master to find the activity!</p>
        </Confetti>
      );
    }

    return <p className="error">Opps! Try again!</p>;
  }

  return (
    <div className="container">
      {didAttempt && showMessage()}

      {!answer && (
        <CustomButton clickHandler={revealHandler}>Reveal</CustomButton>
      )}
    </div>
  );
};

export default App;
