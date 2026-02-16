import postgres from 'postgres';
import { Task, Label } from './definitions';


const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchLabelsByUser({ userName, sessionUserId }: { userName: string, sessionUserId:string}) {
    try {
        const data = await sql<Label[]>`
            SELECT
                labels.id, labels.title,labels.user_id
            FROM labels
            LEFT JOIN tasks ON tasks.label_id = labels.id
            WHERE labels.user_id = ${sessionUserId} 
        
        `;
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return [];


    }
};

export async function seedDefaultsLabels() {
    try {

    } catch (error) {

    }
}



export async function fetchTasks() {
    try {
        const data = await sql<Task[]>`
        SELECT * FROM tasks 
        `;
        console.log(data)
    } catch (error) {
        console.log(error)
    }
};

export async function fetchTasksByUser({ userName }: { userName: string; }) {
    try {
        const data = await sql<Task[]>`
            SELECT  users.name, tasks.id, tasks.description, tasks.starts_in, tasks.expires_in, priorities.tag, priorities.color
            FROM tasks
            INNER JOIN users on tasks.user_id = users.id AND users.name LIKE ${userName}
            INNER JOIN priorities ON tasks.priority_id = priorities.id
         `;

        return (data)
    } catch (error) {
        console.log(error)
    }
}
