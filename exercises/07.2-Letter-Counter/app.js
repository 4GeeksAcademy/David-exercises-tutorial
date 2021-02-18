let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
for(let char of par.toLowerCase()){
    if(char !== " "){
        counts[char] = par.toLowerCase().split(char).length - 1;
    }
}

console.log(counts);