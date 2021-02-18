function lyricsGenerator(inputArray){
   let beat = "";
        for (let i =0; i < inputArray.length; i++){
          if (inputArray[i] === 0){
            beat += "Boom ";
          }
          else if (inputArray[i] === 1){
            beat += "Drop the base "
            if (inputArray[i-1] === 1 && inputArray[i-2] === 1){
              beat += '!!!Break the base!!! ';
            }
          }
        }
    return beat;

}
// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))