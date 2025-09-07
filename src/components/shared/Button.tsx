import type { MouseEventHandler } from "react"
import { cn } from "../../utils/clsx"

type ButtonType = {
   name : string,
   action? : MouseEventHandler<HTMLButtonElement> | undefined,
   className? : string,
   title : string
}

export default function Button({name,action,className,title} : ButtonType ) {
  return (
    <button title={title} onClick={action} className={cn("px-4 py-2 rounded-2xl cursor-pointer hover:scale-105 hover:text-neutral-600 bg-purple-500 transition-all duration-200",className)}>
          {name}
    </button>
  )
}
