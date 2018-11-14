// add solution here

function theBeatlesPlay (arrMusic, arrInstr) {
  var arr = [];
  
  for (var i = 0; i < arrMusic.length; i += 1) {
    var musicians = arrMusic[i];
    
    arr.push(musicians, arrInstr[i]);
  }
  
  return arr;
} 