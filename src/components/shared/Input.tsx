import type { ChangeEventHandler } from "react"

type InputType = {
   name : string,
   action : ChangeEventHandler<HTMLInputElement> | undefined
}

export default function Input({name,action} : InputType) {
  return (
    <input type="text" name={name} id={name} onChange={action} />
  )
}
