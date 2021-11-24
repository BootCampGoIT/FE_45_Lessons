import { postTask } from '../api/api';
import { store } from '../data';
import { createTaskList } from './tasksList';

const refs = {
  taskForm: document.forms.taskForm,
};

const data = {
  task: {
    title: '',
    desc: '',
  },
};

const addTask = e => {
  e.preventDefault();
  postTask(data.task).then(() => {
    createTaskList(store.tasks);
    data.task.title = '';
    data.task.desc = '';
    refs.taskForm.reset();
  });
};

const onHandleChange = e => {
  // console.log('e.target :>> ', e.target);
  // console.log('e.target.value :>> ', e.target.value);
  const { name, value } = e.target;
  // console.log(`${name} - ${value}`);
  data.task[name] = value;
};

refs.taskForm.addEventListener('input', onHandleChange);
refs.taskForm.addEventListener('submit', addTask);

export default refs;
