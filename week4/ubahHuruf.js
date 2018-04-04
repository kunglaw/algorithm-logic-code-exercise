function ubahHuruf(kata) {
  // you can only write your code here!
  var result = "";
  var huruf = "";
  var idx = 0;

  for(i=0;i<=kata.length-1;i++)
  {
    idx = kata[i].charCodeAt(0);
    huruf = String.fromCharCode(idx+1); 
    result += huruf;
  }

  return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu