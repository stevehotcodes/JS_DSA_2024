let n=7
let p=""
for (let i =1; i <=n; i+=2) {
    for(let j=1; j<=(n-i)/2;j++) {
        p+=" "
    }

    for(let k=1;k<=i;k++){
        p+="8"
    }

    p+="\n"
    
   

}
console.log(p);
