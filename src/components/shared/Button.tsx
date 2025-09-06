import type { MouseEventHandler } from "react"

type ButtonType = {
   name : string,
   action? : MouseEventHandler<HTMLButtonElement> | undefined
}

export default function Button({name,action} : ButtonType ) {
  return (
    <button onClick={action} className="px-4 py-2 rounded-2xl cursor-pointer hover:scale-105 hover:text-neutral-600 bg-purple-500 transition-all duration-200">
          {name}
    </button>
  )
}
