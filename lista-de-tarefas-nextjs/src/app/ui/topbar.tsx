import CreateTask from "./buttons"
import Search from "./search"
export default function Topbar() {

    return (
        <div className="hidden md:flex w-full h-12 flex-row bg-gray-50 items-center justify-between">
            <CreateTask></CreateTask>
            <Search></Search>            
        </div>
    )
}