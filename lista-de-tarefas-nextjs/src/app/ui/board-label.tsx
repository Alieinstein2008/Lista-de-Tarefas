import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { roboto_condensed } from "./fonts";

export default function BoardLabel(
    { boardsInformation }: {
        boardsInformation: { name: string, quantity: number }[]
    }
) {
    return (

        <div className="md:flex md:flex-row md:w-full md:h-12.5 md:border-t-1 md:border-b-1 md:border-gray-300 ">
            {boardsInformation.map(board => {
                return (
                    <div className={`${roboto_condensed.className} antialised bg-white md:flex md:flex-row md:items-center md:w-1/4 md:h-full md:justify-center md:gap-x-5`} key={board.name}>
                        <p className="w-fit inline-block capitalize text-gray-400 text-base">{board.name}</p>
                        <p className="w-fit inline-block bg-gray-200 text-gray-400 pr-3.5 pl-3.5 pt-0.5 pb-0.5 rounded-xl text-sm font-bold">{board.quantity}</p>
                    </div>
                );
            })}
        </div>

    );
}
//Tailwind para adicionar bordas no componente
//