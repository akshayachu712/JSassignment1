let sum =0
let input =prompt("Enter a number in between 0 and 1million");

if (input>1000000 || input<0){
    alert ("Invalid numberr")
}

else {
    for(i=0;i<=input;i++){
        sum+=i;
    }
}

alert(`sum of $ {input} is $ {sum}`)