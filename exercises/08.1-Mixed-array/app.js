var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
let dataType = [];
//your code here
for(let i=0; i < mix.length; i++){
    dataType.push(typeof mix[i]);
}
console.log(dataType);