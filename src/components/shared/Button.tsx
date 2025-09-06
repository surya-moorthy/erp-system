import type { MouseEventHandler } from "react"

type ButtonType = {
   name : string,
   action : MouseEventHandler<HTMLButtonElement> | undefined
}

export default function Button({name,action} : ButtonType ) {
  return (
    <button onClick={action}>
          {name}
    </button>
  )
}
