// generates random number between 1 to 49

let randomNumbers = [];

for (let i = 1; i <= 6; i++) {
    const min = 1;
    const max = 50;

    const randomInt = Math.floor(Math.random() * (max - min) + min);
    randomNumbers.push(randomInt);
}

console.log(randomNumbers);


