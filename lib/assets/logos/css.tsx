import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { cn } from '~/utils'

type TCSSLogo = ComponentPropsWithoutRef<'svg'>

const CSSLogo = forwardRef<SVGSVGElement, TCSSLogo>(({ className, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 362.73401 511.99998'
      className={cn('', className)}
      {...props}
    >
      <g transform='translate(-193.633 -276.362) translate(119 276.362)'>
        <path
          fill='#264de4'
          d='M437.367 100.62L404.321 470.819 255.778 512 107.644 470.877 74.633 100.62z'
        />
        <path fill='#2965f1' d='M376.03 447.246L404.27 130.894 256 130.894 256 480.523z' />
        <path fill='#ebebeb' d='M150.31 268.217L154.38 313.627 256 313.627 256 268.217z' />
        <path
          fill='#ebebeb'
          d='M256 176.305L255.843 176.305 142.132 176.305 146.26 221.716 256 221.716z'
        />
        <path
          fill='#ebebeb'
          d='M256 433.399L256 386.153 255.801 386.206 205.227 372.55 201.994 336.333 177.419 336.333 156.409 336.333 162.771 407.634 255.791 433.457z'
        />
        <path d='M160 0h55v23h-32v23h32v23h-55zM226 0h55v20h-32v4h32v46h-55V49h32v-4h-32zM292 0h55v20h-32v4h32v46h-55V49h32v-4h-32z' />
        <path
          fill='#fff'
          d='M311.761 313.627L306.49 372.521 255.843 386.191 255.843 433.435 348.937 407.634 349.62 399.962 360.291 280.411 361.399 268.217 369.597 176.305 255.843 176.305 255.843 221.716 319.831 221.716 315.699 268.217 255.843 268.217 255.843 313.627z'
        />
      </g>
    </svg>
  )
})

export { CSSLogo as default, type TCSSLogo }
