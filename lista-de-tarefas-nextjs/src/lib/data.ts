import postgres from 'postgres';
import { BoardData } from './definitions';
import { DEFAULT_BOARD_LABEL_DATA } from './constants';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const users = {
    name: 'Alonso',
    email: 'alonso@gmail.com',
    password: '12345678'

}


export async function fetchBoardDataByUser({ userName, sessionUserId }: { userName: string, sessionUserId: string }) {

    try {
        const data = await sql<BoardData[]>`
             select 
                "Label".public_id as label_public_id, 
                "Label".title as label_title, 
                "Priority".public_id as priority_public_id, 
                "Priority".tag as priority_tag, 
                "Priority".color as priority_color,
                "Task".public_id as task_public_id, 
                "Task".description as task_description, 
                "Task".starts_in, 
                "Task".expires_in
                
            from "Label" 

            left join "Task" on "Label".id = "Task".label_id
            left join "Priority" on "Priority".id = "Task".priority_id
            
            where "Label".user_id = ${sessionUserId}

        `;
        return (data);

    } catch (error) {

        return DEFAULT_BOARD_LABEL_DATA;
        
    }
}
