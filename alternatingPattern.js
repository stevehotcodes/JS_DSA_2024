let rows=5;

let pattern=""


for(let i=1;i<=rows;rows++){
    for( let num=1; num<=rows;num++){
        pattern+="*"
    }    
    pattern+="\n";
  
}
// console.log(pattern);


for(let n=1;n<=rows;n++){
    for(let num=6;num>n;num--){
        pattern+="*"
    }
    pattern +="\n"
}

console.log(pattern)