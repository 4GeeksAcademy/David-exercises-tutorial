
function sumTheElements(theArray){
	
	var total = 0;
	
    //your code here
    for(val in theArray){
        total += theArray[val];
    }

	return total;
}
