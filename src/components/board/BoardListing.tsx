import { useState } from "react";
import BoardCard from "./BoardCard";

function BoardListing() {

    const [boards,setBoards] = useState<[]>([]);

  return (
    <div className="">
        
             {
              boards.map((board)=> {
                return (
                  <BoardCard name="index 1" />
                )
              })
            }
    </div>
  )
}

export default BoardListing