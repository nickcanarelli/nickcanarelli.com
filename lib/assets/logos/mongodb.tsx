import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { cn } from '~/utils'

type TMongoDBLogo = ComponentPropsWithoutRef<'svg'>

const MongoDBLogo = forwardRef<SVGSVGElement, TMongoDBLogo>(({ className, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 120 258'
      className={cn('', className)}
      {...props}
    >
      <g clipPath='url(#clip0_436_1665)'>
        <path
          d='M83.009 28.756C72.133 15.909 62.767 2.86 60.854.15a.488.488 0 00-.705 0c-1.913 2.71-11.28 15.758-22.155 28.605-93.353 118.536 14.703 198.531 14.703 198.531l.906.602c.806 12.346 2.82 30.111 2.82 30.111h8.056s2.014-17.665 2.82-30.111l.906-.702c.101 0 108.157-79.895 14.804-198.431zM60.45 225.48s-4.834-4.115-6.143-6.223v-.2l5.84-129.076c0-.401.605-.401.605 0l5.841 129.076v.2c-1.31 2.108-6.143 6.223-6.143 6.223z'
          fill='#4CE470'
        />
      </g>
      <defs>
        <clipPath id='clip0_436_1665'>
          <path fill='#fff' d='M0 0H120V258H0z' />
        </clipPath>
      </defs>
    </svg>
  )
})

export { MongoDBLogo as default, type TMongoDBLogo }
