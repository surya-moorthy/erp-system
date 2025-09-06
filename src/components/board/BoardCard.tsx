import Button from "../shared/Button";

export default function BoardCard() {
  return (
    <div className="flex justify-between items-center w-full bg-neutral-300 px-6 py-4 rounded-2xl">
         <h4 className="text-xl font-bold hover:underline transition-all duration-200 cursor-pointer">
               Board
         </h4>
         <div className="flex items-center gap-6">
           <Button name="edit" className="text-white font-semibold text-lg font-serif"/>
           <p>
               {Date()}
           </p>
         </div>
    </div>
  )
}
