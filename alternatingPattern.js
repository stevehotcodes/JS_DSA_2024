let r=1;
let asterisk=""
let pattern="*"
do{
    asterisk+="*"
    console.log(asterisk)
    r++

}while(r<6)
for(let n=1;n<=5;n++){
        for(let num=6;num>n;num--){
            pattern+="*"
        }
        pattern +="\n"
    }
 console.log(pattern)   

 /**
  * output
  *           *
**
***
****
*****
******
****
***
**
*
  */



//