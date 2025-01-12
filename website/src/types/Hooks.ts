import { BaseTask, TaskResponse, TaskType } from "src/types/Task";

export type TaskApiHook<Task extends BaseTask, ResponseContent> = {
  response: TaskResponse<Task>;
  isLoading: boolean;
  completeTask: (interaction: ResponseContent) => Promise<void>;
  skipTask: () => Promise<void>;
  rejectTask: (reason: string) => Promise<void>;
};

export type TaskApiHooks = Record<TaskType, (args: TaskType) => TaskApiHook<BaseTask, any>>;
