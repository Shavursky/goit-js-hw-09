import Notiflix from 'notiflix';

const elemForm = document.querySelector('.form');
// console.log(elemForm);

elemForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstDelay = Number(e.target.delay.value);
  const delayStep = Number(e.target.step.value);
  const amount = Number(e.target.amount.value);

  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, firstDelay + delayStep * i)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});

function createPromise(position, delay) {  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;  
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  })   
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });