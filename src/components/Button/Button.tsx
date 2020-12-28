import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC, memo } from 'react'

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

type ButtonPropsType = DefaultButtonPropsType & {}

export const Button: FC<ButtonPropsType> = memo(
  ({
    className,

    ...restProps
  }) => {
    const buttonClassName = `btn ${className ? className : 'btn-primary'}`

    return <button type="button" className={buttonClassName} {...restProps} />
  },
)

export const ButtonWithMemo = memo(Button)
