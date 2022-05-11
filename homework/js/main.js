

let  num = pow(5,4); //1000 

alert(num)

function pow(num1,num2){
    let result = 1;

    for(let i=0;i<num2;i++){
        result*=num1;
    }

    return result;
}


