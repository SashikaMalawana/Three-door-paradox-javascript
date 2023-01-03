// import { ThreeDoorsFunctions } from './ThreeDoorsFunctions';

let noOfDoors = 3;
let noOfRounds = 1000;
let isSwitch = true;

let winCount = 0;
let lossCount = 0;

function RunSimulation() {

  let dimondDoorNo = Math.ceil( Math.random() * noOfDoors );

  let pickDoorNo = Math.ceil( Math.random() * noOfDoors );

  let unpickDoorNos = [];
  for (let i=1; i<=noOfDoors; i++) {
    if (i != pickDoorNo) {
      unpickDoorNos.push(i);
    }
  }

  let openDoorNos = [];
  let remainDoorNo;
  if (unpickDoorNos.includes(dimondDoorNo)) {
    openDoorNos = unpickDoorNos.filter(no => {
      return no != dimondDoorNo;
    })
    remainDoorNo = dimondDoorNo;
  }
  else {
    let randomPosition = Math.ceil( Math.random() * unpickDoorNos.length );
    remainDoorNo = unpickDoorNos[randomPosition];
  }

  if (isSwitch) {
    tempNo = pickDoorNo;
    pickDoorNo = remainDoorNo;
    remainDoorNo = tempNo;
  }

  if (pickDoorNo == dimondDoorNo) {
    result = 'Win';
    winCount++;
  }
  else {
    result = 'Lose';
    lossCount++;
  }

  // console.log("pickDoorNo is : ", pickDoorNo, " dimondDoorNo : ", dimondDoorNo);
  // console.log("openDoorNos is : ", openDoorNos);
  // console.log("result is : ", result);
  
}

for (let i=1; i<=noOfRounds; i++) {
  RunSimulation();
}
console.log("Win  : ", winCount);
console.log("Loss  : ", lossCount);
console.log("Win percentage : ", winCount/(winCount+lossCount) * 100, "%");
console.log("Loss percentage : ", lossCount/(winCount+lossCount) * 100, "%");



// Varifications
function verifyPickRandomNumbers() {
  let dimondDoorNo = Math.ceil( Math.random() * noOfDoors );
  let autoDoorNo = Math.ceil( Math.random() * noOfDoors );
  if (dimondDoorNo != autoDoorNo) {
    console.log("success")
    console.log(dimondDoorNo, " , ", autoDoorNo)
  }
  else {
    console.log("not success")
    console.log(dimondDoorNo, " , ", autoDoorNo)
  }
}

for (let i=1; i<100; i++) {
  // verifyPickRandomNumbers()
  // ThreeDoorsFunctions.verifyPickRandomNumbers()
}
