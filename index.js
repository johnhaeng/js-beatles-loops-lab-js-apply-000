// add solution here

function theBeatlesPlay (arrMusic, arrInstr) {
  var arr = [];
  
  for (var i = 0; i < arrMusic.length; i += 1) {
    var musicians = arrMusic[i];
    
    arr.push(musicians + ' plays ' + arrInstr[i]);
  }
  
  return arr;
} 


function johnLennonFacts (arr) {
  var finalArr = [];
  
  var i = 0;
  while (i < arr.length) {
    var fact = arr[i];
    i += 1;
    finalArr.push(fact + "!!!");
  }
  
  return finalArr;
}



function iLoveTheBeatles (num) {
  var arr = [];
  
  do {
    arr.push('I love the Beatles!');
    num += 1;
    
  } while (num < 15); 
  
  return arr;
}

