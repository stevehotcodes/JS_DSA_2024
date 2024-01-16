let n=5 // number of rows
let p ="" // pattern sequence;

for(let i=1;i<=n;i++){
    for(let j=6;j>n;j--){
       
        if(j==6){
            p+="*"  
            break
        }

    }
    p+="*"

}
console.log(p);