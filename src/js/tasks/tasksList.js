import { deleteTask } from '../api/api';
import { store } from '../data';

const refs = {
  taskList: document.querySelector('.taskList'),
};

const createTask = task =>
  `<li class="taskItem" data-id=${task.id}>
    <h2 class="taskName">${task.title}</h2>
    <p>${task.desc}</p>
    <button type="button" data-button="itemDeleteButton">Delete</button>
  </li>`;

export const createTaskList = list => {
  const markup = list.reduce((acc, task) => {
    acc += createTask(task);
    return acc;
  }, '');
  refs.taskList.innerHTML = markup;
};

const deleteTaskItem = e => {
  if (e.target.dataset) {
    if (e.target.dataset.button === 'itemDeleteButton') {
      const id = e.target.closest('[data-id]').dataset.id;
      deleteTask(id).then(() => {
        store.tasks = store.tasks.filter(task => task.id !== id);
        createTaskList(store.tasks);
      });
    }
  }
};

refs.taskList.addEventListener('click', deleteTaskItem);

const insertTasks = () => {};