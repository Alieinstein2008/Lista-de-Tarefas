import { Task } from "./task.types";
import { Label } from "./label.types";
import { Priority } from "./priority.types";

export interface BoardData extends Task, Label, Priority {
}