import BoardLabel from "./board-label";
import TaskCard from "./task-card";
import { Suspense } from "react";
import { defaultsLabels } from "../lib/definitions";
import { fetchLabelsByUser } from "../lib/data";

export default async function Board(
    { taskQuantity }: {
        taskQuantity: number

    }

) {

    const userSessionDataExample = { 
        userName: 'Alonso' ,
        sessionUserId : 'fa780d1b-ee81-42d2-a0fc-56117b7bc49e'
    };
    //const tasks = await fetchTasks();
  //  const tasksByUser = await fetchTasksByUser(userSessionExample)
   // const quantity: number | undefined = tasksByUser?.length;
   // const labels = await fetchLabelsByUser(userSessionExample);
        

    return (
        <div className="bg-white h-full w-full">
            <BoardLabel sessionData={userSessionDataExample}></BoardLabel>
            <TaskCard priorityColor="blue" taskDescription="Programar" taskTag="important"></TaskCard>

        </div>


    )
}
/**<div className="md:w-full md:h-full md:flex md:flex-row md:justify-evenly">
                {defaultsLabels.map(board => {
                    return (
                        <div
                            className="md:border-r-[0.5px] md:border-gray-300  md:w-1/4 md:h-full "
                            key={board.name}
                            id={board.name}
                        >
                            <Suspense></Suspense>
                        </div>
                    )
                })}

            </div> */