import { CirclePlus } from "lucide-react";
import Button from "../components/shared/Button";
import BoardList from "../components/board/BoardList";

export default function Home() {
  return ( 
    <div className="bg-stone-100 w-[100vw] h-[100vh] flex justify-center top-24 ">
           <div className="w-[80%] px-5">
                  <div className=" flex justify-between items-center  mt-3">
                    <h3 className="text-neutral-950 text-4xl font-bold font-mono tracking-tighter">
                        Workflow
                    </h3>

                    <div className="flex justify-center items-center gap-5">
                          <CirclePlus size={40} className="font-medium text-stone-400 cursor-pointer" />
                          <Button name="Edit" className="text-white font-semibold text-lg font-serif"/>
                    </div>
                 </div>
                 <BoardList/>
           </div>
    </div>
  )
}


