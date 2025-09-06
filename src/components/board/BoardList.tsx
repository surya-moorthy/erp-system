import BoardCard from "./BoardCard";

export default function BoardList() {
  return (
    <div className="flex flex-col rounded-2xl p-8 bg-stone-200 mt-5 gap-10">
            <BoardCard />
            <BoardCard />
            <BoardCard />
            <BoardCard />
            <BoardCard />

    </div>
  )
}
