module.exports = function getZerosCount(number, base) {
  let tempBase = base;
  let maxNumber = Number.MAX_VALUE;

  for(let i = 2; i <= tempBase; i++){
    if(tempBase % i === 0){

      let denominator = 0;

      while(tempBase % i === 0){
        tempBase /= i;
        denominator++;
      }

      let innerRes = Math.floor(number / i);

      let count = 0;

      while(innerRes > 0){
        count += innerRes;
        innerRes = Math.floor(innerRes / i);
      }

      maxNumber = Math.min(maxNumber, Math.floor(count / denominator));
    }
  }

  return maxNumber;
}