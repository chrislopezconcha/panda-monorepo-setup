import { PropsWithChildren } from 'react'
import { button, type ButtonVariantProps } from '@acme/ui-lib/recipes'
import { css, cx } from '@acme/ui-lib/css'

export interface ButtonProps extends ButtonVariantProps, PropsWithChildren {}

export const TestSection2 = ({ children, ...props }: ButtonProps) => {
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
