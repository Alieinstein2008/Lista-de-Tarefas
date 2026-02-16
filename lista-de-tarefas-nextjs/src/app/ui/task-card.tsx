import { fetchTasks, fetchTasksByUser, fetchLabelsByUser} from "../lib/data";
import clsx from "clsx";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default async function TaskCard(
  { priorityColor, taskDescription, taskTag }: {
    priorityColor: 'red' | 'green' | 'yellow' | 'blue' | '',
    taskDescription: string,
    taskTag: string,
  }

) {

  


  return (
    <div className={clsx(
      'w-3xs h-fit rounded-xl m-3 text-white flex flex-col overflow-hidden',
      {
        'bg-red-500': priorityColor == 'red',
        'bg-green-500': priorityColor == 'green',
        'bg-yellow-500': priorityColor == 'yellow',
        'bg-blue-500': priorityColor == 'blue',
        'bg-black': priorityColor == '',
      }
    )}
    >
      <div className="w-full h-16 flex items-center ">
        <div className="w-1/6 h-full inline-flex items-center flex-row">
          <UserCircleIcon className="w-10 h-10"></UserCircleIcon>
        </div>
        <p className="w-8/10 h-fit text-xs break-words inline-block ">{taskDescription}</p>
      </div>

      <div className="w-full h-fit rounded-sm mb-0.5 flex align-center">
        <p className="text-xs w-1/4 h-5 ml-4 bg-red-500 ">{taskTag = 'Feedback'}</p>
      </div>
    </div >
  )
}
