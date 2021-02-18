var myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

// short version to resolve the excercise
console.log(Math.max.apply(Math,myArray));

// large version to resolve the excercise
/*let aux = 0;
for(val in myArray){
    if(myArray[val] > aux){
        aux = myArray[val];
    }
}
console.log(aux);*/