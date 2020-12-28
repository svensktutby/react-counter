import React, { FC, memo } from 'react'
import s from './Scoreboard.module.css'

type ScoreboardPropsType = {
  alarm: boolean
  error: boolean
  isCounterActive: boolean
  className?: string
}

export const Scoreboard: FC<ScoreboardPropsType> = memo(
  ({
    className,
    alarm,
    error,
    isCounterActive,
    children,

    ...restProps
  }) => {
    const scoreboardClassName = `${s.scoreboard} ${alarm ? s.alarm : ''} ${
      className ? className : ''
    }`

    return (
      <div className="card">
        <div className="card-body text-center">
          {!isCounterActive ? (
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
  },
)

Scoreboard.displayName = 'Scoreboard'
