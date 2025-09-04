import BoardLabel from "./board-label";

const informations = [
    { name: 'Nova Tarefa', quantity: 4 },
    { name: 'Agendada', quantity: 4 },
    { name: 'Em progresso', quantity: 45 },
    { name: 'Concluída', quantity: 4 },
];

export default function Board(
    { taskQuantity }: {
        taskQuantity: number
    }

) {

    return (
        <div className="bg-white h-full">
            <BoardLabel boardsInformation={informations}></BoardLabel>

            <div className="md:w-full md:h-full md:flex md:flex-row md:justify-evenly">
                {informations.map(board => {
                    return (
                        <div
                            className="md:border-r-[0.5px] md:border-gray-300  md:w-1/4 md:h-full "
                            key={board.name}
                        >
                        </div>
                    )
                })}
            </div>


        </div>

    )
}