import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { cn } from '~/utils'

type TTailwindLogo = ComponentPropsWithoutRef<'svg'>

const TailwindLogo = forwardRef<SVGSVGElement, TTailwindLogo>(({ className, ...props }, ref) => {
  return (
    <svg ref={ref} xmlns='http://www.w3.org/2000/svg' className={cn('', className)} {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M26.5.282c-6.805 0-11.056 3.382-12.758 10.146 2.552-3.382 5.528-4.65 8.93-3.805 1.941.482 3.33 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.55 3.382-5.527 4.65-8.93 3.804-1.941-.482-3.33-1.882-4.864-3.431C35.718 3.202 32.823.282 26.5.282zM13.742 15.5C6.938 15.5 2.684 18.882.984 25.646c2.552-3.382 5.529-4.65 8.93-3.805 1.941.482 3.33 1.882 4.864 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.93 3.805-1.941-.483-3.33-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z'
        fill='#80FFEA'
      />
    </svg>
  )
})

export { TailwindLogo as default, type TTailwindLogo }
