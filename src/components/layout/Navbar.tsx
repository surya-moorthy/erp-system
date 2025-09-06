import Button from "../shared/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 flex justify-between items-center px-20 bg-gray-800 h-20  ">
           <h3 className="text-neutral-50 text-4xl font-bold font-mono tracking-tighter">
               Prollo
           </h3>
           <nav className="flex justify-center gap-10 text-xl text-white font-semibold font-serif">
                  <Button name="profile"/>
                  <Button name="projects"/>
           </nav>
    </header>
  )
}
