import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
export default function Search() {
    return (
        <div className="w-1/4 h-fit bg-transparent flex flex-row items-center justify-center text-gray-300">
            <input
                type="text"
                placeholder="Pesquisar Tarefa"
                className="bg-gray-100 rounded-2xl w-6/10 h-8 border-none text-gray-500 text-center"


            >

            </input>
            <button className="cursor-pointer">
                <MagnifyingGlassIcon className="h-6 w-6"></MagnifyingGlassIcon>
            </button>
        </div>

    )
}