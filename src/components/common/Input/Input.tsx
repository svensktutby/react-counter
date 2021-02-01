import React, {
  InputHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ChangeEvent,
  KeyboardEvent,
  memo,
} from 'react'

import s from './Input.module.css'

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type InputPropsType = DefaultInputPropsType & {
  onChangeText?: (value: string) => void
  onEnter?: () => void
  error?: boolean
  title?: string
}

export const Input: FC<InputPropsType> = memo(
  ({
    className,
    onChange,
    onKeyPress,
    onChangeText,
    onEnter,
    error,
    title,

    ...restProps
  }) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e)
      onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
      onKeyPress && onKeyPress(e)

      e.key === 'Enter' && onEnter && onEnter()
    }

    const inputClassName = `form-control ${error ? s.error : ''} ${
      className ? className : ''
    }`

    return (
      <div className="form-group">
        <label>
          <span>{title}</span>
          <input
            type="text"
            className={inputClassName}
            onChange={onChangeCallback}
            onKeyPress={onKeyPressCallback}
            {...restProps}
          />
        </label>
      </div>
    )
  },
)

Input.displayName = 'Input'
