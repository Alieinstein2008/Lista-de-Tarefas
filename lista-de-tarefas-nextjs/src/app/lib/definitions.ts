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
export const defaultsLabels = [
    { name: 'Nova Tarefa', quantity: 4 },
    { name: 'Agendada', quantity: 4 },
    { name: 'Em progresso', quantity: 45 },
    { name: 'Concluída', quantity: 4 },
];