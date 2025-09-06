import type { ChangeEventHandler } from "react"

type InputType = {
   name : string,
   action? : ChangeEventHandler<HTMLInputElement> | undefined
}

export default function Input({name,action} : InputType) {
  return (
    <input type="text" name={name} id={name} onChange={action} className="outline-none px-4 py-2 text-lg w-full bg-neutral-200"/>
  )
}
