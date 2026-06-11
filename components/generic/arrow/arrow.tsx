import { SVGProps } from 'react'

const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 12" {...props}>
    <path fill="currentColor" d="M14.117 5.79a.96.96 0 0 0-.289-.665L8.984.289C8.781.086 8.563 0 8.344 0c-.516 0-.883.367-.883.852a.9.9 0 0 0 .266.64l1.671 1.68 1.985 1.82-1.68-.094H.914c-.539 0-.914.36-.914.891s.375.899.914.899h8.79l1.679-.102-1.985 1.82-1.671 1.688a.86.86 0 0 0-.266.633c0 .492.367.859.883.859a.88.88 0 0 0 .625-.281l4.86-4.852a.93.93 0 0 0 .288-.664" />
  </svg>
)
export default Arrow
