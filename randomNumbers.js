// generates random number between 1 to 49

let randomNumbers = [];

for (let i = 1; i <= 6; i++) {
    const min = 1;
    const max = 50;

    const randomInt = Math.floor(Math.random() * (max - min) + min);
    randomNumbers.push(randomInt);
}

console.log(randomNumbers);

//while loop alternative

let j=1
let randomNumbers1 = [];

while(j<7){
    const min = 1;
    const max = 50;

    const randomInt = Math.floor(Math.random() * (max - min) + min);
    randomNumbers1.push(randomInt);

    j++
}
console.log("while loop alterantive of generating random numbers",randomNumbers1);

//do while alternative

let k=1
let randomNumbers2 = [];

do{
    const min = 1;
    const max = 50;

    const randomInt = Math.floor(Math.random() * (max - min) + min);
    randomNumbers2.push(randomInt);
    k++
    

}while(k<=6)
console.log("do while loop alterantive of generating random numbers",randomNumbers2);




