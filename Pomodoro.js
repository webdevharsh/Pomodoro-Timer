//javascriptpro_
let allModBtn = document.querySelectorAll('.container .mode-btns-box button');
let focusBtn = document.querySelector('.container .mode-btns-box .focus-btn');
let shortBreakBtn = document.querySelector('.container .mode-btns-box .short-break-btn');
let longBreakBtn = document.querySelector('.container .mode-btns-box .long-break-btn');
let startBtn = document.querySelector('.container .btns .start-btn');
let pauseBtn = document.querySelector('.container .btns .pause-btn');
let resetBtn = document.querySelector('.container .btns .reset-btn');
let time = document.querySelector('.container .timer');

let setIn;
let count = 59;
let paused = true;
let minCount = 24;
let active = "focus";

time.innerHTML = `${minCount + 1}:00`;

let appendZero =(value)=>{
  value = value < 10 ? "0" + value : value;   
  return value;
}

resetBtn.addEventListener('click',(resetTime =()=>{
  pauseTimer();
  switch(active){
  case "long":
     minCount = 14;
     break;
  case "short":
     minCount = 4;
     break;
  default:
     minCount = 24;
     break;
  }
  count = 59;
  time.innerHTML = `${minCount + 1}:00`;
})
)

let removeBtnFocus =()=>{
 allModBtn.forEach((button)=>{
   button.classList.remove('btn-focus');
 })     
}

focusBtn.addEventListener('click',()=>{
  active = "focus";    
 removeBtnFocus();
 focusBtn.classList.add('btn-focus');
 pauseTimer();
 count = 59;
 minCount = 24;
 time.innerHTML = `${minCount + 1}:00`;
})

shortBreakBtn.addEventListener('click', () => {
  active = "short";  
  removeBtnFocus();
  shortBreakBtn.classList.add('btn-focus');
  pauseTimer();
  count = 59;
  minCount = 4;
  time.innerHTML = `${minCount + 1}:00`;
})

longBreakBtn.addEventListener('click', () => {
  active = "long";  
  removeBtnFocus();
  longBreakBtn.classList.add('btn-focus');
  pauseTimer();
  count = 59;
  minCount = 14;
  time.innerHTML = `${minCount + 1}:00`;
})

pauseBtn.addEventListener('click',(pauseTimer =()=>{
   paused = true;    
   clearInterval(setIn);
   resetBtn.style.display = 'none';
   pauseBtn.style.display = 'none';
   startBtn.style.display = 'block';
}) 
);

startBtn.addEventListener('click',()=>{
  resetBtn.style.display = 'block';
  pauseBtn.style.display = 'block';
  startBtn.style.display = 'none';  
  
  if(paused){
   paused = false;
   time.innerHTML = `${appendZero(minCount)}:${appendZero(count)}`;
   setIn = setInterval(()=>{
    count--;
    time.innerHTML = `${appendZero(minCount)}:${appendZero(count)}`;
    if(count == 0){
     if(minCount != 0){
        minCount--;    
        count = 60;
     }else{
        clearInterval(setIn)
     }   
    }
   },1000)
  }
})
