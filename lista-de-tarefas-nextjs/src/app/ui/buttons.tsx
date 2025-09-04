import Link from "next/link"
import { PlusCircleIcon } from "@heroicons/react/24/outline"
export default function CreateTask() {
    return (
        <Link
            href={'/home/create'}
            className="flex items-center justify-center w-1/8 h-8 bg-blue-500 rounded-2xl gap-1 text-white font-semibold ml-1 text-xs"
        >            
            <PlusCircleIcon className="w-6 h-6"></PlusCircleIcon>
            <p>Adicionar Tarefa</p>
        </Link>
    )
}