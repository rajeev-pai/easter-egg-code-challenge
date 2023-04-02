import { FC } from 'react';

import './confetti.css';

interface ConfettiProps {
  children?: React.ReactNode;
}

export const Confetti: FC<ConfettiProps> = ({ children }) => {
  return (
    <div className="confetti">
      <div className="confetti-piece"></div>
      <div className="confetti-piece"></div>
      <div className="confetti-piece"></div>
      <div className="confetti-piece"></div>
      <div className="confetti-piece"></div>
      <div className="confetti-piece"></div>
      <div className="confetti-piece"></div>
      <div className="confetti-piece"></div>
      <div className="confetti-piece"></div>
      <div className="confetti-piece"></div>
      <div className="confetti-piece"></div>
      <div className="confetti-piece"></div>
      <div className="confetti-piece"></div>
      <div className="icon">{children}</div>
    </div>
  );
};
