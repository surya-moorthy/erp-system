import {CirclePlus, Pencil, Trash} from "lucide-react"
import { useState } from "react"
import BoardCard from "../components/board/BoardCard";
import BoardListing from "../components/board/BoardListing";

export default function Home() {


  return ( 
      <div className="bg-stone-200 w-full h-full flex flex-col justify-center">
            <div className="flex justify-between items-center px-10 py-2.5">
                  <h3 className="text-3xl text-neutral-900 font-bold">
                      Boards
                  </h3>
                 <div className="flex justify-center items-center gap-5">
                      <div  title="add a board"  className="p-2 rounded-full bg-neutral-400 w-fit"> 
                         <CirclePlus size={30} className="text-neutral-900 hover:text-gray-600 stroke-2 rounded-full"/>
                      </div>
                      <div title="trash" className="p-2 rounded-full bg-neutral-400 w-fit">
                            <Trash size={30} className="text-neutral-900 hover:text-gray-600 stroke-2 rounded-full"/>
                      </div>
                      <div title="edit"  className="p-2 rounded-full bg-neutral-400 w-fit">
                           <Pencil size={30} className="text-neutral-900 hover:text-gray-600 stroke-2"/>
                      </div>
                 </div>
            </div>
            <div className="mt-10">
                    <BoardListing/>
            </div>
      </div>
  )
}


