export interface ITodolist {
    id: number;
    title: string;
    description: string;
    status: string;
    due_date: number;
    createdAt?: Date;
    updatedAt?: Date;
}
  