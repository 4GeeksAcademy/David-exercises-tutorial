var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    //your code here
    let outputArray = people.slice();
    let index = outputArray.indexOf(personName);
    if(outputArray.includes(personName)){
        outputArray.splice(index,1);
    }
    
    return outputArray;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));