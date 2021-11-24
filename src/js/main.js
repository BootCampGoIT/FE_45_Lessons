import { getTasks } from './api/api';
import { createTaskList } from './tasks/tasksList';
import './tasks/tasksForm';
import { store } from './data';
import {
  createPaginationMarkup,
  getTasksSlice,
  setActive,
  setPaginationListener,
} from './tasks/paginationTasks';

getTasks().then(() => {
  getTasksSlice();
  createPaginationMarkup();
  setActive(1);
  setPaginationListener();
});
