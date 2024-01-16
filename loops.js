// question 3
// *
// **
// ***
// ****
// *****
// ******

for(let i=0;i<7;i++){
    switch(i){
        case 1:
            console.log("*");
        break
        case 2:
            console.log("* *");
        break
        case 3:
            console.log("* * *");
        break;
        case 4:
            console.log("* * * *");
        break;
        case 5:
            console.log("* * * * *")
        break;
        case 6:
            console.log("* * * * * *");
        break;
    }
}

// question 2
// ******
// *****
// ****
// ***
// **
// *

let patternSequence =""
let r=5;

//outer loop

for(let i=1;i<r;i++){
    for( let num=1; num<=i;num++){
        if(num===1||num==i||num===r){
            patternSequence+="*"
        }
        else{
            patternSequence+=""
        }
        
    }
    patternSequence+="\n";
}

console.log(patternSequence);

