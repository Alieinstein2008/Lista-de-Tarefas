import CreateTask from "./buttons"
import Searchbar from "./Searchbar"
export default function Topbar() {

    return (
        <header className="hidden md:flex w-full md:h-12.5 flex-row bg-gray-50 items-center justify-end ">
            <Searchbar></Searchbar>            
        </header>
    )
}