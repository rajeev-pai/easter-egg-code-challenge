import { FC } from 'react';

import './custom-button.css';

interface CustomButtonProps {
  clickHandler: () => void;
  children?: React.ReactNode;
}

export const CustomButton: FC<CustomButtonProps> = ({
  clickHandler,
  children,
}) => {
  return (
    <div className="wrap">
      <button className="button" onClick={clickHandler}>
        {children}
      </button>
    </div>
  );
};
