
  

let secretNumber = 7;

for (let i = 1; i <= 3; ) {
     let num = Number(prompt("Угадай число от 1 до 10"));


   if (num === secretNumber) {
        console.log("Угадал!");
        break;

    }else if (num < secretNumber) {
        console.log("Число больше");

    }  else {
        console.log("Число меньше");

    }
}