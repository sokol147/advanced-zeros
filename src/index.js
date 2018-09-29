module.exports = function getZerosCount(number, base) {
  let resultForTwo = 0, resultForLast = 0, num = 2;
  const factors = [];

  function getSimpleNum(base){
    if(base === 1){
      factors.push(1);
    }
    if(base % num === 0){
      factors.push(num);
      base = base / num;
      getSimpleNum(base);
    } else if(base % num !== 0){
      if(!(base <= num)){
        num++;
        getSimpleNum(base);
      }
    }
  }
  getSimpleNum(base);

  factors.sort(function(a,b) {return a - b});
  if(factors[0] == 1) factors.shift();

  let multiplyForFirst = 0, multiplyForLast = 0;

  for(let i = 0, len = factors.length; i < len; i++){
    if(factors[0] == factors[i]) multiplyForFirst++;
    if(factors[factors.length - 1] == factors[i]) multiplyForLast++;
  }

  for(let i = 1, len = number; i < len; i++){
    resultForTwo += Math.floor(number / Math.pow(factors[0],i));
    resultForLast += Math.floor(number / Math.pow(factors[factors.length - 1],i));
    if(Math.floor(number / Math.pow(2,i)) == 0 ||
       Math.floor(number / Math.pow(factors[factors.length - 1],i)) == 0) break;
  }
  let resultForBaseTwo = Math.floor(resultForTwo / multiplyForFirst);
  let resultForBaseLast = Math.floor(resultForLast / multiplyForLast);

  if(multiplyForLast == 1){
    return resultForBaseLast;
  } else {
    return Math.min(resultForBaseTwo, resultForBaseLast);
  }
}