import type { ReactNode } from "react";

export default function Modal({component} : {component : ReactNode}) {
  return (
    <div className="opacity-75 backdrop-blur-lg w-screen h-screen flex justify-center items-center">
           <div className="rounded-2xl px-4 py-8 bg-neutral-900">
               {component}
           </div>
    </div>
  )
}
