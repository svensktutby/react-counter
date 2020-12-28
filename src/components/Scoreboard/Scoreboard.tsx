import React, { FC } from 'react'
import s from './Scoreboard.module.css'

type ScoreboardPropsType = {
  alarm: boolean
  error: boolean
  activeCounter: boolean
  className?: string
}

export const Scoreboard: FC<ScoreboardPropsType> = ({
  className,
  alarm,
  error,
  activeCounter,
  children,

  ...restProps
}) => {
  const scoreboardClassName = `${s.scoreboard} ${alarm ? s.alarm : ''} ${
    className ? className : ''
  }`

  return (
    <div className="card">
      <div className="card-body text-center">
        {!activeCounter ? (
          error ? (
            <div className={s.error}>Incorrect value!</div>
          ) : (
            <div className={s.label}>enter values and press 'Set'</div>
          )
        ) : (
          <h2 className={scoreboardClassName} {...restProps}>
            {children}
          </h2>
        )}
      </div>
    </div>
  )
}
