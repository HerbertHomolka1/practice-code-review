export const difference = (firstArray, secondArray) => {

  let mySolution = [];
  for (let myNum of firstArray) {
    if (!secondArray.includes(myNum) && !mySolution.includes(myNum)  ) {
      mySolution.push(myNum) ;
    }
  }
  return mySolution;
};

// export const difference = (firstArray, secondArray) => {
//   const firstSet = new Set(firstArray);
//   const secondSet = new Set(secondArray);
//   return firstSet.filter((num) => !secondSet.has(num));
// };