import React, { FC } from 'react'
import s from './Scoreboard.module.css'

type ScoreboardPropsType = {
  alarm: boolean
  className?: string
}

export const Scoreboard: FC<ScoreboardPropsType> = ({
  className,
  alarm,
  children,
  ...restProps
}) => {
  const scoreboardClassName = `${s.scoreboard} ${alarm ? s.alarm : ''} ${
    className ? className : ''
  }`

  return (
    <div className="card">
      <div className="card-body text-center">
        <h2 className={scoreboardClassName} {...restProps}>
          {children}
        </h2>
      </div>
    </div>
  )
}
