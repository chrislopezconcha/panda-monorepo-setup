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
          padding: 8,
          margin: '100px',
          borderWidth: '50px',
          borderStyle: 'solid',
          borderColor: 'magenta',
          borderRadius: '200px',
          textTransform: 'uppercase',
          boxShadow: '0 0 0 50px rgba(255,0,0,0.5), 0 0 0 100px',
          zIndex: 999999,
        }),
      )}
    >
      {children}
    </button>
  )
}
