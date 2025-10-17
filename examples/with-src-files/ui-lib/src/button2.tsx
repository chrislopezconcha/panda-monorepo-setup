import { PropsWithChildren } from 'react'
import { button, type ButtonVariantProps } from '../../generated/recipes'
import { css, cx } from '../../generated/css'

export interface ButtonProps extends ButtonVariantProps, PropsWithChildren {}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={cx(
        button(props),
        css({
          background: 'transparent',
          fontSize: '24px',
          lineHeight: '2',
          _hover: {
            color: 'rgba(255, 255, 255, 0.8)',
            backgroundColor: 'yellow.800',
          },
        }),
      )}
    >
      {children}
    </button>
  )
}
