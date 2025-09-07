import Button from "../shared/Button";

export type BoardType = {
   name : string | number,
  //  Date : string
}

export default function BoardCard(board : BoardType ) {
  return (
    <div className="flex justify-between items-center w-full bg-neutral-300 px-6 py-4 rounded-2xl">
         <h4 className="text-xl font-bold hover:underline transition-all duration-200 cursor-pointer">
               {board.name}
         </h4>
         <div className="flex items-center gap-6">
           <Button name="edit" className="text-white font-semibold text-lg font-serif" title="edit board option"/>
           <p>
              Date
           </p>
         </div>
    </div>
  )
}
