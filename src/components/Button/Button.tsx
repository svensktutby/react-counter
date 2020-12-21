import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonPropsType = DefaultButtonPropsType & {
  clickHandler: () => void;
};

export const Button: FC<ButtonPropsType> = ({
  type = 'button',
  className,
  clickHandler,
  ...restProps
}) => {
  const buttonClassName = `btn ${className ? className : 'btn-primary'}`;

  return (
    <button
      onClick={clickHandler}
      className={buttonClassName}
      type={type}
      {...restProps}
    />
  );
};
