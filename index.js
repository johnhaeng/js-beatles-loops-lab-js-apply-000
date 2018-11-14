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
  
  var i = 0;
  do {
    i += 1;
    
    if (num < 15) {
      arr.push('I love the Beatles!');
    } 
    
  } while (i <= num); 
  
  return arr;
}

