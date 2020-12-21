import React, { FC } from 'react';
import s from './Counter.module.css';

type CounterPropsType = {
  alarm: boolean;
  className?: string;
};

export const Counter: FC<CounterPropsType> = ({
  className,
  alarm,
  ...restProps
}) => {
  const counterClassName = `${s.counter} ${alarm ? s.alarm : ''} ${
    className ? className : ''
  }`;

  return (
    <div className="card">
      <div className="card-body text-center">
        <div className={counterClassName} {...restProps} />
      </div>
    </div>
  );
};
