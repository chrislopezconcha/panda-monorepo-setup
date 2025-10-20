import { PropsWithChildren } from 'react'
import { button, type ButtonVariantProps } from '../../generated/recipes'
import { css, cx } from '../../generated/css'

export interface ButtonProps extends ButtonVariantProps, PropsWithChildren {}

export const TestSection = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={cx(
        button(props),
        css({
          background: 'transparent',
          fontSize: '1000px',
          width: '2000px',
          height: '800px',
          borderWidth: '5000px',
        }),
      )}
    >
      {children}
    </button>
  )
}
