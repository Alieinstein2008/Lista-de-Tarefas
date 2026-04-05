export type User = {
    id:string;
    name:string;
    email:string;
    password:string;

}
export type Task = {
    id:string;
    description:string;
    created_at:string;
    updated_at:string;
    starts_in:string;
    expired_in:string;
    priority:string;
};

export type Label = {
    id:string;
    title : string;
    quantity: number;
    tasks:[];
}

export type BoardData = {
    label_public_id: string;
    label_title: string;
    priority_public_id: string;
    priority_tag: string;
    priority_color: string;
    task_public_id: string;
    task_description: string;
    task_starts_in: string;
    task_expires_in: string;
}

export const defaultsLabels = [
    { name: 'Nova Tarefa', quantity: 4 },
    { name: 'Agendada', quantity: 4 },
    { name: 'Em progresso', quantity: 45 },
    { name: 'Concluída', quantity: 4 },
];