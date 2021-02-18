let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]

function getParkingLotState(state){
    let returnState = {
        totalSlots: 0,
        availableSlots: 0,
        occupiedSlots: 0
    };
    for(let i = 0; i < state.length; i++){
        for(let j = 0; j < state[i].length; j++){
            if(state[i][j] === 1){
                returnState.occupiedSlots += 1
            }
            else if(state[i][j] === 2){
                returnState.availableSlots += 1
            }
        }
    }
    returnState.totalSlots = returnState.occupiedSlots + returnState.availableSlots
    return  returnState;
}
console.log(getParkingLotState(parking_state))