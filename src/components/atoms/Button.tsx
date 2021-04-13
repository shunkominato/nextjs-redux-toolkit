import React, { FC } from "react";

export interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button: FC<any> = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

// export default Button
