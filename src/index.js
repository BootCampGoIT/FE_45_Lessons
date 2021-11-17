import './js/header';
import './js/main';
import './sass/main.scss';
import moment from 'moment';

const login = document.querySelector('.login');
const refresh = document.querySelector('.refresh');
const isAuth = document.querySelector('.isAuth');
const p = document.querySelector('.dateNow');

const delta = 60000;

login.addEventListener('click', () =>
  localStorage.setItem('expireTime', JSON.stringify(new Date().getTime())),
);

isAuth.addEventListener('click', () => {
  const expireDateFromLS = JSON.parse(localStorage.getItem('expireTime'));
  if (expireDateFromLS) {
    p.textContent = new Date().getTime() - expireDateFromLS < delta ? 'Valid' : 'Invalid';
  } else p.textContent = 'No correct';

  // localStorage.setItem('expireTime', JSON.stringify(new Date().getTime())),
});

// const res = moment().format('DD.MM.YYYY');
// console.log(res);

// const date = new Date();

// console.dir(date);
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(date.toString());

// const date = new Date(2030, 2, 91, 14, 25, 0, 0);
// console.log(date);

// ===================
// const date = new Date();
// console.log('Date: ', date);

// // Возвращает день месяца от 1 до 31
// console.log('getDate(): ', date.getDate());

// // Возвращает день недели от 0 до 6
// console.log('getDay(): ', date.getDay());

// // Возвращает месяц от 0 до 11
// console.log('getMonth(): ', date.getMonth());

// // Возвращает год из 4 цифр
// console.log('getFullYear(): ', date.getFullYear());

// // Возвращает час
// console.log('getHours(): ', date.getHours());

// // Возвращает минуты
// console.log('getMinutes(): ', date.getMinutes());

// // Возвращает секунды
// console.log('getSeconds(): ', date.getSeconds());

// // Возвращает миллисекунды
// console.log('getMilliseconds(): ', date.getMilliseconds());

// const days = ['воскресенье', 'понедельник', 'вторник'];
// const monthes = [
//   'января',
//   'dfghjk',
//   'sdfsddsfs',
//   'fsdfsdfsd',
//   'dfghjk',
//   'sdfsddsfs',
//   'fsdfsdfsd',
//   'dfghjk',
//   'sdfsddsfs',
//   'fsdfsdfsd',
//   'ноября',
//   'sdfsddsfs',
// ];

// const myDate = new Date();
// console.log(`${myDate.getDate()} ${monthes[myDate.getMonth()]} ${myDate.getFullYear()} года`);

// console.log(object); 15 ноября 2021 года и это понедельник

// ===========================

// const date = new Date(3123632123671);

// const ms = date.getTime();

// console.log(new Date(ms).getFullYear());
// console.log(ms);
// date.setMinutes(50);
// console.log(date);
// // "Sat Mar 16 2030 14:50:00 GMT+0200"

// date.setFullYear(2040, 4, 8);

// ==================

// const startBtn = document.querySelector('.js-start');
// const stopBtn = document.querySelector('.js-stop');
// const pauseBtn = document.querySelector('.js-pause');
// let timerId = null;
// stopBtn.disabled = true;
// pauseBtn.disabled = true;

// startBtn.addEventListener('click', () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
//   startBtn.disabled = true;
//   stopBtn.disabled = false;
//   pauseBtn.disabled = false;
//   console.log('Start:', timerId);
// });

// pauseBtn.addEventListener('click', () => {
//   startBtn.disabled = false;
//   stopBtn.disabled = false;
//   pauseBtn.disabled = true;
//   clearInterval(timerId);
//   timerId = null;
// });

// stopBtn.addEventListener('click', () => {
//   if (timerId) {
//     clearInterval(timerId);
//   } else timerId = null;

//   console.log(`Interval with id ${timerId} has stopped!`);
//   console.log('Stop:', timerId);
//   startBtn.disabled = false;
//   stopBtn.disabled = true;
// });
