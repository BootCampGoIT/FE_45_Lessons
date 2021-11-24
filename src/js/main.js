import { getTasks, deleteTask } from './api/api';
import { createTaskList } from './tasks/tasksList';
import './tasks/tasksForm';
import { store } from './data';

getTasks().then(() => createTaskList(store.tasks));

