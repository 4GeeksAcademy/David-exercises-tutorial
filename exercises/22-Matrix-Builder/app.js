// Code goes here
let matrixBuilder = (inputNum) =>{
    let outputArray = [];
    for(var i = 0; i <= inputNum - 1; i++){
        outputArray[i] = new Array();
        for(var j = 0; j <= inputNum - 1; j++){
        outputArray[i].push(1);
        }
                
    }
    return outputArray
}



// do not change anything from this line down
console.log(matrixBuilder(5))